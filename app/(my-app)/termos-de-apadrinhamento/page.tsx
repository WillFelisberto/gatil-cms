import config from '@payload-config';
import type { Metadata } from 'next';
import { getPayload } from 'payload';
import { HandHeart } from 'lucide-react';
import type { Apadrinhe } from '@/payload-types';
import { RenderBlocks } from '../utils/RenderBlocks';
export const dynamic = 'force-dynamic';
export async function generateMetadata(): Promise<Metadata> {
 const payload = await getPayload({ config });
 const page = await payload.findGlobal({ slug: 'politicaApadrinhamento' });
 const img = page.meta?.image;
 return { title: page.meta?.title || 'Termos de apadrinhamento | Gatil dos Resgatados', description: page.meta?.description || 'Entenda como funciona o apadrinhamento dos gatinhos.', openGraph: { images: typeof img === 'object' && img?.url ? [{ url: img.url }] : undefined } };
}
export default async function TermosPage() {
 const payload = await getPayload({ config });
 const page = await payload.findGlobal({ slug: 'politicaApadrinhamento' });
  const cmsHero = page.layout.find(block => block.blockType === 'hero');
 return <div className="gd-inner-page"><section className="gd-page-hero gd-page-hero-peach"><div className="gd-container"><span className="gd-kicker">APADRINHAMENTO RESPONSÁVEL</span><h1>{cmsHero?.title || <>Um gesto de amor <em>que permanece.</em></>}</h1><p>{cmsHero?.subtitle || 'Veja as informações sobre o nosso programa de apadrinhamento.'}</p><span className="gd-page-deco"><HandHeart size={66}/></span></div></section><article className="gd-content-panel" aria-label="Termos de apadrinhamento"><RenderBlocks<Apadrinhe> blocks={page.layout.filter(block => block.blockType !== 'hero')}/></article></div>;
}
