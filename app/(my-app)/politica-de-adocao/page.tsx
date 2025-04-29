import config from '@payload-config';
import type { Metadata } from 'next';
import { getPayload } from 'payload';

import { Media, PoliticaAdocao } from '@/payload-types';

import { RenderBlocks } from '../utils/RenderBlocks';

export const dynamic = 'force-dynamic'; // caso use dados dinâmicos do Payload

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config });

  const politicaAdocaoPage = await payload.findGlobal({ slug: 'politicaAdocao' });

  return {
    title: politicaAdocaoPage?.meta?.title || undefined,
    description: politicaAdocaoPage?.meta?.description || undefined,
    openGraph: {
      title: politicaAdocaoPage?.meta?.title || undefined,
      description: politicaAdocaoPage?.meta?.description || undefined,
      images: (politicaAdocaoPage?.meta?.image as Media)?.url
        ? [{ url: (politicaAdocaoPage?.meta?.image as Media).url! }]
        : undefined
    }
  };
}

export default async function PoliticaAdocaoPage() {
  const payload = await getPayload({ config });
  const politica = await payload.findGlobal({ slug: 'politicaAdocao' });

  return (
    <article
      className="mb-4 pt-12 w-full flex flex-col max-w-6xl text-center mx-auto px-4"
      aria-labelledby="politica-adocao"
      aria-describedby="descricao-politica"
    >
      <RenderBlocks<PoliticaAdocao> blocks={politica.layout} />
    </article>
  );
}
