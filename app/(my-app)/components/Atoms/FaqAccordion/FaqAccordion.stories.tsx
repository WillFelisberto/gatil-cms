import type { Meta, StoryObj } from '@storybook/react';

import { FAQAccordion } from './FaqAccordion';

const meta: Meta<typeof FAQAccordion> = {
  title: 'Atoms/FAQAccordion',
  component: FAQAccordion,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof FAQAccordion>;

export const Default: Story = {
  args: {
    faqs: [
      {
        question: 'O que é o apadrinhamento de gatos?',
        answer:
          'É uma forma de contribuir com os cuidados e o bem-estar de um gatinho resgatado, ajudando com os custos.'
      },
      {
        question: 'Posso apadrinhar mais de um gato?',
        answer:
          'Sim! Você pode adotar ou apadrinhar quantos gatos desejar, desde que consiga suprir suas necessidades com responsabilidade e carinho.'
      },
      {
        question: 'Como funciona o apadrinhamento?',
        answer:
          'Você escolhe um gatinho e contribui mensalmente com uma quantia para ajudar nos cuidados dele.'
      }
    ]
  }
};
