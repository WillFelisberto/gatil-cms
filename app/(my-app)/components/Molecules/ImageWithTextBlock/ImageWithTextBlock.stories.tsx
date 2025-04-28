import type { Meta, StoryObj } from '@storybook/react';

import { BlockProps } from '@/app/(my-app)/types/block-props';
import type { Media } from '@/payload-types';

import { ImageWithTextBlock } from './ImageWithTextBlock';

const meta: Meta<typeof ImageWithTextBlock> = {
  title: 'Molecules/ImageWithTextBlock',
  component: ImageWithTextBlock,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ImageWithTextBlock>;

// Mock de imagem
const mockImage: Media = {
  id: 123,
  url: 'https://placekitten.com/800/600',
  alt: 'Gatinho fofo',
  filename: 'gatinho.jpg',
  mimeType: 'image/jpeg',
  filesize: 123456,
  width: 800,
  height: 600,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
  // adicione outros campos obrigatórios, se houver no seu schema Media
};

// Bloco de exemplo
export const Default: Story = {
  args: {
    imagePosition: 'left',
    image: mockImage,
    title: 'Conheça Nosso Trabalho',
    text: 'Ajudamos gatinhos resgatados a encontrarem um novo lar com muito amor e carinho.',
    ctaLink: '/adote',
    ctaText: 'Adotar agora',
    backgroundColor: 'light',
    blockType: 'imageWithText'
  } satisfies BlockProps<'imageWithText'>
};
