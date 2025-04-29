import config from '@payload-config';
import { Metadata } from 'next';
import { getPayload } from 'payload';

import { Apadrinhe, Media } from '@/payload-types';

import { Pagination } from '../components/Molecules/Pagination';
import { RenderBlocks } from '../utils/RenderBlocks';
import { CatCardList } from './CatCardList';
export const dynamic = 'force-dynamic'; // caso use dados dinâmicos do Payload

type ApadrinhePageProps = {
  searchParams: Promise<{ page?: string }>;
};

// 🔥 SEO dinâmico com o plugin de SEO
export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config });

  const apadrinhePage = await payload.findGlobal({ slug: 'apadrinhe' });

  return {
    title: apadrinhePage?.meta?.title || undefined,
    description: apadrinhePage?.meta?.description || undefined,
    openGraph: {
      title: apadrinhePage?.meta?.title || undefined,
      description: apadrinhePage?.meta?.description || undefined,
      images: (apadrinhePage?.meta?.image as Media)?.url
        ? [{ url: (apadrinhePage?.meta?.image as Media).url! }]
        : undefined
    }
  };
}

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
      <RenderBlocks<Apadrinhe> blocks={apadrinhe.layout} />

      <section aria-labelledby="gatinhos-disponiveis" className="mt-12">
        <h2 id="gatinhos-disponiveis" className="sr-only">
          Gatinhos disponíveis para apadrinhamento
        </h2>
        {cats.length === 0 ? (
          <div className="text-center text-gray-500 text-lg min-h-[300px] flex items-center justify-center">
            😿 Nenhum gatinho disponível para apadrinhamento no momento. Volte em breve!
          </div>
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
