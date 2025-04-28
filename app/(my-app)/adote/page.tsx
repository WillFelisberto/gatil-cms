import config from '@payload-config';
import { Metadata } from 'next';
import { getPayload } from 'payload';
import { Media } from 'payload-types';

import { CatCard } from '../components/Atoms/CatCard';
import { Pagination } from '../components/Molecules/Pagination';
import { RenderBlocks } from '../utils/RenderBlocks';

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

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config });
  const adote = await payload.findGlobal({ slug: 'adote' });

  return {
    title: adote?.meta?.title || 'Adote um Gatinho | Gatil dos Resgatados',
    description:
      adote?.meta?.description ||
      'Adote um gato resgatado e transforme vidas. Conheça nossos gatinhos disponíveis para adoção, suas histórias e saiba como dar um lar cheio de amor.',
    openGraph: {
      title: adote?.meta?.title || undefined,
      description: adote?.meta?.description || undefined,
      images: (adote?.meta?.image as Media)?.url
        ? [{ url: (adote?.meta?.image as Media).url! }]
        : undefined
    }
  };
}

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
      <RenderBlocks blocks={adote.layout} />

      <section aria-labelledby="gatinhos-disponiveis" className="mt-12">
        {cats.length === 0 ? (
          <div className="min-h-[300px] flex items-center justify-center text-center text-gray-500 text-lg">
            😿 Nenhum gatinho disponível para adoção no momento. Volte em breve!
          </div>
        ) : (
          <>
            <div className="flex flex-wrap justify-center gap-8">
              {cats.map((cat) => {
                return (
                  <div
                    key={cat.id}
                    className="flex-grow max-w-sm min-w-[300px] flex justify-center"
                  >
                    <CatCard whatsappNumber={whatsapp} cat={{ ...cat }} />
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
