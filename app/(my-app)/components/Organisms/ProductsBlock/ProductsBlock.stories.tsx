import type { Meta, StoryObj } from '@storybook/react';

import type { BlockProps } from '@/app/(my-app)/types/block-props';

import { ProductsBlock } from './ProductsBlock';

const meta: Meta<typeof ProductsBlock> = {
  title: 'Organisms/ProductsBlock',
  component: ProductsBlock,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ProductsBlock>;

export const Default: Story = {
  args: {
    blockType: 'products',
    title: 'Ajude o Gatil comprando ❤️',
    products: [
      {
        name: 'Caneca Personalizada',
        description: 'Ilustração exclusiva. Ajude um resgatado!',
        price: 49.9,
        image: {
          url: '/gato.jpg',
          alt: 'Caneca do gatil'
        },
        buyLink: 'https://www.mercadopago.com.br/caneca'
      },
      {
        name: 'Chaveiro Resgatado',
        description: 'Fofo demais para não ter um.',
        price: 24.9,
        image: {
          url: '/gato.jpg',
          alt: 'Chaveiro solidário'
        },
        buyLink: 'https://www.mercadopago.com.br/chaveiro'
      }
    ]
  } as BlockProps<'products'>
};
