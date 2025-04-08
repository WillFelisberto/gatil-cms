import config from '@payload-config';
import { getPayload } from 'payload';
import { Media } from 'payload-types';

import { CatCard } from '../components/Atoms/CatCard';
import { RichTextComponent } from '../components/Atoms/RichText';
import { Pagination } from '../components/Molecules/Pagination';

export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
  const payload = await getPayload({ config });
  const { totalPages } = await payload.find({
    collection: 'cats',
    limit: 1
  });

  return Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString()
  }));
}

export const metadata = {
  title: 'Adote um Gatinho | Gatil dos Resgatados',
  description:
    'Adote um gato resgatado e transforme vidas. Conheça nossos gatinhos disponíveis para adoção, suas histórias e saiba como dar um lar cheio de amor.'
};

type AdotePageProps = {
  searchParams: Promise<{ page?: string }>;
};

export default async function AdotePage({ searchParams }: AdotePageProps) {
  const resolvedSearchParams = await searchParams;
  const page = parseInt(resolvedSearchParams.page || '1', 10);

  const payload = await getPayload({ config });

  const [adote, { docs: cats, totalPages }, global] = await Promise.all([
    payload.findGlobal({ slug: 'adote' }),
    payload.find({
      collection: 'cats',
      where: {
        and: [{ adotado: { equals: false } }, { show: { equals: true } }]
      },
      sort: '-dataEntrada',
      limit: 12,
      page
    }),
    payload.findGlobal({ slug: 'site-config' })
  ]);

  const whatsapp = global?.whatsapp || '';

  return (
    <div className="max-w-[1300px] mx-auto px-4 py-12">
      <section className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#013274] mb-6">
          Encontre um Amigo Para Sempre
        </h1>

        {adote.descricao && (
          <div className="text-gray-600 max-w-2xl mx-auto mb-4 leading-relaxed">
            <RichTextComponent lexicalData={adote.descricao!} />
          </div>
        )}
      </section>

      <section aria-labelledby="gatinhos-disponiveis" className="mt-12">
        <h2 id="gatinhos-disponiveis" className="sr-only">
          Gatinhos disponíveis para adoção
        </h2>

        {cats.length === 0 ? (
          <div className="min-h-[300px] flex items-center justify-center text-center text-gray-500 text-lg">
            😿 Nenhum gatinho disponível para adoção no momento. Volte em breve!
          </div>
        ) : (
          <>
            <div className="flex flex-wrap justify-center gap-8">
              {cats.map((cat) => {
                const foto = (cat.foto as Media)?.url || null;
                return (
                  <div
                    key={cat.id}
                    className="flex-grow max-w-sm min-w-[300px] flex justify-center"
                  >
                    <CatCard whatsappNumber={whatsapp} cat={{ ...cat, foto }} />
                  </div>
                );
              })}
            </div>
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
