import config from '@payload-config';
import { getPayload } from 'payload';
import { Media } from 'payload-types';

import { CatCard } from '../components/Atoms/CatCard';
import { Pagination } from '../components/Molecules/Pagination';

export const metadata = {
  title: 'Adote um Gatinho | Gatil dos Resgatados',
  description:
    'Adote um gato resgatado e transforme vidas. Conheça nossos gatinhos disponíveis para adoção, suas histórias e saiba como dar um lar cheio de amor.'
};

type AdotePageProps = {
  searchParams: {
    page?: string;
  };
};

export default async function AdotePage({ searchParams }: AdotePageProps) {
  const payload = await getPayload({ config });
  const page = parseInt(searchParams.page || '1', 10);

  const { docs: cats, totalPages } = await payload.find({
    collection: 'cats',
    where: {
      and: [{ adotado: { equals: false } }, { show: { equals: true } }]
    },
    sort: '-dataEntrada',
    limit: 12,
    page
  });

  return (
    <main className="max-w-[1300px] mx-auto px-4 py-12">
      <section className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#013274] mb-6">
          Encontre um Amigo Para Sempre
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-4 leading-relaxed">
          Adotar um animal é um gesto de amor que transforma vidas — a deles e a sua! Aqui, você
          encontrará nossos adoráveis resgatados, cada um com uma história única e uma imensa
          vontade de fazer parte de uma família. Ao abrir as portas do seu lar para um deles, você
          oferece uma nova chance, um futuro repleto de carinho e segurança.
        </p>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-2">
          Explore as histórias, apaixone-se e faça parte dessa transformação. Seu novo melhor amigo
          pode estar aqui, esperando por você. ❤️
        </p>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-2">
          Pronto para adotar? Descubra como é fácil começar essa jornada abaixo!
        </p>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-2">
          <a
            href="/politica-de-adocao"
            className="text-pink-600 underline hover:text-pink-800 transition"
          >
            Política de adoção
          </a>
        </p>
      </section>

      <section aria-labelledby="gatinhos-disponiveis" className="mt-12">
        <h2 id="gatinhos-disponiveis" className="sr-only">
          Gatinhos disponíveis para adoção
        </h2>

        {cats.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            😿 Nenhum gatinho disponível para adoção no momento. Volte em breve!
          </p>
        ) : (
          <>
            <div className="flex flex-wrap justify-center gap-8">
              {cats.map((cat) => (
                <div key={cat.id} className="flex-grow max-w-sm min-w-[300px] flex justify-center">
                  <CatCard cat={{ ...cat, foto: (cat.foto as Media).url || null }} />
                </div>
              ))}
            </div>
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <Pagination currentPage={page} totalPages={totalPages} />
              </div>
            )}
          </>
        )}
      </section>
    </main>
  );
}
