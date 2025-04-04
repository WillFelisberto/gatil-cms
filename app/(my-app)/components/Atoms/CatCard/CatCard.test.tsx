import { fireEvent, render, screen } from '@/tests/test-utils';

import { CatCard } from './CatCard';

describe('<CatCard />', () => {
  const baseCat = {
    id: '1',
    nome: 'Gato Teste',
    sexo: 'M' as const,
    createdAt: '2025-04-02T21:24:52.909Z',
    updatedAt: '2025-04-03T20:30:41.034Z',
    idade: '1 ano',
    descricao: 'maluca doidinha',
    foto: {
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
      },
      id: '67eda2b3b852bb6b7ae49216',
      url: '/api/media/file/gato3.png',
      thumbnailURL: '/api/media/file/gato3-400x300.png'
    },
    galeria: [],
    vacinas: [],
    vermifugacoes: [],
    castrado: true,
    dataEntrada: '2025-04-02T12:00:00.000Z',
    adotado: false,
    show: true,
    disponivelParaApadrinhamento: true
  };

  const whatsappNumber = '(11) 99999-9999';

  it('renders correctly with required props', () => {
    const { container } = render(<CatCard cat={baseCat} whatsappNumber={whatsappNumber} />);

    expect(screen.getByTestId('cat-name')).toHaveTextContent('Gato Teste');
    expect(screen.getByTestId('contact-badge')).toBeInTheDocument();
    expect(screen.getByTestId('cat-image')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('renders correctly in "adotar" mode with WhatsApp link', () => {
    render(<CatCard cat={baseCat} whatsappNumber={whatsappNumber} mode="adotar" />);

    const expectedMessage = encodeURIComponent(
      `Olá! Tenho interesse em adotar o Gato Teste. Poderia me passar mais informações?`
    );

    expect(screen.getByTestId('cat-name')).toHaveTextContent('Gato Teste');
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      expect.stringContaining(expectedMessage)
    );
    expect(screen.getByTestId('contact-badge')).toHaveTextContent('Clique aqui para saber mais 🐾');
  });

  it('renders correctly in "apadrinhar" mode and triggers onClick', () => {
    const handleClick = jest.fn();

    render(
      <CatCard
        cat={baseCat}
        whatsappNumber={whatsappNumber}
        mode="apadrinhar"
        onClick={handleClick}
      />
    );

    const card = screen.getByRole('button', { name: /Apadrinhar Gato Teste/i });
    expect(card).toBeInTheDocument();
    expect(screen.getByTestId('contact-badge')).toHaveTextContent('Clique aqui para apadrinhar 🐾');

    fireEvent.click(card);
    expect(handleClick).toHaveBeenCalled();
  });

  it('displays male icon for male cats', () => {
    render(<CatCard cat={baseCat} whatsappNumber={whatsappNumber} />);
    expect(screen.getByTitle('Macho')).toBeInTheDocument();
  });

  it('displays female icon for female cats', () => {
    const femaleCat = { ...baseCat, sexo: 'F' as const };
    render(<CatCard cat={femaleCat} whatsappNumber={whatsappNumber} />);
    expect(screen.getByTitle('Fêmea')).toBeInTheDocument();
  });

  it('displays optional fields when provided', () => {
    const completeCat = {
      ...baseCat,
      idade: '2 anos',
      descricao: 'Gato muito brincalhão',
      foto: {
        id: 'test-id',
        createdAt: '2025-04-02T20:48:51.116Z',
        updatedAt: '2025-04-02T20:48:51.116Z',
        url: '/test.jpg',
        alt: 'Foto teste',
        mimeType: 'image/jpeg',
        filesize: 12345,
        width: 800,
        height: 800,
        focalX: 50,
        focalY: 50,
        sizes: {
          thumbnail: {
            width: 400,
            height: 300,
            mimeType: 'image/jpeg',
            filesize: 1234,
            filename: 'test-thumbnail.jpg',
            url: '/test-thumbnail.jpg'
          },
          card: undefined,
          tablet: undefined
        }
      },
      vacinas: [{ nome: 'Raiva' }],
      castrado: true,
      vermifugacoes: [{}],
      doencas: 'Nenhuma',
      observacoesSaude: 'Saudável'
    };

    render(<CatCard cat={completeCat} whatsappNumber={whatsappNumber} />);

    expect(screen.getByText('🎂 2 anos')).toBeInTheDocument();
    expect(screen.getByText('Gato muito brincalhão')).toBeInTheDocument();
    expect(screen.getByText('💉 Vacinado')).toBeInTheDocument();
    expect(screen.getByText('✂️ Castrado')).toBeInTheDocument();
    expect(screen.getByText('🪱 Vermifugado')).toBeInTheDocument();
    expect(screen.getByText('⚠️ Doenças: Nenhuma')).toBeInTheDocument();
    expect(screen.getByText('📝 Saudável')).toBeInTheDocument();
  });

  it('handles different image types correctly', () => {
    const stringPhotoCat = { ...baseCat, foto: '/string-photo.jpg' };
    const objectPhotoCat = {
      ...baseCat,
      foto: {
        id: 'test-id',
        createdAt: '2025-04-02T20:48:51.116Z',
        updatedAt: '2025-04-02T20:48:51.116Z',
        url: '/object-photo.jpg',
        alt: 'Alt texto',
        mimeType: 'image/jpeg',
        filesize: 12345,
        width: 800,
        height: 800,
        focalX: 50,
        focalY: 50,
        sizes: {
          thumbnail: undefined,
          card: undefined,
          tablet: undefined
        }
      }
    };

    const { rerender } = render(<CatCard cat={stringPhotoCat} whatsappNumber={whatsappNumber} />);
    expect(screen.getByTestId('cat-image').getAttribute('src')).toContain('string-photo.jpg');

    rerender(<CatCard cat={objectPhotoCat} whatsappNumber={whatsappNumber} />);
    expect(screen.getByTestId('cat-image').getAttribute('src')).toContain('object-photo.jpg');
    expect(screen.getByTestId('cat-image')).toHaveAttribute('alt', 'Alt texto');
  });

  it('uses fallback image when no photo provided', () => {
    render(<CatCard cat={baseCat} whatsappNumber={whatsappNumber} />);
    expect(screen.getByTestId('cat-image').getAttribute('src')).toContain('no-image.jpg');
    expect(screen.getByTestId('cat-image')).toHaveAttribute('alt', 'Foto de Gato Teste');
  });

  it('generates correct WhatsApp link', () => {
    render(<CatCard cat={baseCat} whatsappNumber={whatsappNumber} />);
    const expectedMessage = encodeURIComponent(
      `Olá! Tenho interesse em adotar o Gato Teste. Poderia me passar mais informações?`
    );
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      expect.stringContaining(expectedMessage)
    );
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      expect.stringContaining('https://wa.me/5511999999999')
    );
  });

  it('displays gender-specific texts correctly', () => {
    const femaleCat = {
      ...baseCat,
      sexo: 'F' as const,
      castrado: true,
      vacinas: [{ nome: 'Raiva' }]
    };

    const { rerender } = render(<CatCard cat={femaleCat} whatsappNumber={whatsappNumber} />);
    expect(screen.getByText('✂️ Castrada')).toBeInTheDocument();
    expect(screen.getByText('💉 Vacinada')).toBeInTheDocument();

    rerender(
      <CatCard cat={{ ...femaleCat, vermifugacoes: [{}] }} whatsappNumber={whatsappNumber} />
    );
    expect(screen.getByText('🪱 Vermifugada')).toBeInTheDocument();
  });

  it('does not render optional fields when not provided', () => {
    render(<CatCard cat={baseCat} whatsappNumber={whatsappNumber} />);

    expect(screen.queryByTestId('cat-description')).not.toBeInTheDocument();
    expect(screen.queryByText('🎂')).not.toBeInTheDocument();
    expect(screen.queryByText('💉 Vacinado')).not.toBeInTheDocument();
    expect(screen.queryByText('✂️ Castrado')).not.toBeInTheDocument();
    expect(screen.queryByText('🪱 Vermifugado')).not.toBeInTheDocument();
    expect(screen.queryByText('⚠️ Doenças:')).not.toBeInTheDocument();
    expect(screen.queryByText('📝')).not.toBeInTheDocument();
  });

  it('handles empty vaccine and deworming arrays', () => {
    const catWithEmptyArrays = {
      ...baseCat,
      vacinas: [],
      vermifugacoes: []
    };

    render(<CatCard cat={catWithEmptyArrays} whatsappNumber={whatsappNumber} />);

    expect(screen.queryByText('💉 Vacinado')).not.toBeInTheDocument();
    expect(screen.queryByText('🪱 Vermifugado')).not.toBeInTheDocument();
  });
});
