import { render, screen } from '@/tests/test-utils';

import { SectionCat } from './SectionCat';

describe('<SectionCat />', () => {
  it('Should renders correctly with default label and light theme', () => {
    const { container } = render(
      <SectionCat>
        <p>Meow content</p>
      </SectionCat>
    );

    const section = screen.getByTestId('section-cat-background');
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute(
      'aria-label',
      'Seção com informações sobre gatos disponíveis para adoção'
    );
    expect(screen.getByText('Meow content')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('Should applies dark theme when dark prop is true', () => {
    render(
      <SectionCat dark>
        <p>Dark cat</p>
      </SectionCat>
    );

    const section = screen.getByTestId('section-cat-background');
    expect(section.className.replace(/\s+/g, ' ')).toMatch(/bg-\[#013274\]/);
    expect(screen.getByText('Dark cat')).toBeInTheDocument();
  });

  it('Should uses custom aria-label when provided', () => {
    render(
      <SectionCat label="Custom label for SEO">
        <span>Custom Label Content</span>
      </SectionCat>
    );

    const section = screen.getByTestId('section-cat-background');
    expect(section).toHaveAttribute('aria-label', 'Custom label for SEO');
    expect(screen.getByText('Custom Label Content')).toBeInTheDocument();
  });
});
