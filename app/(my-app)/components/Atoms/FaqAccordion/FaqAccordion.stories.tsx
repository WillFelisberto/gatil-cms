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
    blockType: 'faq',
    faq: [
      {
        pergunta: 'O que é o apadrinhamento de gatos?',
        resposta:
          'É uma forma de contribuir com os cuidados e o bem-estar de um gatinho resgatado, ajudando com os custos.'
      },
      {
        pergunta: 'Posso apadrinhar mais de um gato?',
        resposta:
          'Sim! Você pode adotar ou apadrinhar quantos gatos desejar, desde que consiga suprir suas necessidades com responsabilidade e carinho.'
      },
      {
        pergunta: 'Como funciona o apadrinhamento?',
        resposta:
          'Você escolhe um gatinho e contribui mensalmente com uma quantia para ajudar nos cuidados dele.'
      }
    ]
  }
};
