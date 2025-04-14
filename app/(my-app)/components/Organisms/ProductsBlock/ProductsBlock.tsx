'use client';

import type { BlockProps } from '@/app/(my-app)/types/block-props';
import { Media } from '@/payload-types';

import { ProductCard } from '../../Molecules/ProductCard';

export const ProductsBlock = (props: BlockProps<'products'>) => {
  const { title, products } = props;

  return (
    <section data-testid="products-block" className="w-full px-4 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center text-[#013274] mb-12"
          data-testid="products-title"
        >
          {title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products &&
            products?.map((product, i) => (
              <ProductCard
                key={product.buyLink || i}
                name={product.name}
                description={product.description || ''}
                price={product.price}
                image={product.image as Media}
                buyLink={product.buyLink}
              />
            ))}
        </div>
      </div>
    </section>
  );
};
