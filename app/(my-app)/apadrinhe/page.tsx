import config from '@payload-config';
import { getPayload } from 'payload';
import { FaCat } from 'react-icons/fa';

import { RichTextComponent } from '../components/Atoms/RichText';
import { Pagination } from '../components/Molecules/Pagination';
import { CatCardList } from './CatCardList';

type ApadrinhePageProps = {
  searchParams: Promise<{ page?: string }>;
};

export default async function ApadrinhePage({ searchParams }: ApadrinhePageProps) {
  const resolvedSearchParams = await searchParams;

  const page = parseInt(resolvedSearchParams?.page || '1', 10);

  const payload = await getPayload({ config });

  const [{ docs: cats, totalPages }, siteConfig, apadrinhe] = await Promise.all([
    payload.find({
      collection: 'cats',
      where: {
        and: [
          { adotado: { equals: false } },
          { show: { equals: true } },
          { disponivelParaApadrinhamento: { equals: true } }
        ]
      },
      sort: '-dataEntrada',
      limit: 12,
      page
    }),
    payload.findGlobal({ slug: 'site-config' }),
    payload.findGlobal({ slug: 'apadrinhe' })
  ]);

  return (
    <div className="max-w-[1300px] mx-auto px-4 py-12">
      <section className="mb-12 text-justify">
        <h1 className="text-3xl md:text-4xl font-bold text-[#013274] mb-6 flex items-center gap-2">
          Apadrinhe <FaCat />
        </h1>

        {apadrinhe?.descricao && (
          <div className="text-gray-600 max-w-4xl mx-auto mb-4 leading-relaxed">
            <RichTextComponent lexicalData={apadrinhe.descricao} />
          </div>
        )}
      </section>

      <section aria-labelledby="gatinhos-disponiveis" className="mt-12">
        <h2 id="gatinhos-disponiveis" className="sr-only">
          Gatinhos disponíveis para apadrinhamento
        </h2>

        {cats.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            😿 Nenhum gatinho disponível para apadrinhamento no momento. Volte em breve!
          </p>
        ) : (
          <>
            <CatCardList cats={cats} whatsapp={siteConfig.whatsapp || ''} />
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <Pagination currentPage={page} totalPages={totalPages} />
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}
