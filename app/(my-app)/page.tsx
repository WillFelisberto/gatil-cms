import config from '@payload-config';
import { ArrowRight, ArrowUpRight, Gift, HandHeart, Heart, MapPin, Package, PawPrint, ShieldCheck, Sparkles, MessageCircle, Users } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getPayload } from 'payload';
import type { Homepage, Media } from '@/payload-types';

import { CatCard } from './components/Atoms/CatCard';
import { RichTextComponent } from './components/Atoms/RichText';
import { VolunteerCard } from './components/Atoms/VolunteerCard';
import { Pagination } from './components/Molecules/Pagination';
import { RenderBlocks } from './utils/RenderBlocks';
import { getBankById } from './utils/Banks';
import { CAT_PAGE_SIZE, catalogWhere, normalizeCatalogFilter, normalizeCatalogPage } from './utils/catCatalog';
import PixComponent from './colabore/PixComponent';

export const dynamic = 'force-dynamic';

type Props = { searchParams: Promise<{ page?: string; filtro?: string }> };

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config });
  const home = await payload.findGlobal({ slug: 'homepage' });
  const image = home?.meta?.image;
  return {
    title: home?.meta?.title || 'Gatil dos Resgatados | Todo amor merece um lar',
    description: home?.meta?.description || 'Conheça os gatos resgatados, adote, apadrinhe e colabore com nosso projeto.',
    alternates: { canonical: '/' },
    openGraph: { images: typeof image === 'object' && image?.url ? [{ url: image.url }] : undefined }
  };
}

export default async function Home({ searchParams }: Props) {
  const search = await searchParams;
  const filtro = normalizeCatalogFilter(search.filtro);
  const page = normalizeCatalogPage(search.page);
  const payload = await getPayload({ config });

  const [home, result, siteConfig, sobre, colabore, apadrinhe, volunteers, adote, contato] = await Promise.all([
    payload.findGlobal({ slug: 'homepage' }),
    payload.find({ collection: 'cats', where: catalogWhere(filtro), sort: '-dataEntrada', limit: CAT_PAGE_SIZE, page, depth: 1 }),
    payload.findGlobal({ slug: 'site-config' }),
    payload.findGlobal({ slug: 'sobre' }),
    payload.findGlobal({ slug: 'colabore' }),
    payload.findGlobal({ slug: 'apadrinhe' }),
    payload.find({ collection: 'users', where: { show: { equals: true } }, limit: 24, depth: 1 }),
    payload.findGlobal({ slug: 'adote' }),
    payload.findGlobal({ slug: 'contato' })
  ]);
  if (page > 1 && (result.totalPages === 0 || page > result.totalPages)) {
    const query = new URLSearchParams();
    if (filtro !== 'todos') query.set('filtro', filtro);
    if (result.totalPages > 1) query.set('page', String(result.totalPages));
    redirect(`/${query.size ? `?${query}` : ''}#gatinhos`);
  }

  const hero = home.layout?.find((block) => block.blockType === 'hero');
  const title = hero?.title || 'Todo amor merece um lar.';
  const subtitle = hero?.subtitle || 'Cada gatinho resgatado carrega uma história. Você pode fazer parte do próximo capítulo.';
  const background = hero && typeof hero.backgroundImage === 'object' ? (hero.backgroundImage as Media).url : null;
  const aboutPhoto = typeof sobre?.imagem === 'object' && sobre.imagem ? sobre.imagem.url : null;
  const whatsapp = siteConfig.whatsapp || '';
  const phone = whatsapp.replace(/\D/g, '').replace(/^55(?=\d{10,11}$)/, '');
  const contactHref = phone ? `https://wa.me/55${phone}?text=${encodeURIComponent('Olá! Gostaria de conhecer melhor o Gatil dos Resgatados e ajudar o projeto.')}` : null;
  const extraBlocks = home.layout?.filter((block) => block.blockType !== 'hero') || [];
  const cmsSponsorHero = apadrinhe.layout?.find(block => block.blockType === 'hero');
  const sponsorBlocks = apadrinhe.layout?.filter(block => block.blockType !== 'hero') || [];
  const adoptionBlocks = adote.layout?.filter(block => block.blockType !== 'hero') || [];
  const donationBlocks = colabore.layout?.filter(block => block.blockType !== 'hero') || [];
  const contactBlocks = contato.layout?.filter(block => block.blockType !== 'hero') || [];
  const bank = colabore.dadosBancarios;
  const qr = typeof colabore.qrcode === 'object' && colabore.qrcode ? colabore.qrcode.url : undefined;
  const bankLogo = typeof colabore.logobanco === 'object' && colabore.logobanco ? colabore.logobanco.url : undefined;
  const hasDonationData = Boolean(qr || colabore.chavesPix?.some(k => k.valor) || (bank?.banco && bank?.contaCorrente));
  const count = result.totalDocs;

  return <div className="gd-home">
    <section className="gd-hero" id="inicio" aria-labelledby="gd-hero-title">
      <div className="gd-container gd-hero-grid">
        <div className="gd-hero-copy">
          <span className="gd-eyebrow"><span className="gd-eyebrow-dot"/> RESGATANDO VIDAS EM SOMBRIO · SC</span>
          <h1 id="gd-hero-title">{title}</h1>
          <p>{subtitle}</p>
          <div className="gd-hero-cta"><Link href="/#gatinhos" className="gd-button gd-button-primary">Conheça nossos gatinhos <ArrowUpRight size={19}/></Link><Link href="/#sobre" className="gd-link-inline">Nossa história <ArrowRight size={18}/></Link></div>
          <div className="gd-hero-note"><span><Heart size={18} fill="currentColor"/></span><p>Um lar, uma família, um novo começo.<br/><strong>Cada vida importa.</strong></p></div>
        </div>
        <div className="gd-hero-art"><div className="gd-hero-oval"><Image src={background || '/pages/home/gato1.png'} alt="Gatinho acolhido pelo projeto" fill sizes="(max-width: 800px) 100vw, 49vw" priority className="gd-cover"/></div><span className="gd-float-heart" aria-hidden="true"><Heart size={29} fill="currentColor"/></span><div className="gd-float-card"><span><PawPrint size={22}/></span><p><strong>Pequenos gestos</strong><br/>transformam vidas.</p></div><span className="gd-hero-sparkle" aria-hidden="true">✳</span></div>
      </div>
      <div className="gd-hero-bottom gd-container"><span><span className="gd-mini-paw">✳</span> Amor não se compra, se adota.</span><a href="#gatinhos">Role para conhecer <span>↓</span></a></div>
    </section>

    <section className="gd-quick-actions" aria-label="Como você pode ajudar"><div className="gd-container gd-action-grid">
      <Link href="/#gatinhos" className="gd-action-tile"><span className="gd-action-icon gd-action-blue"><Heart size={27}/></span><span><strong>Adote um amigo</strong><small>Abra espaço para um novo amor.</small></span><ArrowUpRight size={21}/></Link>
      <Link href="/#gatinhos" className="gd-action-tile"><span className="gd-action-icon gd-action-peach"><HandHeart size={27}/></span><span><strong>Seja padrinho</strong><small>Cuide mesmo à distância.</small></span><ArrowUpRight size={21}/></Link>
      <Link href="/#colabore" className="gd-action-tile"><span className="gd-action-icon gd-action-mint"><Gift size={27}/></span><span><strong>Faça uma doação</strong><small>Todo gesto faz a diferença.</small></span><ArrowUpRight size={21}/></Link>
    </div></section>

    <section id="gatinhos" className="gd-section gd-container gd-unified-catalog" aria-labelledby="gd-cats-title">
      <div className="gd-section-heading"><div><span className="gd-kicker">♥ CONHEÇA NOSSOS RESGATADOS</span><h2 id="gd-cats-title">Pequenas vidas,<br/><em>grandes histórias.</em></h2><p>Todos os nossos gatinhos em um só lugar. Alguns procuram uma família, outros também podem receber seu carinho por meio do apadrinhamento.</p></div></div>
      <div className="gd-catalog-controls">
        <nav className="gd-catalog-filters" aria-label="Filtrar gatinhos">
          <Link href="/#gatinhos" className={filtro === 'todos' ? 'gd-filter-active' : ''} aria-current={filtro === 'todos' ? 'page' : undefined}>Todos os gatinhos</Link>
          <Link href="/?filtro=adocao#gatinhos" className={filtro === 'adocao' ? 'gd-filter-active' : ''} aria-current={filtro === 'adocao' ? 'page' : undefined}><Heart size={15}/> Para adoção</Link>
          <Link href="/?filtro=apadrinhamento#gatinhos" className={filtro === 'apadrinhamento' ? 'gd-filter-active' : ''} aria-current={filtro === 'apadrinhamento' ? 'page' : undefined}><HandHeart size={15}/> Para apadrinhar</Link>
        </nav>
        <p className="gd-catalog-total" aria-live="polite"><strong>{count}</strong> {count === 1 ? 'gatinho encontrado' : 'gatinhos encontrados'} · {result.totalPages ? `Página ${page} de ${result.totalPages}` : 'Nenhuma página'}</p>
      </div>
      {result.docs.length ? <div className="gd-cat-grid">{result.docs.map(cat => <CatCard key={cat.id} cat={cat} whatsappNumber={whatsapp}/>)}</div> : <div className="gd-empty">Não há gatinhos com esse perfil neste momento. Experimente outro filtro! 🐾</div>}
      <Pagination currentPage={page} totalPages={result.totalPages} anchor="gatinhos"/>
      <p className="gd-catalog-caption">Os botões em cada perfil respeitam a disponibilidade configurada no nosso cadastro. As informações são atualizadas pela equipe do Gatil.</p>
    </section>

    <section className="gd-about-band" id="sobre"><div className="gd-container gd-about-grid">
      <div className="gd-about-photo"><Image src={aboutPhoto || '/pages/about/sobre.png'} alt="História do Gatil dos Resgatados" fill sizes="(max-width: 800px) 100vw, 50vw" className="gd-cover"/><span className="gd-about-sticker"><Heart fill="currentColor" size={21}/> Feito de amor e coragem</span></div>
      <div className="gd-about-copy"><span className="gd-kicker">NOSSA HISTÓRIA</span><h2>Por trás de cada resgate, existe <em>muito amor.</em></h2>
        {sobre.descricao ? <div className="gd-richtext gd-about-description"><RichTextComponent lexicalData={sobre.descricao}/></div> : <p>Resgatamos e cuidamos de gatos em situação de vulnerabilidade, com o sonho de encontrar famílias para cada um deles.</p>}
        <div className="gd-about-features"><span><ShieldCheck size={18}/> Cuidado responsável</span><span><PawPrint size={18}/> Acolhimento com carinho</span></div>
        <Link href="/#contato" className="gd-button gd-button-primary">Faça parte dessa história <ArrowUpRight size={19}/></Link>
      </div>
    </div></section>

    <section id="apadrinhamento" className="gd-section gd-container gd-sponsor-intro" aria-labelledby="gd-sponsor-title"><div className="gd-sponsor-intro-grid"><div><span className="gd-kicker">CUIDE MESMO À DISTÂNCIA</span><h2 id="gd-sponsor-title">Um carinho que <em>vai mais longe.</em></h2><p>{cmsSponsorHero?.subtitle || 'Nem todo mundo pode adotar, mas todo mundo pode fazer a diferença. Apadrinhando, você participa dos cuidados dos nossos resgatados.'}</p><div className="gd-sponsor-actions"><Link className="gd-button gd-button-primary" href="/?filtro=apadrinhamento#gatinhos">Ver gatinhos para apadrinhar <HandHeart size={17}/></Link><Link href="/termos-de-apadrinhamento" className="gd-link-inline">Conheça os termos <ArrowUpRight size={17}/></Link></div></div><div className="gd-sponsor-benefits"><div><HandHeart size={25}/><strong>Escolha um gatinho</strong><span>Os perfis disponíveis têm a opção de apadrinhar.</span></div><div><Gift size={25}/><strong>Ajude nos cuidados</strong><span>Contribua com alimentação, saúde e bem-estar.</span></div><div><Heart size={25}/><strong>Faça parte da história</strong><span>Seu apoio ajuda a dar continuidade ao resgate.</span></div></div></div>
      {sponsorBlocks.length > 0 && <details className="gd-cms-disclosure"><summary>Veja mais informações sobre o apadrinhamento <ArrowRight size={18}/></summary><div className="gd-cms-blocks"><RenderBlocks blocks={sponsorBlocks}/></div></details>}
    </section>

    <section className="gd-donation-spot" id="colabore"><div className="gd-container gd-donation-grid"><div><span className="gd-kicker gd-kicker-light">SUA AJUDA MUDA DESTINOS</span><h2>Não é só uma doação.<br/>É um <em>novo começo.</em></h2><p>Seu apoio contribui com alimentação, cuidados veterinários, medicamentos e um abrigo seguro para os resgatados.</p><div className="gd-donation-actions"><a href="#doar-pix" className="gd-button gd-button-light">Quero ajudar agora <ArrowUpRight size={19}/></a><span>Chaves PIX administradas pelo nosso CMS.</span></div></div><div className="gd-donation-picture"><Image src="/pages/home/gato2.png" alt="Gatinho resgatado" fill sizes="(max-width: 800px) 100vw, 42vw" className="gd-cover"/><span><Sparkles size={18}/> Cada vida vale a pena</span></div></div></section>

    <section id="doar-pix" className="gd-section gd-container gd-home-donation"><div className="gd-section-heading"><div><span className="gd-kicker">DOAR É TRANSFORMAR</span><h2>Seu apoio faz <em>a diferença.</em></h2><p>Você pode contribuir diretamente com as informações de doação cadastradas pela equipe.</p></div></div>
      {hasDonationData ? <div className="gd-donation-layout"><PixComponent chavesPix={colabore.chavesPix || []} qrcodeUrl={qr || undefined} bankLogoUrl={bankLogo || undefined}/>{bank?.banco && bank?.contaCorrente && <aside className="gd-donation-card gd-bank-data"><h2>Transferência bancária</h2><p>Outra forma de apoiar nossos resgatados.</p><div><span>Banco</span><strong>{getBankById(bank.banco)?.label || bank.banco}</strong></div>{bank.agencia && <div><span>Agência</span><strong>{bank.agencia}</strong></div>}<div><span>Conta</span><strong>{bank.contaCorrente}</strong></div>{bank.favorecido && <div><span>Favorecido</span><strong>{bank.favorecido}</strong></div>}</aside>}</div> : <div className="gd-empty">Estamos atualizando as informações para doação. Entre em contato para saber como ajudar.</div>}
      {donationBlocks.length > 0 && <details className="gd-cms-disclosure"><summary>Outras informações sobre doações <ArrowRight size={18}/></summary><div className="gd-cms-blocks"><RenderBlocks blocks={donationBlocks}/></div></details>}
      <div className="gd-ways-grid gd-home-ways"><div><Package size={26}/><h3>Doe materiais</h3><p>Ração, areia, produtos de limpeza e outros itens ajudam muito.</p></div><div><Users size={26}/><h3>Seja voluntário</h3><p>Ajude no cuidado e na divulgação dos nossos resgatados.</p></div></div>
    </section>

    <section className="gd-steps-section gd-container" id="adocao-responsavel"><div className="gd-section-heading"><div><span className="gd-kicker">ADOÇÃO CONSCIENTE</span><h2>Um encontro que muda <em>duas vidas.</em></h2><p>Adotar é um compromisso de cuidado e afeto para toda a vida.</p></div></div><div className="gd-steps-grid"><div><span>01</span><Heart size={28}/><h3>Conheça os resgatados</h3><p>Encontre um gatinho que combine com você e sua família.</p></div><div><span>02</span><PawPrint size={28}/><h3>Converse com a equipe</h3><p>Entenda as necessidades do animal e as etapas de adoção.</p></div><div><span>03</span><ShieldCheck size={28}/><h3>Ofereça um lar seguro</h3><p>Prepare sua casa para receber um novo membro na família.</p></div></div>{adoptionBlocks.length > 0 && <details className="gd-cms-disclosure"><summary>Orientações completas de adoção <ArrowRight size={18}/></summary><div className="gd-cms-blocks"><RenderBlocks blocks={adoptionBlocks}/></div></details>}<div className="gd-center"><Link href="/politica-de-adocao" className="gd-link-inline">Leia nossa política de adoção <ArrowUpRight size={19}/></Link></div></section>

    {volunteers.docs.length > 0 && <section className="gd-container gd-volunteers gd-home-volunteers" aria-labelledby="gd-volunteers-title"><div className="gd-section-heading"><div><span className="gd-kicker">PESSOAS QUE FAZEM A DIFERENÇA</span><h2 id="gd-volunteers-title">Quem cuida com amor.</h2><p>Conheça parte da equipe dedicada aos nossos resgatados.</p></div></div><div className="gd-volunteers-grid">{volunteers.docs.map(user => <VolunteerCard key={user.id} name={user.name} photo={typeof user.photo === 'object' && user.photo?.url ? user.photo.url : '/no-image.jpg'} phone={user.telefone || ''} showPhone={!!user.showPhone}/>)}</div></section>}

    {extraBlocks.length > 0 && <section className="gd-cms-blocks gd-container" aria-label="Outras informações do Gatil"><RenderBlocks<Homepage> blocks={extraBlocks}/></section>}

    {contactBlocks.length > 0 && <section className="gd-container gd-home-contact-blocks" aria-label="Informações de contato"><RenderBlocks blocks={contactBlocks}/></section>}
    <section className="gd-final-cta" id="contato"><div className="gd-container gd-final-inner"><span className="gd-kicker">A GENTE PRECISA DE VOCÊ</span><h2>A próxima história de amor<br/>pode começar com você.</h2><p>Quer adotar, apadrinhar, doar ou tirar dúvidas? Nossa equipe terá prazer em conversar.</p><div><Link href="/#gatinhos" className="gd-button gd-button-light">Conhecer os gatinhos <Heart size={18}/></Link>{contactHref && <a href={contactHref} target="_blank" rel="noopener noreferrer" className="gd-button gd-button-glass">Falar no WhatsApp <MessageCircle size={18}/></a>}</div><span className="gd-final-location"><MapPin size={15}/> Sombrio, Santa Catarina</span></div></section>
  </div>;
}
