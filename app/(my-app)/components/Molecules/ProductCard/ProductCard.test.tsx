import { render, screen } from '@/tests/test-utils';

import { ProductCard } from './ProductCard';

describe('<ProductCard />', () => {
  const mockProps = {
    name: 'Chaveiro Gatil',
    description: 'Produto solidário para apoiar o Gatil!',
    price: 25.5,
    buyLink: 'https://www.mercadopago.com.br/chaveiro',
    image: {
      createdAt: '2023-01-01',
      updatedAt: '2023-01-01',
      id: 1,
      url: '/chaveiro.jpg',
      alt: 'Chaveiro solidário'
    }
  };

  it('Should renders product name, description, price and button', () => {
    const { container } = render(<ProductCard {...mockProps} />);

    expect(screen.getByTestId('product-name')).toHaveTextContent('Chaveiro Gatil');
    expect(screen.getByTestId('product-description')).toHaveTextContent('Produto solidário');
    expect(screen.getByTestId('product-price')).toHaveTextContent(/25,50/i); // conforme Intl.format
    expect(screen.getByTestId('product-cta')).toHaveAttribute('href', mockProps.buyLink);

    expect(container).toMatchSnapshot();
  });

  it('Should renders image with correct alt text', () => {
    render(<ProductCard {...mockProps} />);
    const img = screen.getByAltText('Chaveiro solidário');
    expect(img).toBeInTheDocument();
  });
});
