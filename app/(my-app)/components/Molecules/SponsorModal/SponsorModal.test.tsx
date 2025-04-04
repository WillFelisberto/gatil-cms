import { Cat, Media } from '@/payload-types';
import { fireEvent, render, screen } from '@/tests/test-utils';

import { SponsorModal } from './SponsorModal';

const mockCatWithImage: Cat = {
  id: '1',
  nome: 'Gato Teste',
  sexo: 'M',
  createdAt: '2025-04-02T21:24:52.909Z',
  updatedAt: '2025-04-03T20:30:41.034Z',
  idade: '1 ano',
  descricao: 'maluca doidinha',
  foto: {
    id: '123',
    url: '/gato.jpg',
    alt: 'Foto linda',
    filename: 'gato.jpg',
    mimeType: 'image/png',
    filesize: 1000,
    width: 800,
    height: 600,
    createdAt: '',
    updatedAt: '',
    sizes: {},
    thumbnailURL: ''
  } as Media,
  galeria: [],
  vacinas: [],
  vermifugacoes: [],
  castrado: true,
  dataEntrada: '2025-04-02T12:00:00.000Z',
  adotado: false,
  show: true,
  disponivelParaApadrinhamento: true
};

const mockCatWithoutImage = { ...mockCatWithImage, foto: undefined } as Cat;
const mockCatWithStringImage = {
  ...mockCatWithImage,
  foto: {
    createdAt: '2025-04-02T20:48:51.116Z',
    updatedAt: '2025-04-02T20:48:51.116Z',
    alt: 'Will',
    filename: '/gato.jpg',
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
        url: 'gato3-400x300.png'
      },

      card: {
        width: 768,
        height: 1024,
        mimeType: 'image/png',
        filesize: 1794522,
        filename: 'gato3-768x1024.png',
        url: 'gato3-768x1024.png'
      },

      tablet: {
        width: null,
        height: null,
        mimeType: null,
        filesize: null,
        filename: null,
        url: null
      }
    },
    id: '67eda2b3b852bb6b7ae49216',
    url: '/gato.jpg',
    thumbnailURL: 'gato3-400x300.png'
  }
};
const mockCatWithoutDescription = { ...mockCatWithImage, descricao: undefined } as Cat;

describe('<SponsorModal />', () => {
  const onCloseMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with image and description', () => {
    const { container } = render(<SponsorModal cat={mockCatWithImage} onClose={onCloseMock} />);

    expect(screen.getByTestId('sponsor-modal')).toBeInTheDocument();
    expect(screen.getByTestId('modal-title')).toHaveTextContent(/Apadrinhar Gato Teste/i);
    expect(screen.getByTestId('cat-description')).toHaveTextContent(/maluca doidinha/i);
    expect(screen.getByTestId('cat-image-Gato Teste')).toBeInTheDocument();
    expect(screen.getByTestId('close-button')).toBeInTheDocument();

    expect(screen.getByRole('dialog')).toHaveAttribute('aria-modal', 'true');
    expect(screen.getByRole('dialog')).toHaveAttribute('aria-labelledby', 'sponsor-modal-title');

    expect(container).toMatchSnapshot();
  });

  it('calls onClose when clicking close button', () => {
    render(<SponsorModal cat={mockCatWithImage} onClose={onCloseMock} />);
    fireEvent.click(screen.getByTestId('close-button'));
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when pressing Escape', () => {
    render(<SponsorModal cat={mockCatWithImage} onClose={onCloseMock} />);
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('does not render image if image is missing', () => {
    render(<SponsorModal cat={mockCatWithoutImage} onClose={onCloseMock} />);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('renders correctly with image as string URL', () => {
    render(<SponsorModal cat={mockCatWithStringImage} onClose={onCloseMock} />);
    const img = screen.getByTestId(`cat-image-${mockCatWithImage.nome}`) as HTMLImageElement;

    expect(img.src).toContain('gato.jpg');
  });

  it('does not render description if missing', () => {
    render(<SponsorModal cat={mockCatWithoutDescription} onClose={onCloseMock} />);
    expect(screen.queryByTestId('cat-description')).not.toBeInTheDocument();
  });

  it('renders correct image attributes', () => {
    render(<SponsorModal cat={mockCatWithImage} onClose={onCloseMock} />);
    const img = screen.getByTestId(`cat-image-${mockCatWithImage.nome}`) as HTMLImageElement;

    expect(img.alt).toBe('Foto linda');
    expect(img.src).toContain('gato.jpg');
  });
});
