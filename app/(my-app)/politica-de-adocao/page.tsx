import config from '@payload-config';
import type { Metadata } from 'next';
import { getPayload } from 'payload';
import { ShieldCheck } from 'lucide-react';
import type { Media, PoliticaAdocao } from '@/payload-types';
import { RenderBlocks } from '../utils/RenderBlocks';
export const dynamic = 'force-dynamic';
export async function generateMetadata(): Promise<Metadata> {
 const payload = await getPayload({ config });
 const page = await payload.findGlobal({ slug: 'politicaAdocao' });
 const img = page.meta?.image;
 return { title: page.meta?.title || 'Política de adoção | Gatil dos Resgatados', description: page.meta?.description || 'Conheça as condições de adoção responsável do Gatil dos Resgatados.', openGraph: { images: typeof img === 'object' && img?.url ? [{ url: img.url }] : undefined } };
}
export default async function PoliticaAdocaoPage() {
 const payload = await getPayload({ config });
 const data = await payload.findGlobal({ slug: 'politicaAdocao' });
  const cmsHero = data.layout.find(block => block.blockType === 'hero');
 return <div className="gd-inner-page"><section className="gd-page-hero"><div className="gd-container"><span className="gd-kicker">ADOÇÃO CONSCIENTE</span><h1>{cmsHero?.title || <>Cuidar é um compromisso <em>para a vida.</em></>}</h1><p>{cmsHero?.subtitle || 'Conheça nossas orientações para uma adoção responsável.'}</p><span className="gd-page-deco"><ShieldCheck size={66}/></span></div></section><article className="gd-content-panel" aria-label="Política de adoção"><RenderBlocks<PoliticaAdocao> blocks={data.layout.filter(block => block.blockType !== 'hero')}/></article></div>;
}
