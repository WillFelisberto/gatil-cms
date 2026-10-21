import config from '@payload-config';
import { ArrowRight, ArrowUpRight, Gift, HandHeart, Heart, MapPin, Package, PawPrint, ShieldCheck, Sparkles, MessageCircle, Users } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getPayload } from 'payload';
import type { Media } from '@/payload-types';
import { resolveLandingContent, type LandingContent } from '@/lib/landingContent';

import { CatCard } from './components/Atoms/CatCard';
import { RichTextComponent } from './components/Atoms/RichText';
import { VolunteerCard } from './components/Atoms/VolunteerCard';
import { Pagination } from './components/Molecules/Pagination';
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

  const [home, result, siteConfig, sobre, colabore, volunteers] = await Promise.all([
    payload.findGlobal({ slug: 'homepage' }),
    payload.find({ collection: 'cats', where: catalogWhere(filtro), sort: '-dataEntrada', limit: CAT_PAGE_SIZE, page, depth: 1 }),
    payload.findGlobal({ slug: 'site-config' }),
    payload.findGlobal({ slug: 'sobre' }),
    payload.findGlobal({ slug: 'colabore' }),
    payload.find({ collection: 'users', where: { show: { equals: true } }, limit: 24, depth: 1 })
  ]);
  if (page > 1 && (result.totalPages === 0 || page > result.totalPages)) {
    const query = new URLSearchParams();
    if (filtro !== 'todos') query.set('filtro', filtro);
    if (result.totalPages > 1) query.set('page', String(result.totalPages));
    redirect(`/${query.size ? `?${query}` : ''}#gatinhos`);
  }

  const landing = home as unknown as LandingContent;
  const copy = resolveLandingContent(landing);
  const hero = landing.layout?.find(block => block.blockType === 'hero');
  const mediaUrl = (item: unknown): string | undefined => typeof item === 'object' && item !== null && 'url' in item && typeof item.url === 'string' ? item.url : undefined;
  const background = mediaUrl(landing.heroImage) || mediaUrl(hero?.backgroundImage);
  const aboutPhoto = mediaUrl(landing.aboutImage) || mediaUrl(sobre?.imagem);
  const aboutDescription = landing.aboutDescription || sobre?.descricao;
  const donationPhoto = mediaUrl(landing.donationImage);
  const whatsapp = siteConfig.whatsapp || '';
  const phone = whatsapp.replace(/\D/g, '').replace(/^55(?=\d{10,11}$)/, '');
  const contactHref = phone ? `https://wa.me/55${phone}?text=${encodeURIComponent(copy.contact.whatsappMessage)}` : null;
  const bank = colabore.dadosBancarios;
  const qr = typeof colabore.qrcode === 'object' && colabore.qrcode ? colabore.qrcode.url : undefined;
  const bankLogo = typeof colabore.logobanco === 'object' && colabore.logobanco ? colabore.logobanco.url : undefined;
  const hasDonationData = Boolean(qr || colabore.chavesPix?.some(k => k.valor) || (bank?.banco && bank?.contaCorrente));
  const count = result.totalDocs;

  return <div className="gd-home">
    <section className="gd-hero" id="inicio" aria-labelledby="gd-hero-title">
      <div className="gd-container gd-hero-grid">
        <div className="gd-hero-copy">
          <span className="gd-eyebrow"><span className="gd-eyebrow-dot"/> {copy.hero.eyebrow}</span>
          <h1 id="gd-hero-title">{copy.hero.title}</h1>
          <p>{copy.hero.subtitle}</p>
          <div className="gd-hero-cta"><Link href="/#gatinhos" className="gd-button gd-button-primary">{copy.hero.primaryButton} <ArrowUpRight size={19}/></Link><Link href="/#sobre" className="gd-link-inline">{copy.hero.secondaryButton} <ArrowRight size={18}/></Link></div>
          <div className="gd-hero-note"><span><Heart size={18} fill="currentColor"/></span><p>{copy.hero.note}<br/><strong>{copy.hero.noteHighlight}</strong></p></div>
        </div>
        <div className="gd-hero-art"><div className="gd-hero-oval"><Image src={background || '/pages/home/gato1.png'} alt={copy.hero.imageAlt} fill sizes="(max-width: 800px) 100vw, 49vw" priority className="gd-cover"/></div><span className="gd-float-heart" aria-hidden="true"><Heart size={29} fill="currentColor"/></span><div className="gd-float-card"><span><PawPrint size={22}/></span><p><strong>{copy.hero.floatTitle}</strong><br/>{copy.hero.floatSubtitle}</p></div><span className="gd-hero-sparkle" aria-hidden="true">✳</span></div>
      </div>
      <div className="gd-hero-bottom gd-container"><span><span className="gd-mini-paw">✳</span> {copy.hero.bottomText}</span><a href="#gatinhos">{copy.hero.scrollText} <span>↓</span></a></div>
    </section>

    <section className="gd-quick-actions" aria-label="Como você pode ajudar"><div className="gd-container gd-action-grid">
      <Link href="/#gatinhos" className="gd-action-tile"><span className="gd-action-icon gd-action-blue"><Heart size={27}/></span><span><strong>{copy.shortcuts.firstTitle}</strong><small>{copy.shortcuts.firstDescription}</small></span><ArrowUpRight size={21}/></Link>
      <Link href="/#gatinhos" className="gd-action-tile"><span className="gd-action-icon gd-action-peach"><HandHeart size={27}/></span><span><strong>{copy.shortcuts.secondTitle}</strong><small>{copy.shortcuts.secondDescription}</small></span><ArrowUpRight size={21}/></Link>
      <Link href="/#colabore" className="gd-action-tile"><span className="gd-action-icon gd-action-mint"><Gift size={27}/></span><span><strong>{copy.shortcuts.thirdTitle}</strong><small>{copy.shortcuts.thirdDescription}</small></span><ArrowUpRight size={21}/></Link>
    </div></section>

    <section id="gatinhos" className="gd-section gd-container gd-unified-catalog" aria-labelledby="gd-cats-title">
      <div className="gd-section-heading"><div><span className="gd-kicker">♥ {copy.catalog.eyebrow}</span><h2 id="gd-cats-title">{copy.catalog.title}<br/><em>{copy.catalog.titleEmphasis}</em></h2><p>{copy.catalog.description}</p></div></div>
      <div className="gd-catalog-controls">
        <nav className="gd-catalog-filters" aria-label="Filtrar gatinhos">
          <Link href="/#gatinhos" className={filtro === 'todos' ? 'gd-filter-active' : ''} aria-current={filtro === 'todos' ? 'page' : undefined}>{copy.catalog.allLabel}</Link>
          <Link href="/?filtro=adocao#gatinhos" className={filtro === 'adocao' ? 'gd-filter-active' : ''} aria-current={filtro === 'adocao' ? 'page' : undefined}><Heart size={15}/> {copy.catalog.adoptionLabel}</Link>
          <Link href="/?filtro=apadrinhamento#gatinhos" className={filtro === 'apadrinhamento' ? 'gd-filter-active' : ''} aria-current={filtro === 'apadrinhamento' ? 'page' : undefined}><HandHeart size={15}/> {copy.catalog.sponsorLabel}</Link>
        </nav>
        <p className="gd-catalog-total" aria-live="polite"><strong>{count}</strong> {count === 1 ? copy.catalog.singularResult : copy.catalog.pluralResult} · {result.totalPages ? `Página ${page} de ${result.totalPages}` : 'Nenhuma página'}</p>
      </div>
      {result.docs.length ? <div className="gd-cat-grid">{result.docs.map(cat => <CatCard key={cat.id} cat={cat} whatsappNumber={whatsapp} labels={{ adoptionBadge: copy.catalog.adoptionBadge, sponsorBadge: copy.catalog.sponsorBadge, adoptButton: copy.catalog.adoptButton, sponsorButton: copy.catalog.sponsorButton }}/>)}</div> : <div className="gd-empty">{copy.catalog.emptyMessage}</div>}
      <Pagination currentPage={page} totalPages={result.totalPages} anchor="gatinhos"/>
      <p className="gd-catalog-caption">{copy.catalog.caption}</p>
    </section>

    <section className="gd-about-band" id="sobre"><div className="gd-container gd-about-grid">
      <div className="gd-about-photo"><Image src={aboutPhoto || '/pages/about/sobre.png'} alt={copy.about.imageAlt} fill sizes="(max-width: 800px) 100vw, 50vw" className="gd-cover"/><span className="gd-about-sticker"><Heart fill="currentColor" size={21}/> {copy.about.sticker}</span></div>
      <div className="gd-about-copy"><span className="gd-kicker">{copy.about.eyebrow}</span><h2>{copy.about.title} <em>{copy.about.titleEmphasis}</em></h2>
        {aboutDescription ? <div className="gd-richtext gd-about-description"><RichTextComponent lexicalData={aboutDescription as NonNullable<typeof sobre.descricao>}/></div> : <p>{copy.about.fallbackDescription}</p>}
        <div className="gd-about-features"><span><ShieldCheck size={18}/> {copy.about.featureOne}</span><span><PawPrint size={18}/> {copy.about.featureTwo}</span></div>
        <Link href="/#contato" className="gd-button gd-button-primary">{copy.about.button} <ArrowUpRight size={19}/></Link>
      </div>
    </div></section>

    <section id="apadrinhamento" className="gd-section gd-container gd-sponsor-intro" aria-labelledby="gd-sponsor-title"><div className="gd-sponsor-intro-grid"><div><span className="gd-kicker">{copy.sponsorship.eyebrow}</span><h2 id="gd-sponsor-title">{copy.sponsorship.title} <em>{copy.sponsorship.titleEmphasis}</em></h2><p>{copy.sponsorship.description}</p><div className="gd-sponsor-actions"><Link className="gd-button gd-button-primary" href="/?filtro=apadrinhamento#gatinhos">{copy.sponsorship.button} <HandHeart size={17}/></Link><Link href="/termos-de-apadrinhamento" className="gd-link-inline">{copy.sponsorship.termsButton} <ArrowUpRight size={17}/></Link></div></div><div className="gd-sponsor-benefits"><div><HandHeart size={25}/><strong>{copy.sponsorship.firstTitle}</strong><span>{copy.sponsorship.firstDescription}</span></div><div><Gift size={25}/><strong>{copy.sponsorship.secondTitle}</strong><span>{copy.sponsorship.secondDescription}</span></div><div><Heart size={25}/><strong>{copy.sponsorship.thirdTitle}</strong><span>{copy.sponsorship.thirdDescription}</span></div></div></div>
    </section>

    <section className="gd-donation-spot" id="colabore"><div className="gd-container gd-donation-grid"><div><span className="gd-kicker gd-kicker-light">{copy.donationBanner.eyebrow}</span><h2>{copy.donationBanner.title}<br/><em>{copy.donationBanner.titleEmphasis}</em></h2><p>{copy.donationBanner.description}</p><div className="gd-donation-actions"><a href="#doar-pix" className="gd-button gd-button-light">{copy.donationBanner.button} <ArrowUpRight size={19}/></a><span>{copy.donationBanner.note}</span></div></div><div className="gd-donation-picture"><Image src={donationPhoto || '/pages/home/gato2.png'} alt={copy.donationBanner.imageAlt} fill sizes="(max-width: 800px) 100vw, 42vw" className="gd-cover"/><span><Sparkles size={18}/> {copy.donationBanner.sticker}</span></div></div></section>

    <section id="doar-pix" className="gd-section gd-container gd-home-donation"><div className="gd-section-heading"><div><span className="gd-kicker">{copy.donations.eyebrow}</span><h2>{copy.donations.title} <em>{copy.donations.titleEmphasis}</em></h2><p>{copy.donations.description}</p></div></div>
      {hasDonationData ? <div className="gd-donation-layout"><PixComponent chavesPix={colabore.chavesPix || []} qrcodeUrl={qr || undefined} bankLogoUrl={bankLogo || undefined}/>{bank?.banco && bank?.contaCorrente && <aside className="gd-donation-card gd-bank-data"><h2>{copy.donations.bankTitle}</h2><p>{copy.donations.bankDescription}</p><div><span>Banco</span><strong>{getBankById(bank.banco)?.label || bank.banco}</strong></div>{bank.agencia && <div><span>Agência</span><strong>{bank.agencia}</strong></div>}<div><span>Conta</span><strong>{bank.contaCorrente}</strong></div>{bank.favorecido && <div><span>Favorecido</span><strong>{bank.favorecido}</strong></div>}</aside>}</div> : <div className="gd-empty">{copy.donations.emptyMessage}</div>}
      <div className="gd-ways-grid gd-home-ways"><div><Package size={26}/><h3>{copy.donations.materialsTitle}</h3><p>{copy.donations.materialsDescription}</p></div><div><Users size={26}/><h3>{copy.donations.volunteersTitle}</h3><p>{copy.donations.volunteersDescription}</p></div></div>
    </section>

    <section className="gd-steps-section gd-container" id="adocao-responsavel"><div className="gd-section-heading"><div><span className="gd-kicker">{copy.adoption.eyebrow}</span><h2>{copy.adoption.title} <em>{copy.adoption.titleEmphasis}</em></h2><p>{copy.adoption.description}</p></div></div><div className="gd-steps-grid"><div><span>01</span><Heart size={28}/><h3>{copy.adoption.firstTitle}</h3><p>{copy.adoption.firstDescription}</p></div><div><span>02</span><PawPrint size={28}/><h3>{copy.adoption.secondTitle}</h3><p>{copy.adoption.secondDescription}</p></div><div><span>03</span><ShieldCheck size={28}/><h3>{copy.adoption.thirdTitle}</h3><p>{copy.adoption.thirdDescription}</p></div></div><div className="gd-center"><Link href="/politica-de-adocao" className="gd-link-inline">{copy.adoption.policyButton} <ArrowUpRight size={19}/></Link></div></section>

    {volunteers.docs.length > 0 && <section className="gd-container gd-volunteers gd-home-volunteers" aria-labelledby="gd-volunteers-title"><div className="gd-section-heading"><div><span className="gd-kicker">{copy.volunteers.eyebrow}</span><h2 id="gd-volunteers-title">{copy.volunteers.title}</h2><p>{copy.volunteers.description}</p></div></div><div className="gd-volunteers-grid">{volunteers.docs.map(user => <VolunteerCard key={user.id} name={user.name} photo={typeof user.photo === 'object' && user.photo?.url ? user.photo.url : '/no-image.jpg'} phone={user.telefone || ''} showPhone={!!user.showPhone}/>)}</div></section>}
    <section className="gd-final-cta" id="contato"><div className="gd-container gd-final-inner"><span className="gd-kicker">{copy.contact.eyebrow}</span><h2>{copy.contact.title}<br/>{copy.contact.titleEmphasis}</h2><p>{copy.contact.description}</p><div><Link href="/#gatinhos" className="gd-button gd-button-light">{copy.contact.catalogButton} <Heart size={18}/></Link>{contactHref && <a href={contactHref} target="_blank" rel="noopener noreferrer" className="gd-button gd-button-glass">{copy.contact.whatsappButton} <MessageCircle size={18}/></a>}</div><span className="gd-final-location"><MapPin size={15}/> {copy.contact.location}</span></div></section>
  </div>;
}
