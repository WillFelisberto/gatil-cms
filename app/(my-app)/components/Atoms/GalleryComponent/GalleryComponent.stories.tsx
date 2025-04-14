import type { Meta, StoryObj } from '@storybook/react';

import type { BlockProps } from '@/app/(my-app)/types/block-props';

import { GalleryComponent } from './GalleryComponent';

const meta: Meta<typeof GalleryComponent> = {
  title: 'Molecules/GalleryComponent',
  component: GalleryComponent,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof GalleryComponent>;

export const Default: Story = {
  args: {
    blockType: 'gallery',
    images: [
      {
        image: { url: '/gato.jpg', alt: 'Gato preto' },
        caption: 'Gato preto'
      },
      {
        image: { url: '/gato.jpg', alt: 'Gato branco' },
        caption: 'Gato branco'
      },
      {
        image: { url: '/gato.jpg', alt: 'Gato cinza' },
        caption: 'Gato cinza'
      }
    ]
  } as BlockProps<'gallery'>
};
