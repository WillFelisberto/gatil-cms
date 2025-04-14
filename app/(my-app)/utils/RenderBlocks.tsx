import React, { Fragment } from 'react';

import type { Homepage } from '@/payload-types';

import { GalleryComponent } from '../components/Atoms/GalleryComponent';
import { TitleBlock } from '../components/Atoms/TitleBlock';
import { HeroComponent } from '../components/Molecules/HeroComponent';
import { ImageWithTextBlock } from '../components/Molecules/ImageWithTextBlock';
import { TextBlock } from '../components/Molecules/TextBlock';
import { ProductsBlock } from '../components/Organisms/ProductsBlock';

const blockComponents = {
  imageWithText: ImageWithTextBlock,
  gallery: GalleryComponent,
  title: TitleBlock,
  textBlock: TextBlock,
  hero: HeroComponent,
  products: ProductsBlock
};

export const RenderBlocks: React.FC<{
  blocks: Homepage['layout'][0][];
}> = ({ blocks }) => {
  const hasBlocks = Array.isArray(blocks) && blocks.length > 0;

  if (!hasBlocks) return null;

  return (
    <Fragment>
      {blocks.map((block, index) => {
        const { blockType } = block;

        if (blockType && blockType in blockComponents) {
          if (blockType in blockComponents) {
            const Block = blockComponents[blockType as keyof typeof blockComponents];

            if (Block) {
              // @ts-expect-error there may be some mismatch between the expected types here */
              return <Block key={index} {...block} disableInnerContainer={true} />;
            }
          }
        }

        return null;
      })}
    </Fragment>
  );
};
