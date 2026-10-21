import type { Meta, StoryObj } from '@storybook/react';

import FaqAccordion from './FaqAccordion';

const meta = {
  title: 'Atoms/FAQAccordion',
  component: FaqAccordion,
  tags: ['autodocs']
} satisfies Meta<typeof FaqAccordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    faq: [
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
