import { BlockProps } from '@/app/(my-app)/types/block-props';

import { RichTextComponent } from '../../Atoms/RichText';

export const TextBlock = (props: BlockProps<'textBlock'>) => {
  const { content } = props;
  return (
    <div className="text-gray-600 max-w-4xl mx-auto mb-4 leading-relaxed">
      <RichTextComponent lexicalData={content} />
    </div>
  );
};
