import { Fragment } from 'react';

import { FAQAccordion } from '../components/Atoms/FaqAccordion';
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
  products: ProductsBlock,
  faq: FAQAccordion
};

type Block = {
  blockType: keyof typeof blockComponents;
  [key: string]: unknown;
};

export const RenderBlocks = <T extends { layout: Block[] }>({
  blocks
}: {
  blocks: T['layout'];
}) => {
  const hasBlocks = Array.isArray(blocks) && blocks.length > 0;

  if (!hasBlocks) return null;

  return (
    <Fragment>
      {blocks.map((block, index) => {
        const { blockType } = block;

        if (blockType && blockType in blockComponents) {
          const BlockComponent = blockComponents[blockType as keyof typeof blockComponents];

          if (BlockComponent) {
            // @ts-expect-error there may be some mismatch between the expected types here */
            return <BlockComponent key={index} {...block} disableInnerContainer={true} />;
          }
        }

        return null;
      })}
    </Fragment>
  );
};
