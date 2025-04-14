import React, { Fragment } from 'react';

import type { Homepage } from '@/payload-types';

import { ImageWithTextBlock } from '../components/Molecules/ImageWithTextBlock';

const blockComponents = {
  imageWithText: ImageWithTextBlock
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
