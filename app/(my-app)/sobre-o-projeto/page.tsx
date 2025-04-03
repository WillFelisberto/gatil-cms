import config from '@payload-config';
import { Metadata } from 'next';
import Image from 'next/image';
import { getPayload } from 'payload';
import { Media, Sobre } from 'payload-types';

import { RichTextComponent } from '../components/Atoms/RichText';
import { VolunteerCard } from '../components/Atoms/VolunteerCard';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Sobre o Gatil dos Resgatados | Resgate, Adoção e Amor',
    description:
      'Conheça o Gatil dos Resgatados: um projeto que há mais de 8 anos resgata e cuida de gatos em situação de vulnerabilidade em Santa Catarina. Faça parte dessa transformação!',
    openGraph: {
      title: 'Sobre o Gatil dos Resgatados',
      description:
        'Projeto de resgate e adoção de gatos em SC. Descubra como ajudar e conhecer nossos voluntários!',
      type: 'website'
    }
  };
}

const FirstSection = ({ sobre }: { sobre: Sobre }) => {
  const { descricao, imagem } = sobre;
  return (
    <section className="mb-4 w-full max-w-6xl text-center" aria-labelledby="sobre-gatil">
      <div className="h-full flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto gap-8 px-4 py-12 pb-0">
        {/* Imagem */}
        <div className="md:w-1/2 w-full flex justify-center">
          <div className="relative w-full h-64 md:h-96">
            <Image
              src={(imagem as Media).url || ''}
              alt={(imagem as Media).alt || 'Gatinhos atrás de uma tela, em frente a uma porta'}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-xl shadow-lg object-cover hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>

        <div className="md:w-1/2 text-justify md:text-left">
          <h1 id="sobre-gatil" className="text-3xl md:text-4xl font-bold mb-6 text-[#013274]">
            Sobre o Gatil dos Resgatados
          </h1>
          <div className="text-gray-600 leading-relaxed mb-5">
            <RichTextComponent lexicalData={descricao!} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default async function AboutPage() {
  const payload = await getPayload({ config });

  const [sobre, usersRes] = await Promise.all([
    payload.findGlobal({ slug: 'sobre' }),
    payload.find({
      collection: 'users',
      where: { and: [{ show: { equals: true } }] }
    })
  ]);

  const users = usersRes.docs;
  return (
    <>
      {sobre && <FirstSection sobre={sobre} />}

      {users.length > 0 && (
        <section aria-labelledby="voluntarios" className="mt-12 mb-16 w-full max-w-6xl text-center">
          <h2 id="voluntarios" className="text-2xl font-semibold mb-6 text-[#013274]">
            Nossos voluntários
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {users.map((user) => (
              <VolunteerCard
                key={user.id}
                name={user.name}
                showPhone={user.showPhone || false}
                photo={(user.photo as Media)?.url || ''}
                phone={user.telefone || ''}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
