import config from '@payload-config';
import type { Metadata } from 'next';
import { getPayload } from 'payload';

import { Media } from '@/payload-types';

import { RenderBlocks } from '../utils/RenderBlocks';

export const dynamic = 'force-dynamic'; // caso use dados dinâmicos do Payload

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config });

  const politicaApadrinhamentoPage = await payload.findGlobal({ slug: 'politicaApadrinhamento' });

  return {
    title: politicaApadrinhamentoPage?.meta?.title || undefined,
    description: politicaApadrinhamentoPage?.meta?.description || undefined,
    openGraph: {
      title: politicaApadrinhamentoPage?.meta?.title || undefined,
      description: politicaApadrinhamentoPage?.meta?.description || undefined,
      images: (politicaApadrinhamentoPage?.meta?.image as Media)?.url
        ? [{ url: (politicaApadrinhamentoPage?.meta?.image as Media).url! }]
        : undefined
    }
  };
}
export default async function TermosDeApadrinhamentoPage() {
  const payload = await getPayload({ config });
  const politica = await payload.findGlobal({ slug: 'politicaApadrinhamento' });

  return (
    <article
      className="mb-4 pt-12 w-full flex flex-col max-w-6xl mx-auto px-4"
      aria-labelledby="politica-de-apadrinhamento"
      aria-describedby="descricao-politica-apadrinhamento"
    >
      <RenderBlocks blocks={politica.layout} />
    </article>
  );
}
