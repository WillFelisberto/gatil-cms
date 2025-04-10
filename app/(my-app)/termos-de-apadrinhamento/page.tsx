import config from '@payload-config';
import type { Metadata } from 'next';
import { getPayload } from 'payload';

import { Media } from '@/payload-types';

import { RichTextComponent } from '../components/Atoms/RichText';

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
      className="mb-4 pt-12 w-full flex flex-col max-w-6xl text-justify mx-auto px-4"
      aria-labelledby="titulo-politica"
      aria-describedby="descricao-politica"
    >
      <h1 id="titulo-politica" className="text-4xl md:text-4xl font-bold mb-6 text-[#013274]">
        Nossa Política de Apadrinhamento
      </h1>
      <div id="descricao-politica" className="text-gray-600 leading-relaxed mb-5">
        <RichTextComponent lexicalData={politica.descricao!} />
      </div>
    </article>
  );
}
