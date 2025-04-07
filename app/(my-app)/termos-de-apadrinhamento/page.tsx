import config from '@payload-config';
import type { Metadata } from 'next';
import { getPayload } from 'payload';

import { RichTextComponent } from '../components/Atoms/RichText';
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Política de Apadrinhamento | Gatil dos Resgatados',
  description:
    'Conheça os critérios, planos e benefícios do programa de apadrinhamento do Gatil dos Resgatados e ajude a transformar a vida de um gatinho.'
};

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
