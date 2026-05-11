/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen, within } from '@/tests/test-utils';

import { RichTextProps } from '../RichText';
import AdoptionSwiper from './AdoptionSwiper';

// ---- Mocks de CSS do Swiper (evita erro no Jest) ----
jest.mock('swiper/css', () => ({}));
jest.mock('swiper/css/pagination', () => ({}));

// ---- Mock dos módulos do Swiper (apenas identificadores) ----
jest.mock('swiper/modules', () => ({
  Pagination: 'PaginationMock',
  A11y: 'A11yMock'
}));

// ---- Mock do Swiper/SwiperSlide para capturar props e simplificar DOM ----
interface SwiperProps {
  children: React.ReactNode;
  [key: string]: any;
}

interface SwiperSlideProps {
  children: React.ReactNode;
  [key: string]: any;
}

const capturedSwiperProps: SwiperProps[] = [];
jest.mock('swiper/react', () => {
  const Swiper = ({ children, ...props }: SwiperSlideProps) => {
    capturedSwiperProps.push({ ...props, children });
    return (
      <div data-testid="swiper" data-props={JSON.stringify(props)}>
        {children}
      </div>
    );
  };
  const SwiperSlide = ({ children, ...rest }: SwiperSlideProps) => (
    <div data-testid="swiper-slide" {...rest}>
      {children}
    </div>
  );
  return { Swiper, SwiperSlide };
});

// ---- Mock do RichTextComponent: renderiza o texto do primeiro parágrafo ----
jest.mock('../RichText', () => ({
  RichTextComponent: ({ lexicalData }: RichTextProps) => {
    const children = Array.isArray(lexicalData?.root?.children) ? lexicalData.root.children : [];
    const text =
      children[0]?.children && Array.isArray(children[0].children)
        ? (children[0].children[0]?.text ?? '')
        : '';
    return <div data-testid="richtext">{text}</div>;
  }
}));

// ---- Helpers de fixtures ----
const lexicalParagraph = (text: string) => ({
  root: {
    type: 'root',
    children: [
      {
        type: 'paragraph',
        children: [{ type: 'text', text, detail: 0, format: 0, mode: 'normal', style: '' }],
        direction: 'ltr',
        format: '', // "" is a valid value for format
        indent: 0,
        version: 1
      }
    ],
    direction: 'ltr' as const,
    format: 'left' as const, // "" is a valid value for format
    indent: 0,
    version: 1
  }
});

const demoSlides = [
  { title: 'Escolha seu gatinho', description: 'Encontre o que ganhou seu coração.' },
  { title: 'Nosso retorno', description: 'Respondemos em até 48h úteis.' },
  { title: 'Visita carinhosa', description: 'Checamos se o lar está seguro.' },
  { title: 'Compromisso de amor', description: 'Assinamos o termo de adoção.' },
  { title: 'Bem-vindo, novo amigo', description: 'Acompanhamos os primeiros passos.' }
];

describe('<AdoptionSwiper />', () => {
  beforeEach(() => {
    capturedSwiperProps.length = 0;
  });

  it('renderiza título e conteúdo (RichText) corretamente', () => {
    const { container } = render(
      <AdoptionSwiper
        blockType="sliderBlock"
        title="Como funciona a adoção"
        content={lexicalParagraph('Texto introdutório do RichText')}
        slides={demoSlides}
      />
    );

    expect(screen.getByRole('heading', { name: /como funciona a adoção/i })).toBeInTheDocument();

    expect(screen.getByTestId('richtext')).toHaveTextContent('Texto introdutório do RichText');

    expect(container).toMatchSnapshot();
  });

  it('renderiza a quantidade correta de slides, com títulos, descrições e badges numeradas', () => {
    render(
      <AdoptionSwiper
        title="Lista de etapas"
        blockType="sliderBlock"
        content={lexicalParagraph('Etapas abaixo')}
        slides={demoSlides}
      />
    );

    const slidesEls = screen.getAllByTestId('swiper-slide');
    expect(slidesEls).toHaveLength(demoSlides.length);

    demoSlides.forEach((s) => {
      expect(screen.getByText(s.title)).toBeInTheDocument();
      expect(screen.getByText(s.description)).toBeInTheDocument();
    });

    // badges: número + aria-label "Etapa N"
    slidesEls.forEach((slide, idx) => {
      const badge = within(slide).getByLabelText(`Etapa ${idx + 1}`);
      expect(badge).toHaveTextContent(String(idx + 1));

      // checa estilos inline derivados do accentColor (#013274)
      // backgroundColor: #0132741A e color: #013274
      expect(badge).toHaveStyle({ color: '#013274' });
      expect(badge).toHaveStyle('color: #013274');
      expect(badge).toHaveStyle('background-color: rgba(1, 50, 116, 0.102)');
    });
  });

  it('aplica classes diferentes para slides pares/ímpares (bordas alternadas)', () => {
    render(
      <AdoptionSwiper
        blockType="sliderBlock"
        title="Testa bordas"
        content={lexicalParagraph('Bordas alternadas')}
        slides={demoSlides.slice(0, 2)} // usa dois para validar alternância
      />
    );

    const [first, second] = screen.getAllByTestId('swiper-slide');

    // article é o primeiro filho do slide
    const firstArticle =
      within(first).getByRole('article', { hidden: true }) ?? first.querySelector('article');
    const secondArticle =
      within(second).getByRole('article', { hidden: true }) ?? second.querySelector('article');

    // slide 0 (idx % 2 === 0): 'border-r-4 border-b-4'
    expect(firstArticle?.className).toMatch(/border-r-4/);
    expect(firstArticle?.className).toMatch(/border-b-4/);

    // slide 1 (idx % 2 !== 0): 'border-l-4 border-t-4'
    expect(secondArticle?.className).toMatch(/border-l-4/);
    expect(secondArticle?.className).toMatch(/border-t-4/);
  });

  it('renderiza CTA quando ctaLink e ctaText são fornecidos e não renderiza caso contrário', () => {
    const { rerender } = render(
      <AdoptionSwiper
        blockType="sliderBlock"
        title="Com CTA"
        content={lexicalParagraph('CTA presente')}
        slides={demoSlides}
        ctaText="Política de Adoção"
        ctaLink="/politica-de-adocao"
      />
    );

    const cta = screen.getByRole('link', { name: /política de adoção/i });
    expect(cta).toBeInTheDocument();
    expect(cta).toHaveAttribute('href', '/politica-de-adocao');

    // sem CTA
    rerender(
      <AdoptionSwiper
        blockType="sliderBlock"
        title="Sem CTA"
        content={lexicalParagraph('CTA ausente')}
        slides={demoSlides}
      />
    );
    expect(screen.queryByRole('link', { name: /política de adoção/i })).not.toBeInTheDocument();
  });

  it('configura o Swiper com os módulos e parâmetros esperados', () => {
    render(
      <AdoptionSwiper
        blockType="sliderBlock"
        title="Swiper props"
        content={lexicalParagraph('Verificando props')}
        slides={demoSlides}
      />
    );

    // o nosso mock empilha as props em capturedSwiperProps
    expect(capturedSwiperProps.length).toBeGreaterThan(0);
    const last = capturedSwiperProps.at(-1);

    // spaceBetween
    expect(last?.spaceBetween).toBe(12);

    // pagination.clickable
    expect(last?.pagination).toBeDefined();
    expect(last?.pagination?.clickable).toBe(true);

    // breakpoints definidos
    expect(Object.keys(last?.breakpoints ?? {})).toEqual(
      expect.arrayContaining(['375', '640', '767', '990', '1280'])
    );

    // className contém utilitários
    expect(last?.className).toMatch(/!w-full/);
    expect(last?.className).toMatch(/!pb-8/);
  });

  it('não quebra quando slides estão ausentes e ainda renderiza título/conteúdo', () => {
    render(
      <AdoptionSwiper
        title="Sem slides"
        blockType="sliderBlock"
        content={lexicalParagraph('Apenas texto')}
      />
    );

    expect(screen.getByRole('heading', { name: /sem slides/i })).toBeInTheDocument();
    expect(screen.getByTestId('richtext')).toHaveTextContent('Apenas texto');
    // sem slides -> nenhum slide no DOM
    expect(screen.queryAllByTestId('swiper-slide')).toHaveLength(0);
  });
});
