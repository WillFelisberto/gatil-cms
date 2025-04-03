import config from '@payload-config';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getPayload } from 'payload';
import { Media } from 'payload-types';

import { VolunteerCard } from '../components/Atoms/VolunteerCard';

export const metadata: Metadata = {
  title: 'Sobre o Gatil dos Resgatados | Resgate, Adoção e Amor',
  description:
    'Conheça o Gatil dos Resgatados: um projeto que há mais de 8 anos resgata e cuida de gatos em situação de vulnerabilidade em Santa Catarina. Faça parte dessa transformação!'
};

const FirstSection = () => (
  <section className="mb-4 w-full max-w-6xl text-center" aria-labelledby="sobre-gatil">
    <div className="h-full flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto gap-8 px-4 py-12 pb-0">
      {/* Imagem */}
      <div className="md:w-1/2 w-full flex justify-center">
        <div className="relative w-full h-64 md:h-96">
          <Image
            src="/pages/about/sobre.png"
            alt="Gatinhos atrás de uma tela, em frente a uma porta"
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
        <p className="text-gray-600 leading-relaxed mb-5">
          Há mais de <strong>8 anos</strong>, o <strong>Gatil dos Resgatados</strong> dedica-se ao
          resgate, cuidado e proteção de gatos em situação de risco. O que começou como um gesto de
          amor se tornou uma missão de vida que já transformou a história de inúmeros felinos em
          Santa Catarina.
        </p>

        <p className="text-gray-600 leading-relaxed mb-5">
          Nossa equipe de <strong>voluntários apaixonados por gatos</strong> oferece atendimento
          veterinário, abrigo, alimentação e muito carinho — preparando os gatinhos para uma nova
          vida em lares amorosos.
        </p>

        <p className="text-gray-600 leading-relaxed mb-5">
          Também promovemos programas de{' '}
          <Link
            href="/apadrinhamento"
            className="font-bold underline"
            aria-label="Página de Apadrinhamento"
          >
            apadrinhamento
          </Link>{' '}
          e{' '}
          <Link
            href="/adote"
            className="font-bold underline"
            aria-label="Página de Adoção Responsável"
          >
            adoção responsável
          </Link>
          . Através do apadrinhamento, você acompanha a recuperação de um gatinho até ele encontrar
          seu lar. Com a adoção responsável, garantimos que cada gato vá para um lar preparado para
          recebê-lo com amor.
        </p>

        <p className="text-gray-600 leading-relaxed mb-5">
          Localizado em <strong>Sombrio, Santa Catarina</strong>, o projeto continua crescendo com o
          apoio de pessoas como você — salvando vidas e oferecendo esperança.
        </p>

        <p className="text-gray-600 leading-relaxed mb-5">
          Junte-se a nós e ajude a escrever novas histórias de superação e amor! 🐾
        </p>

        <p className="text-gray-600 leading-relaxed">
          Para saber mais ou se voluntariar, visite nossa página de{' '}
          <Link href="/contato" className="font-bold underline" aria-label="Página de Contato">
            contato
          </Link>
          .
        </p>
      </div>
    </div>
  </section>
);

export default async function AboutPage() {
  const payload = await getPayload({ config });

  const { docs: users } = await payload.find({
    collection: 'users',
    where: {
      and: [{ show: { equals: true } }, { showPhone: { equals: true } }]
    }
  });

  return (
    <>
      <FirstSection />

      {users.length > 0 && (
        <section aria-labelledby="voluntarios" className="mt-12 mb-5 w-full max-w-6xl text-center">
          <h2 id="voluntarios" className="text-2xl font-semibold mb-2 text-[#013274]">
            Nossos voluntários
          </h2>
          <div className="flex justify-self-center gap-4 px-4 py-12">
            {users.map((user) => (
              <VolunteerCard
                key={user.id}
                name={user.name}
                photo={(user.photo as Media).url || ''}
                phone={user.telefone || ''}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
