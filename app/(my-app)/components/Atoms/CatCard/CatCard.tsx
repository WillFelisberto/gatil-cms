/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import clsx from 'clsx';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Image from 'next/image';
import Link from 'next/link';
import { FaMars, FaVenus } from 'react-icons/fa';
import { LuPawPrint } from 'react-icons/lu';

import { Cat, Media } from '@/payload-types';

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
    sexo,
    birthDate
  } = cat;

  const imageUrl = (foto && (foto as Media).url) || undefined;
  const altText =
    typeof foto === 'object' && (foto as Media)?.alt ? (foto as Media).alt : `Foto de ${nome}`;

  const renderCastrado = sexo === 'F' ? '✂️ Castrada' : '✂️ Castrado';
  const renderVacina = sexo === 'F' ? '💉 Vacinada' : '💉 Vacinado';
  const renderVermifugo = sexo === 'F' ? '🪱 Vermifugada' : '🪱 Vermifugado';

  const whatsappMessage = encodeURIComponent(
    mode === 'adotar'
      ? `Olá! Tenho interesse em adotar ${sexo === 'F' ? 'a' : 'o'} ${nome}. Poderia me passar mais informações?`
      : `Olá! Tenho interesse em apadrinhar ${sexo === 'F' ? 'a' : 'o'} ${nome}. Poderia me passar mais informações?`
  );
  const whatsappLink = `https://wa.me/55${whatsappNumber.replace(/\D/g, '')}?text=${whatsappMessage}`;

  const content = (
    <>
      {/* sticker de ação */}
      <span
        className={clsx(
          'absolute top-3 left-3 z-10 flex items-center gap-1 rounded-full   text-[#013274] text-xs font-semibold px-3 py-1 shadow-sm transition-transform duration-200 group-hover:scale-[1.04]',
          sexo === 'M' ? 'text-[#013274] bg-[#EFF4FF] ' : 'text-pink-600 bg-[#FFF3F8]'
        )}
        data-testid="contact-badge"
      >
        <LuPawPrint size={14} aria-hidden="true" />
        {mode === 'adotar' ? 'Saber mais' : 'Apadrinhar'}
      </span>

      {/* imagem */}
      {/* imagem (fade/inner-shadow branco que acompanha o hover) */}
      <div className="relative h-60 w-full shrink-0 overflow-hidden">
        {/* Wrapper que escala junto com o hover da card .group */}
        <div className="absolute inset-0 transition-transform duration-300  will-change-transform">
          <Image
            src={imageUrl || '/no-image.jpg'}
            alt={altText || 'Imagem indisponível'}
            fill
            sizes="(max-width: 768px) 100vw, 384px"
            className="object-cover bg-gray-100"
            priority
            data-testid="cat-image"
          />
        </div>
      </div>

      {/* corpo */}
      <div className="p-4 flex flex-col gap-2 flex-1 relative overflow-hidden">
        <h2
          className={`text-xl font-bold flex items-center gap-2 ${
            sexo === 'M' ? 'text-[#013274]' : 'text-pink-600'
          }`}
          data-testid="cat-name"
        >
          {sexo === 'M' ? (
            <FaMars className="text-[#013274]" title="Macho" aria-label="Macho" />
          ) : (
            <FaVenus className="text-pink-600" title="Fêmea" aria-label="Fêmea" />
          )}
          {nome}
        </h2>

        {descricao && (
          <p className="text-sm font-medium text-gray-600" data-testid="cat-description">
            {descricao}
          </p>
        )}

        <div
          className="mt-1 space-y-1 text-sm font-medium text-gray-700 flex-1 relative z-10"
          data-testid="cat-details"
        >
          {!birthDate && idade && <p>🎂 {idade}</p>}
          {birthDate && (
            <p>
              🎂 Nascido em{' '}
              {format(new Date(birthDate), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })} (
              {formatDistanceToNow(new Date(birthDate), { locale: ptBR, addSuffix: true })})
            </p>
          )}
          {vacinas && vacinas.length > 0 && <p>{renderVacina}</p>}
          {castrado && <p>{renderCastrado}</p>}
          {vermifugacoes && vermifugacoes.length > 0 && <p>{renderVermifugo}</p>}
          {doencas && <p>⚠️ Doenças: {doencas}</p>}
          {observacoesSaude && <p>📝 {observacoesSaude}</p>}
        </div>

        {/* Decoração de patinhas flutuantes */}
        <div className="absolute bottom-3 right-3 z-20">
          <LuPawPrint
            size={40}
            className={clsx(
              'drop-shadow-lg animate-bounce',
              sexo === 'M' ? 'text-[#4960a9]/15' : 'text-pink-600/15'
            )}
            style={{
              animationDelay: '-0.5s',
              animationDuration: '1.4s',
              animationFillMode: 'both'
            }}
          />
        </div>

        <div className="absolute bottom-10 right-11 z-20">
          <LuPawPrint
            size={36}
            className={clsx(
              'drop-shadow-lg animate-bounce',
              sexo === 'M' ? 'text-[#4960a9]/10' : 'text-pink-600/10'
            )}
            style={{ animationDelay: '-1s', animationDuration: '1.8s', animationFillMode: 'both' }}
          />
        </div>
      </div>
    </>
  );

  return (
    <article role="article" className="h-full w-full max-w-96" data-testid={`cat-card-${cat.id}`}>
      {/* {mode === 'adotar' ? ( */}
      <Link
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={mode === 'adotar' ? `Saber mais sobre ${nome}` : `Apadrinhar ${nome}`}
        className={clsx(
          'bg-white h-full flex hover:scale-102 flex-col rounded-3xl  overflow-hidden w-full border   transition-all duration-200 group relative border-r-4 border-b-4',
          sexo === 'M' ? 'border-[#8b9ddb]' : 'border-pink-600/15'
        )}
      >
        {content}
      </Link>
      {/* ) : (
        <div
          onClick={onClick}
          role="button"
          aria-label={`Apadrinhar ${nome}`}
          className={clsx(
            'bg-white h-full flex hover:scale-102 flex-col rounded-3xl  overflow-hidden w-full border   transition-all duration-200 group relative border-r-4 border-b-4',
            sexo === 'M' ? 'border-[#8b9ddb]' : 'border-pink-600/15'
          )}
        >
          {content}
        </div>
      )}*/}
    </article>
  );
};
