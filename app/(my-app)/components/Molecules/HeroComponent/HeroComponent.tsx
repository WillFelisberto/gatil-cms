import Link from 'next/link';

import { BlockProps } from '@/app/(my-app)/types/block-props';
import { Media } from '@/payload-types';

export const HeroComponent = (props: BlockProps<'hero'>) => {
  const { title, subtitle, backgroundImage, ctaText, ctaLink } = props;

  const bgImage = (backgroundImage as Media)?.url;

  return (
    <section
      data-testid="hero-block"
      className="flex items-center justify-center text-white w-full min-h-screen h-screen overflow-hidden"
    >
      {/* Background Image */}
      {bgImage && (
        <div className="absolute inset-0 -z-10">
          <img
            src={bgImage}
            alt="Imagem de fundo"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      )}

      {/* Content */}
      <div className="text-center px-4 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4" data-testid="hero-title">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/90 mb-6" data-testid="hero-subtitle">
            {subtitle}
          </p>
        )}
        {ctaText && ctaLink && (
          <Link
            href={ctaLink}
            data-testid="hero-cta"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold text-base px-6 py-3 rounded-xl transition-all"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
};
