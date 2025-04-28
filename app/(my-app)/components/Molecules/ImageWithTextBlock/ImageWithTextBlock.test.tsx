import type { BlockProps } from '@/app/(my-app)/types/block-props';
import type { Media } from '@/payload-types';
import { render, screen } from '@/tests/test-utils';

import { ImageWithTextBlock } from './ImageWithTextBlock';

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
};

const baseProps: BlockProps<'imageWithText'> = {
  imagePosition: 'left',
  image: mockImage,
  title: 'Adote um Gatinho',
  text: 'Transforme a vida de um gatinho com amor.',
  ctaLink: '/adote',
  ctaText: 'Adotar agora',
  backgroundColor: 'light',
  blockType: 'imageWithText'
};

describe('<ImageWithTextBlock />', () => {
  it('renders the section wrapper with test id', () => {
    const { container } = render(<ImageWithTextBlock {...baseProps} />);
    expect(screen.getByTestId('image-with-text-block')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('renders the title when provided', () => {
    render(<ImageWithTextBlock {...baseProps} />);
    expect(screen.getByTestId('image-with-text-title')).toHaveTextContent(/adote um gatinho/i);
  });

  it('does not render the title if not provided', () => {
    render(<ImageWithTextBlock {...{ ...baseProps, title: undefined }} />);
    expect(screen.queryByTestId('image-with-text-title')).not.toBeInTheDocument();
  });

  it('renders the CTA link when ctaText and ctaLink are present', () => {
    render(<ImageWithTextBlock {...baseProps} />);
    const link = screen.getByTestId('image-with-text-cta-link');
    expect(link).toHaveAttribute('href', '/adote');
    expect(link).toHaveTextContent(/adotar agora/i);
  });

  it('does not render the CTA link if ctaText is missing', () => {
    render(<ImageWithTextBlock {...{ ...baseProps, ctaText: undefined }} />);
    expect(screen.queryByTestId('image-with-text-cta-link')).not.toBeInTheDocument();
  });

  it('does not render the CTA link if ctaLink is missing', () => {
    render(<ImageWithTextBlock {...{ ...baseProps, ctaLink: undefined }} />);
    expect(screen.queryByTestId('image-with-text-cta-link')).not.toBeInTheDocument();
  });

  it('renders the image when provided', () => {
    render(<ImageWithTextBlock {...baseProps} />);
    const image = screen.getByTestId('image-with-text-image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('alt', 'Gatinho fofo');
  });

  it('does not render the image if not provided', () => {
    render(<ImageWithTextBlock {...{ ...baseProps, image: undefined as unknown as Media }} />);
    expect(screen.queryByTestId('image-with-text-image')).not.toBeInTheDocument();
  });

  it('applies correct layout class for imagePosition = "right"', () => {
    const { container } = render(<ImageWithTextBlock {...baseProps} imagePosition="right" />);
    const section = container.querySelector('[data-testid="image-with-text-block"]');
    expect(section?.className).toContain('md:flex-row');
    expect(section?.className).not.toContain('md:flex-row-reverse');
  });

  it('applies correct layout class for imagePosition = "left"', () => {
    const { container } = render(<ImageWithTextBlock {...baseProps} imagePosition="left" />);
    const section = container.querySelector('[data-testid="image-with-text-block"]');
    expect(section?.className).toContain('md:flex-row-reverse');
  });

  it('applies dark theme styles when backgroundColor is "dark"', () => {
    render(<ImageWithTextBlock {...baseProps} backgroundColor="dark" />);
    const link = screen.getByTestId('image-with-text-cta-link');
    expect(link.className).toContain('bg-[#A1DFFF]');
    expect(link.className).toContain('text-[#013274]');
  });
});
