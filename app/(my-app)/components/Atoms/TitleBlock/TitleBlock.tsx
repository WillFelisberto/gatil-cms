import clsx from 'clsx';
import { JSX } from 'react';
import { FaCat } from 'react-icons/fa';

import { BlockProps } from '@/app/(my-app)/types/block-props';

export const TitleBlock = (props: BlockProps<'title'>) => {
  const { text, tag = 'h2', alignment = 'left', showIcon, id, subtitle } = props;

  const Tag = tag as keyof JSX.IntrinsicElements;

  const alignmentClass = {
    left: 'text-left justify-start',
    center: 'text-center justify-center',
    right: 'text-right justify-end'
  }[alignment];

  return (
    <div data-testid="title-block" id={id || undefined} className=" mb-16 animate-fade-in">
      <Tag
        data-testid="title-text"
        className={clsx('text-5xl md:text-6xl font-bold text-[#013274] mb-6', alignmentClass)}
      >
        {text}
        {showIcon && <FaCat data-testid="title-icon" />}
      </Tag>
      {subtitle && (
        <p
          data-testid="title-subtitle"
          className="text-xl text-[#013274]/70 leading-relaxed text-center"
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
