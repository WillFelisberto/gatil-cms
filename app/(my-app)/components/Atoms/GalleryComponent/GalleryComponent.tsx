'use client';

import Image from 'next/image';

import type { BlockProps } from '@/app/(my-app)/types/block-props';
import type { Media } from '@/payload-types';

export const GalleryComponent = (props: BlockProps<'gallery'>) => {
  const { images } = props;

  return (
    <section data-testid="gallery-block" className="w-full px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {images?.map(({ image, caption }, i) => {
          const img = image as Media;

          if (!img?.url) return null;

          return (
            <figure key={img.url || i} className="rounded overflow-hidden shadow-sm">
              <div className="relative w-full h-64">
                <Image
                  src={img.url}
                  alt={img.alt || caption || `Imagem ${i + 1}`}
                  fill
                  className="object-cover rounded"
                  data-testid="gallery-image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={i < 3} // prioridade para primeiras imagens
                />
              </div>
              {caption && (
                <figcaption
                  className="text-sm text-center text-gray-700 mt-2"
                  data-testid="gallery-caption"
                >
                  {caption}
                </figcaption>
              )}
            </figure>
          );
        })}
      </div>
    </section>
  );
};
