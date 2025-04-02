import { render, screen } from '@/tests/test-utils';

import { CatCard } from './CatCard';

describe('<CatCard />', () => {
  const baseCat = {
    id: '1',
    nome: 'Gato Teste',
    sexo: 'M' as const
  };

  const whatsappNumber = '(11) 99999-9999';

  it('renders correctly with required props', () => {
    const { container } = render(<CatCard cat={baseCat} whatsappNumber={whatsappNumber} />);

    expect(screen.getByTestId('cat-name')).toHaveTextContent('Gato Teste');
    expect(screen.getByTestId('contact-badge')).toBeInTheDocument();
    expect(screen.getByTestId('cat-image')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
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
      foto: { url: '/test.jpg', alt: 'Foto teste' },
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
    const objectPhotoCat = { ...baseCat, foto: { url: '/object-photo.jpg', alt: 'Alt texto' } };

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
