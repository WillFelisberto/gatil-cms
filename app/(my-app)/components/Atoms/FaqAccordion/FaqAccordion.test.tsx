import { fireEvent, render, screen } from '@/tests/test-utils';

import { FAQAccordion } from './FaqAccordion';

const mockFaqs = [
  {
    pergunta: 'O que é apadrinhamento?',
    resposta: 'É uma forma de ajudar financeiramente um gatinho.'
  },
  {
    pergunta: 'Posso apadrinhar mais de um gato?',
    resposta: 'Sim! Você pode apadrinhar quantos gatos quiser.'
  }
];

describe('<FAQAccordion />', () => {
  it('should render all questions', () => {
    const { container } = render(<FAQAccordion faqs={mockFaqs} />);

    mockFaqs.forEach((faq, index) => {
      expect(screen.getByTestId(`faq-question-${index}`)).toHaveTextContent(faq.pergunta);
    });

    expect(container).toMatchSnapshot();
  });

  it('should expand answer when a question is clicked', () => {
    render(<FAQAccordion faqs={mockFaqs} />);

    const question = screen.getByTestId('faq-question-0');
    fireEvent.click(question);

    const answer = screen.getByTestId('faq-answer-0');
    expect(answer).toHaveTextContent(mockFaqs[0].resposta);
    expect(question).toHaveAttribute('aria-expanded', 'true');
  });

  it('should collapse answer when the same question is clicked again', () => {
    render(<FAQAccordion faqs={mockFaqs} />);

    const question = screen.getByTestId('faq-question-0');
    const answer = screen.getByTestId('faq-answer-0');

    fireEvent.click(question);
    expect(answer).toHaveTextContent(mockFaqs[0].resposta);
    expect(question).toHaveAttribute('aria-expanded', 'true');

    fireEvent.click(question);
    expect(answer.className).toMatch(/max-h-0/);
    expect(question).toHaveAttribute('aria-expanded', 'false');
  });

  it('should only show one answer at a time', () => {
    render(<FAQAccordion faqs={mockFaqs} />);

    const firstQuestion = screen.getByTestId('faq-question-0');
    const secondQuestion = screen.getByTestId('faq-question-1');
    const firstAnswer = screen.getByTestId('faq-answer-0');
    const secondAnswer = screen.getByTestId('faq-answer-1');

    fireEvent.click(firstQuestion);
    expect(firstAnswer).toHaveTextContent(mockFaqs[0].resposta);
    expect(firstAnswer.className).toMatch(/max-h-40/);

    fireEvent.click(secondQuestion);
    expect(secondAnswer).toHaveTextContent(mockFaqs[1].resposta);
    expect(secondAnswer.className).toMatch(/max-h-40/);
    expect(firstAnswer.className).toMatch(/max-h-0/);
  });
});
