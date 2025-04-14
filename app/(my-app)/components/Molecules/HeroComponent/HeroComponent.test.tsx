import type { BlockProps } from '@/app/(my-app)/types/block-props';
import { render, screen } from '@/tests/test-utils';

import { HeroComponent } from './HeroComponent';

const defaultProps: BlockProps<'hero'> = {
  title: 'Adote um Gato',
  subtitle: 'Você pode mudar uma vida hoje.',
  backgroundImage: {
    id: '1',
    createdAt: '2025-04-02T20:48:51.116Z',
    updatedAt: '2025-04-02T20:48:51.116Z',
    alt: 'Will',
    filename: 'gato3.png',
    mimeType: 'image/png',
    filesize: 1008532,
    width: 800,
    height: 800,
    focalX: 50,
    focalY: 50,
    sizes: {
      thumbnail: {
        width: 400,
        height: 300,
        mimeType: 'image/png',
        filesize: 324915,
        filename: 'gato3-400x300.png',
        url: '/api/media/file/gato3-400x300.png'
      },

      card: {
        width: 768,
        height: 1024,
        mimeType: 'image/png',
        filesize: 1794522,
        filename: 'gato3-768x1024.png',
        url: '/api/media/file/gato3-768x1024.png'
      },

      tablet: {
        width: null,
        height: null,
        mimeType: null,
        filesize: null,
        filename: null,
        url: null
      }
    }
  },
  ctaText: 'Ver Gatos',
  ctaLink: '/adote',
  blockType: 'hero'
};

describe('<HeroComponent />', () => {
  it('Should renders the title and subtitle', () => {
    const { container } = render(<HeroComponent {...defaultProps} />);
    expect(screen.getByTestId('hero-block')).toBeInTheDocument();
    expect(screen.getByTestId('hero-title')).toHaveTextContent('Adote um Gato');
    expect(screen.getByTestId('hero-subtitle')).toHaveTextContent('Você pode mudar uma vida hoje.');

    expect(container).toMatchSnapshot();
  });

  it('Should renders CTA if link and text are provided', () => {
    render(<HeroComponent {...defaultProps} />);
    const button = screen.getByTestId('hero-cta');
    expect(button).toHaveTextContent('Ver Gatos');
    expect(button).toHaveAttribute('href', '/adote');
  });

  it('Should does not render CTA if missing text or link', () => {
    render(<HeroComponent {...defaultProps} ctaText={undefined} />);
    expect(screen.queryByTestId('hero-cta')).not.toBeInTheDocument();
  });
});
