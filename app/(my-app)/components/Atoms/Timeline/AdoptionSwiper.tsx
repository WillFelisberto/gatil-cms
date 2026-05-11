/* eslint-disable import/no-duplicates */
// app/components/GatilAdoptionSwiper.tsx
'use client';

import 'swiper/css';
import 'swiper/css/pagination';

import clsx from 'clsx';
import { useMemo, useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { A11y, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { BlockProps } from '@/app/(my-app)/types/block-props';

import { RichTextComponent } from '../RichText';

// export const AdoptionSwiper = ({
//   steps = [
//     {
//       title: 'Escolha seu gatinho',
//       desc: 'Encontre aquele que conquistou seu coração e clique para adotá-lo.'
//     },
//     {
//       title: 'Nosso retorno',
//       desc: 'Em até 48h úteis respondemos com todo carinho, pensando no bem-estar dos gatinhos.'
//     },
//     {
//       title: 'Visita carinhosa',
//       desc: 'Vamos até sua casa para garantir que o cantinho esteja seguro e aconchegante.'
//     },
//     {
//       title: 'Compromisso de amor',
//       desc: 'Assinamos juntos o termo de adoção responsável, celebrando essa nova amizade.'
//     },
//     {
//       title: 'Bem-vindo, novo amigo',
//       desc: 'Entregamos seu gatinho com todo cuidado e acompanhamos os primeiros passos no novo lar.'
//     }
//   ],
//   policyHref = '/politica-de-adocao',
//   accentColor = '#013274',
//   className
// }: Props) => {
export const AdoptionSwiper = (props: BlockProps<'sliderBlock'>) => {
  const swiperRef = useRef<SwiperType>(null);
  const accentColor = '#013274';
  const colors = useMemo(() => {
    return {
      base: accentColor,
      pastel10: `${accentColor}1A`,
      pastel15: `${accentColor}26`,
      pastel20: `${accentColor}33`
    };
  }, [accentColor]);

  return (
    <section className={clsx('mx-auto   overflow-hidden', 'divide-y divide-gray-200')}>
      {/* container responsivo */}
      <div className="relative mx-auto w-full  py-6  ">
        {/* título responsivo (tamanhos apenas) */}
        <div className="mb-4 flex items-center justify-center gap-4">
          <div className="flex items-center gap-3">
            <h1 className="text-center font-bold leading-tight text-[#013274] text-2xl sm:text-3xl">
              {props.title}
            </h1>
          </div>
        </div>

        {/* parágrafo responsivo (largura e tamanho de fonte) */}
        <div className="mb-5 max-w-3xl mx-auto flex items-center justify-center gap-4 text-center text-[#013274]">
          <RichTextComponent lexicalData={props.content} />
        </div>

        <Swiper
          onBeforeInit={(s) => (swiperRef.current = s)}
          modules={[Pagination, A11y]}
          a11y={{ enabled: true }}
          spaceBetween={12}
          // slidesPerView="auto"
          // apenas ajustes de responsividade, mantendo lógica original
          breakpoints={{
            375: { slidesPerView: 1 },
            767: { slidesPerView: 2 },
            640: { slidesPerView: 2 },
            990: { slidesPerView: 3 },
            1280: { slidesPerView: 5 }
          }}
          pagination={{ clickable: true }}
          className="!w-full !pb-8" // garante o swiper 100% do pai
        >
          {props.slides?.map((step, idx) => (
            <SwiperSlide key={idx} className="flex !h-auto items-stretch">
              <article
                className={clsx(
                  'group relative w-full h-full',
                  // alturas mínimas por breakpoint (só responsividade)
                  'min-h-[220px] sm:min-h-[230px] md:min-h-[240px] lg:min-h-[250px]',
                  'rounded-2xl bg-white border p-4 sm:p-5 transition-transform border-[#8b9ddb]',
                  'flex flex-col justify-start',
                  'break-words hyphens-auto',
                  idx % 2 === 0 ? 'border-r-4 border-b-4' : 'border-l-4 border-t-4'
                )}
              >
                <div className="mb-3 flex items-center gap-2">
                  <div
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold"
                    style={{ backgroundColor: colors.pastel10, color: colors.base }}
                    aria-label={`Etapa ${idx + 1}`}
                  >
                    {idx + 1}
                  </div>
                </div>

                <h3
                  className="mb-2 text-base sm:text-lg font-semibold"
                  style={{
                    color: accentColor,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                >
                  {step.title}
                </h3>

                <p
                  className="text-sm sm:text-base text-slate-600"
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                >
                  {step.description}
                </p>

                <div className="mt-auto" />
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        {props.ctaLink && props.ctaText && (
          <div className="mt-2 flex justify-right">
            <a
              href={props.ctaLink}
              className={clsx(
                'shrink-0 rounded-full border-1  bg-[#013274] px-3 py-2 text-sm font-medium transition text-white ',
                `hover:bg-white transition hover:!text-[#013274] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[${colors.pastel10}] focus:ring-offset-2`
              )}
              // style={{ backgroundColor: colors.pastel10, color: colors.base }}
            >
              {props.ctaText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default AdoptionSwiper;
