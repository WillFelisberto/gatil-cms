'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaMars, FaVenus } from 'react-icons/fa';

type Media = {
  url: string;
  alt?: string;
};

export type Cat = {
  id: string;
  nome: string;
  idade?: string | null;
  descricao?: string | null;
  foto?: string | Media | null;
  vacinas?:
    | { nome: string; data?: string | null; observacoes?: string | null; id?: string | null }[]
    | null;
  vermifugacoes?:
    | {
        nome?: string | null;
        data?: string | null;
        observacoes?: string | null;
        id?: string | null;
      }[]
    | null;
  castrado?: boolean | null;
  doencas?: string | null;
  observacoesSaude?: string | null;
  sexo: 'M' | 'F';
};

type Props = {
  cat: Cat;
};

export const CatCard = ({ cat }: Props) => {
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
  const whatsappLink = `https://wa.me/5599999999999?text=${whatsappMessage}`; //  TODO:   <- Substituir com o número da ONG

  return (
    <article role="article" className="flex flex-col h-full" data-testid={`cat-card-${cat.id}`}>
      <Link
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Saber mais sobre ${nome}`}
        className="bg-stone-50 rounded-2xl shadow-md overflow-hidden flex flex-col w-full max-w-sm border border-gray-200 hover:shadow-lg transition-all duration-200 group relative"
      >
        <span
          className="absolute top-2 left-2 bg-green-100 text-green-900 text-xs font-semibold px-2 py-1 rounded-full shadow-sm z-10 group-hover:scale-105 transition"
          data-testid="contact-badge"
        >
          Clique aqui para saber mais 🐾
        </span>

        <div className="relative h-60 w-full">
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

        <div className="p-4 flex flex-col gap-2">
          <h2
            className="text-xl font-bold text-blue-950 flex items-center gap-2"
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

          <div
            className="mt-2 space-y-1 text-sm font-medium text-gray-600"
            data-testid="cat-details"
          >
            {idade && <p className="text-sm text-gray-700">🎂 {idade}</p>}
            {vacinas && vacinas.length > 0 && <p>{renderVacina}</p>}
            {castrado && <p>{renderCastrado}</p>}
            {vermifugacoes && vermifugacoes.length > 0 && <p>{renderVermifugo}</p>}
            {doencas && <p>⚠️ Doenças: {doencas}</p>}
            {observacoesSaude && <p>🩺 {observacoesSaude}</p>}
          </div>
        </div>
      </Link>
    </article>
  );
};
