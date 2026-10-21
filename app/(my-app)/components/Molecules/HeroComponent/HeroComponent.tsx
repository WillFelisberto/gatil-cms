import Image from 'next/image';
import Link from 'next/link';

import type { BlockProps } from '@/app/(my-app)/types/block-props';
import type { Media } from '@/payload-types';
export const HeroComponent = ({
  title,
  subtitle,
  backgroundImage,
  ctaText,
  ctaLink
}: BlockProps<'hero'>) => {
  const image =
    typeof backgroundImage === 'object' && backgroundImage ? (backgroundImage as Media).url : null;
  return (
    <section data-testid="hero-block" className="gd-payload-hero">
      {image && (
        <Image
          src={image}
          alt={(backgroundImage as Media).alt || 'Imagem do Gatil dos Resgatados'}
          fill
          sizes="100vw"
          className="gd-cover"
        />
      )}
      <div className="gd-payload-hero-shade" />
      <div className="gd-payload-hero-body">
        <h2 data-testid="hero-title">{title}</h2>
        {subtitle && <p data-testid="hero-subtitle">{subtitle}</p>}
        {ctaText && ctaLink && (
          <Link href={ctaLink} data-testid="hero-cta" className="gd-button gd-button-light">
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
};
