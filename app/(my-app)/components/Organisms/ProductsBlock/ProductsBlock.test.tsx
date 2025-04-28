import type { BlockProps } from '@/app/(my-app)/types/block-props';
import { render, screen } from '@/tests/test-utils';

import { ProductsBlock } from './ProductsBlock';

const mockProductsBlock: BlockProps<'products'> = {
  blockType: 'products',
  title: 'Produtos Solidários',
  products: [
    {
      name: 'Caneca do Gatil',
      description: 'Ajude um resgatado com essa caneca linda.',
      price: 39.9,
      buyLink: 'https://www.mercadopago.com.br/caneca',
      image: {
        createdAt: '2023-01-01',
        updatedAt: '2023-01-01',
        id: 1,
        url: '/caneca.jpg',
        alt: 'Caneca solidária'
      }
    },
    {
      name: 'Chaveiro Fofo',
      description: 'Leve um pedacinho do Gatil com você.',
      price: 19.9,
      buyLink: 'https://www.mercadopago.com.br/chaveiro',
      image: {
        createdAt: '2023-01-01',
        updatedAt: '2023-01-01',
        id: 2,
        url: '/chaveiro.jpg',
        alt: 'Chaveiro solidário'
      }
    }
  ]
};

describe('<ProductsBlock />', () => {
  it('renders section and title', () => {
    const { container } = render(<ProductsBlock {...mockProductsBlock} />);
    expect(screen.getByTestId('products-block')).toBeInTheDocument();
    expect(screen.getByTestId('products-title')).toHaveTextContent('Produtos Solidários');

    expect(container).toMatchSnapshot();
  });

  it('renders all product cards', () => {
    render(<ProductsBlock {...mockProductsBlock} />);
    const cards = screen.getAllByTestId('product-card');
    expect(cards).toHaveLength(2);
  });

  it('renders correct product names', () => {
    render(<ProductsBlock {...mockProductsBlock} />);
    expect(screen.getByText('Caneca do Gatil')).toBeInTheDocument();
    expect(screen.getByText('Chaveiro Fofo')).toBeInTheDocument();
  });
});
