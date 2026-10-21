import { render, screen } from '@/tests/test-utils';

import { SectionCat } from './SectionCat';

describe('<SectionCat />', () => {
  it('Should render correctly with default label and light theme', () => {
    render(
      <SectionCat>
        <p>Meow content</p>
      </SectionCat>
    );

    const section = screen.getByTestId('section-cat-background');

    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute('role', 'region');
    expect(section).toHaveAttribute('aria-label', 'Informações do Gatil dos Resgatados');

    expect(section).toHaveClass('gd-cms-feature', 'gd-cms-feature-light');
    expect(section).not.toHaveClass('gd-cms-feature-dark');

    expect(screen.getByText('Meow content')).toBeInTheDocument();
  });

  it('Should apply dark theme when dark prop is true', () => {
    render(
      <SectionCat dark>
        <p>Dark cat</p>
      </SectionCat>
    );

    const section = screen.getByTestId('section-cat-background');

    expect(section).toHaveClass('gd-cms-feature', 'gd-cms-feature-dark');
    expect(section).not.toHaveClass('gd-cms-feature-light');

    expect(screen.getByText('Dark cat')).toBeInTheDocument();
  });

  it('Should use custom aria-label when provided', () => {
    render(
      <SectionCat label="Custom label for SEO">
        <span>Custom Label Content</span>
      </SectionCat>
    );

    const section = screen.getByRole('region', {
      name: 'Custom label for SEO'
    });

    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute('aria-label', 'Custom label for SEO');

    expect(screen.getByText('Custom Label Content')).toBeInTheDocument();
  });

  it('Should use default aria-label when label is empty', () => {
    render(
      <SectionCat label="">
        <p>Fallback label</p>
      </SectionCat>
    );

    const section = screen.getByTestId('section-cat-background');

    expect(section).toHaveAttribute('aria-label', 'Informações do Gatil dos Resgatados');
  });

  it('Should render correctly without children', () => {
    render(<SectionCat />);

    const section = screen.getByTestId('section-cat-background');

    expect(section).toBeInTheDocument();
    expect(section).toHaveClass('gd-cms-feature-light');

    const container = section.querySelector('.gd-container');

    expect(container).toBeInTheDocument();
    expect(container).toBeEmptyDOMElement();
  });

  it('Should render children inside the gd-container wrapper', () => {
    render(
      <SectionCat>
        <h2>Gatos disponíveis</h2>
        <p>Conheça nossos resgatados.</p>
      </SectionCat>
    );

    const section = screen.getByTestId('section-cat-background');
    const container = section.querySelector('.gd-container');

    expect(container).toBeInTheDocument();
    expect(container).toContainElement(screen.getByRole('heading', { name: 'Gatos disponíveis' }));
    expect(container).toContainElement(screen.getByText('Conheça nossos resgatados.'));
  });
});
