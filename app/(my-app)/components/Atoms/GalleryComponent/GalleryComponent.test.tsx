import type { BlockProps } from '@/app/(my-app)/types/block-props';
import { render, screen } from '@/tests/test-utils';

import { GalleryComponent } from './GalleryComponent';

const mockGallery: BlockProps<'gallery'> = {
  blockType: 'gallery',
  images: [
    {
      image: {
        id: '1',
        url: '/gato1.jpg',
        alt: 'Gato dormindo',
        createdAt: '2023-01-01',
        updatedAt: '2023-01-02'
      },
      caption: 'Gato dormindo'
    },
    {
      image: {
        id: '2',
        url: '/gato2.jpg',
        alt: 'Gato brincando',
        createdAt: '2023-01-01',
        updatedAt: '2023-01-02'
      },
      caption: 'Gato brincando'
    }
  ]
};

describe('<GalleryComponent />', () => {
  it('Should renders all gallery images and captions', () => {
    const { container } = render(<GalleryComponent {...mockGallery} />);

    const images = screen.getAllByTestId('gallery-image');
    expect(images).toHaveLength(2);

    expect(screen.getByText('Gato dormindo')).toBeInTheDocument();
    expect(screen.getByText('Gato brincando')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('Should renders the section container', () => {
    render(<GalleryComponent {...mockGallery} />);
    expect(screen.getByTestId('gallery-block')).toBeInTheDocument();
  });
});
