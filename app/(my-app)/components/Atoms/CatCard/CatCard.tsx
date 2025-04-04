'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaMars, FaVenus } from 'react-icons/fa';

import { Cat } from '@/payload-types';

type Props = {
  cat: Cat;
  whatsappNumber: string;
  mode?: 'adotar' | 'apadrinhar';
  onClick?: () => void;
};

export const CatCard = ({ cat, whatsappNumber, mode = 'adotar', onClick }: Props) => {
  const {
    nome,
    idade,
    descricao,
    foto,
    vacinas,
    vermifugacoes,
    castrado,
    doencas,
    observacoesSaude,
    sexo
  } = cat;

  const imageUrl = typeof foto === 'string' ? foto : foto?.url;
  const altText = typeof foto === 'object' && foto?.alt ? foto.alt : `Foto de ${nome}`;

  const renderCastrado = sexo === 'F' ? '✂️ Castrada' : '✂️ Castrado';
  const renderVacina = sexo === 'F' ? '💉 Vacinada' : '💉 Vacinado';
  const renderVermifugo = sexo === 'F' ? '🪱 Vermifugada' : '🪱 Vermifugado';

  const whatsappMessage = encodeURIComponent(
    `Olá! Tenho interesse em adotar ${sexo === 'F' ? 'a' : 'o'} ${nome}. Poderia me passar mais informações?`
  );
  const whatsappLink = `https://wa.me/55${whatsappNumber.replace(/\D/g, '')}?text=${whatsappMessage}`;

  const content = (
    <>
      <span
        className="absolute top-2 left-2 bg-green-100 text-green-900 text-xs font-semibold px-2 py-1 rounded-full shadow-sm z-10 group-hover:scale-105 transition"
        data-testid="contact-badge"
      >
        {mode === 'adotar' ? 'Clique aqui para saber mais 🐾' : 'Clique aqui para apadrinhar 🐾'}
      </span>

      <div className="relative h-60 w-full shrink-0">
        <Image
          src={imageUrl || '/no-image.jpg'}
          alt={altText}
          fill
          sizes="(max-width: 768px) 100vw, 384px"
          className="object-cover"
          priority
          data-testid="cat-image"
        />
      </div>

      <div className="p-4 h-full flex flex-col gap-2">
        <h2
          className={`text-xl font-bold flex items-center gap-2 ${sexo === 'M' ? 'text-blue-700' : 'text-pink-600'}`}
          data-testid="cat-name"
        >
          {sexo === 'M' ? (
            <FaMars className="text-blue-700" title="Macho" aria-label="Macho" />
          ) : (
            <FaVenus className="text-pink-600" title="Fêmea" aria-label="Fêmea" />
          )}
          {nome}
        </h2>
        {descricao && (
          <p
            className="text-sm font-medium font-poppins text-gray-600"
            data-testid="cat-description"
          >
            {descricao}
          </p>
        )}

        <div className="mt-2 space-y-1 text-sm font-medium text-gray-600" data-testid="cat-details">
          {idade && <p className="text-sm text-gray-700">🎂 {idade}</p>}
          {vacinas && vacinas.length > 0 && <p>{renderVacina}</p>}
          {castrado && <p>{renderCastrado}</p>}
          {vermifugacoes && vermifugacoes.length > 0 && <p>{renderVermifugo}</p>}
          {doencas && <p>⚠️ Doenças: {doencas}</p>}
          {observacoesSaude && <p>📝 {observacoesSaude}</p>}
        </div>
      </div>
    </>
  );

  return (
    <article role="article" className="h-full w-full max-w-96" data-testid={`cat-card-${cat.id}`}>
      {mode === 'adotar' ? (
        <Link
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Saber mais sobre ${nome}`}
          className="bg-stone-50 h-full flex flex-col justify-between rounded-2xl shadow-md overflow-hidden w-full border border-gray-200 hover:shadow-lg transition-all duration-200 group relative"
        >
          {content}
        </Link>
      ) : (
        <div
          onClick={onClick}
          role="button"
          aria-label={`Apadrinhar ${nome}`}
          className="bg-stone-50 cursor-pointer h-full flex flex-col justify-between rounded-2xl shadow-md overflow-hidden w-full border border-gray-200 hover:shadow-lg transition-all duration-200 group relative"
        >
          {content}
        </div>
      )}
    </article>
  );
};
