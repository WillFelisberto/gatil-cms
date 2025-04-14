import type { Meta, StoryObj } from '@storybook/react';

import { ProductCard } from './ProductCard';

const meta: Meta<typeof ProductCard> = {
  title: 'Molecules/ProductCard',
  component: ProductCard,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
  args: {
    name: 'Caneca do Gatil',
    description: 'Ajude um resgatado com estilo! ☕',
    price: 39.9,
    image: {
      createdAt: '2023-01-01',
      updatedAt: '2023-01-01',
      id: '1',
      url: '/gato.jpg',
      alt: 'Caneca solidária'
    },
    buyLink: 'https://www.mercadopago.com.br/caneca'
  }
};
