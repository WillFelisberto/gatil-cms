'use client';

import { useIsMobile } from 'app/(my-app)/hooks/useIsMobile';
import type { ReactNode } from 'react';

const footerClaro = '/gatoazulrodape.webp';
const footerEscuro = '/gatobrancorodape.webp';

interface SectionCatProps {
  dark?: boolean;
  children?: ReactNode;
  label?: string;
}

export const SectionCat = ({ dark = false, children, label }: SectionCatProps) => {
  const isMobile = useIsMobile();
  const backgroundImage = dark ? footerEscuro : footerClaro;

  return (
    <section
      id="adoptable-cats-section"
      role="region"
      aria-label={label || 'Seção com informações sobre gatos disponíveis para adoção'}
      data-testid="section-cat-background"
      className={`
        relative w-full
        flex items-center
        overflow-hidden
        bg-bottom bg-no-repeat bg-contain
        ${dark ? 'bg-[#013274] text-white' : 'bg-white text-[#013274]'}
      `}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom center',
        backgroundSize: 'inherit',
        height: isMobile ? '100vh' : '80vh'
      }}
    >
      <div className="w-full max-w-6xl mx-auto px-6 py-12">{children}</div>
    </section>
  );
};
