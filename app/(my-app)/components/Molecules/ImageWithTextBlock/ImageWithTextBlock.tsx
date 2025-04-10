import Image from 'next/image';
import { FaCat } from 'react-icons/fa';

import { BlockProps } from '@/app/(my-app)/types/block-props';
import { Media } from '@/payload-types';

import { SectionCat } from '../SectionCat';

export const ImageWithTextBlock = (props: BlockProps<'imageWithText'>) => {
  const { imagePosition, image, title, text, ctaLink, ctaText, backgroundColor } = props;

  const isImageLeft = imagePosition === 'left';
  const dark = backgroundColor === 'dark';
  const imageToUse = image as Media;

  const titleId = `image-with-text-title-${title?.replace(/\s+/g, '-').toLowerCase() || 'section'}`;

  return (
    <SectionCat dark={dark}>
      <section
        data-testid="image-with-text-block"
        aria-labelledby={titleId}
        className={`h-full flex flex-col-reverse md:flex-row ${
          isImageLeft ? 'md:flex-row-reverse' : ''
        } items-center justify-center gap-8 px-4 py-12`}
      >
        <div className="md:w-1/2 text-center md:text-left">
          {title && (
            <h2
              data-testid="image-with-text-title"
              id={titleId}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              {title}
            </h2>
          )}

          {text && <p className="text-lg md:text-xl leading-relaxed mb-8">{text}</p>}

          {ctaText && ctaLink && (
            <div
              className={`flex justify-center ${
                isImageLeft ? 'md:justify-end' : 'md:justify-start'
              }`}
            >
              <a
                href={ctaLink}
                aria-label={ctaText}
                role="button"
                data-testid="image-with-text-cta-link"
                className={`flex w-fit items-center gap-2 cursor-pointer px-6 py-2 rounded-full font-bold transition-colors duration-200 text-sm md:text-base ${
                  dark
                    ? 'bg-[#A1DFFF] text-[#013274] hover:bg-[#7cd0f3]'
                    : 'bg-[#013274] text-white hover:bg-[#001f4c]'
                }`}
              >
                {ctaText}
                <span className="w-5 h-5">
                  <FaCat className={dark ? 'text-[#013274]' : 'text-white'} />
                </span>
              </a>
            </div>
          )}
        </div>

        <div className="md:w-1/2 w-full flex justify-center">
          <div className="relative w-full h-64 md:h-96">
            {imageToUse?.url && (
              <Image
                data-testid="image-with-text-image"
                src={imageToUse.url}
                blurDataURL={imageToUse.url}
                placeholder="blur"
                alt={imageToUse.alt || 'Imagem de gato para adoção'}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-xl shadow-lg object-cover hover:scale-105 transition-all duration-300"
              />
            )}
          </div>
        </div>
      </section>
    </SectionCat>
  );
};
