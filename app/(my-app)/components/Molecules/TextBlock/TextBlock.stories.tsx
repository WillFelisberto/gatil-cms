import type { Meta, StoryObj } from '@storybook/react';

import type { BlockProps } from '@/app/(my-app)/types/block-props';

import { TextBlock } from './TextBlock';

const defaultProps: BlockProps<'textBlock'> = {
  content: {
    root: {
      type: 'root',
      format: '',
      indent: 0,
      version: 1,
      direction: 'ltr',
      children: [
        {
          type: 'paragraph',
          version: 1,
          indent: 0,
          format: '',
          direction: 'ltr',
          children: [
            {
              type: 'text',
              version: 1,
              text: 'Homepage',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: ''
            }
          ]
        }
      ]
    }
  },
  blockType: 'textBlock'
};

const meta: Meta<typeof TextBlock> = {
  title: 'Molecules/TextBlock',
  component: TextBlock,
  tags: ['autodocs'],
  args: defaultProps
};

export default meta;

type Story = StoryObj<typeof TextBlock>;

export const Default: Story = {};
