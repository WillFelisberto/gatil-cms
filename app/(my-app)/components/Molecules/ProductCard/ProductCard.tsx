import Image from 'next/image';
import Link from 'next/link';

import type { Media } from '@/payload-types';

type ProductCardProps = {
  name: string;
  description?: string;
  price: number;
  image: Media;
  buyLink: string;
};

export const ProductCard = ({ name, description, price, image, buyLink }: ProductCardProps) => {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price);

  return (
    <div
      className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
      data-testid="product-card"
    >
      <div className="relative w-full h-64">
        <Image
          src={image?.url || ''}
          alt={image?.alt || name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-[#013274] mb-1" data-testid="product-name">
            {name}
          </h3>
          {description && (
            <p className="text-sm text-gray-700" data-testid="product-description">
              {description}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-lg font-bold text-pink-600" data-testid="product-price">
            {formattedPrice}
          </span>
          <Link
            href={buyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-center bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded-xl transition-all"
            data-testid="product-cta"
          >
            Comprar
          </Link>
        </div>
      </div>
    </div>
  );
};
