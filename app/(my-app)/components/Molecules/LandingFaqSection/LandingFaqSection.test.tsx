import { fireEvent, render, screen } from '@/tests/test-utils';

import { LandingFaqSection } from './LandingFaqSection';

const items = [
  {
    pergunta: 'Como funciona o apadrinhamento?',
    resposta: 'Você contribui mensalmente para os cuidados do gatinho.'
  },
  {
    pergunta: 'Posso apadrinhar mais de um gato?',
    resposta: 'Sim, conforme sua disponibilidade.'
  }
];

describe('<LandingFaqSection />', () => {
  const renderComponent = (props: Partial<Parameters<typeof LandingFaqSection>[0]> = {}) =>
    render(
      <LandingFaqSection
        eyebrow="FICOU ALGUMA DÚVIDA?"
        title="A gente"
        titleEmphasis="te explica."
        description="Reunimos as respostas mais comuns."
        buttonLabel="Fale com a equipe"
        buttonHref="https://wa.me/5548999999999"
        items={items}
        {...props}
      />
    );

  it('renders the section with the first answer open by default', () => {
    renderComponent();

    expect(screen.getByRole('heading', { name: /A gente/i })).toBeInTheDocument();
    expect(screen.getByText('Reunimos as respostas mais comuns.')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Fale com a equipe/i })).toHaveAttribute(
      'href',
      'https://wa.me/5548999999999'
    );

    expect(screen.getByTestId('landing-faq-trigger-0')).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByTestId('landing-faq-answer-0')).toHaveTextContent(items[0].resposta);
  });

  it('toggles the answers and keeps only one open at a time', () => {
    renderComponent();

    const firstTrigger = screen.getByTestId('landing-faq-trigger-0');
    const secondTrigger = screen.getByTestId('landing-faq-trigger-1');

    fireEvent.click(secondTrigger);

    expect(firstTrigger).toHaveAttribute('aria-expanded', 'false');
    expect(secondTrigger).toHaveAttribute('aria-expanded', 'true');

    fireEvent.click(secondTrigger);

    expect(secondTrigger).toHaveAttribute('aria-expanded', 'false');
  });

  it('does not render when there are no valid faq items', () => {
    const { container } = renderComponent({ items: [] });
    expect(container).toBeEmptyDOMElement();
  });
});
