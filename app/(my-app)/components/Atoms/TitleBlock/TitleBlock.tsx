import { JSX } from 'react';
import { FaCat } from 'react-icons/fa';

import { BlockProps } from '@/app/(my-app)/types/block-props';

export const TitleBlock = (props: BlockProps<'title'>) => {
  const { text, tag = 'h2', alignment = 'left', showIcon, id } = props;

  const Tag = tag as keyof JSX.IntrinsicElements;

  const alignmentClass = {
    left: 'text-left justify-start',
    center: 'text-center justify-center',
    right: 'text-right justify-end'
  }[alignment];

  return (
    <Tag
      id={id || undefined}
      data-testid="title-block"
      className={`text-3xl md:text-4xl font-bold text-[#013274] mb-12 mt-6 flex items-center gap-2 ${alignmentClass}`}
    >
      {text}
      {showIcon && <FaCat data-testid="title-icon" />}
    </Tag>
  );
};
