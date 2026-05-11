import type { Meta, StoryObj } from '@storybook/react';

import AdoptionSwiper from './AdoptionSwiper';

// ✅ Lexical mínimo (texto simples) — ajusta se teu RichTextComponent pedir outro formato
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
  {
    title: 'Escolha seu gatinho',
    description: 'Encontre o que ganhou seu coração e clique para adotá-lo.'
  },
  {
    title: 'Nosso retorno',
    description: 'Em até 48h úteis respondemos, sempre pensando no bem-estar.'
  },
  {
    title: 'Visita carinhosa',
    description: 'Vamos até sua casa para garantir um lar seguro e aconchegante.'
  },
  { title: 'Compromisso de amor', description: 'Assinamos juntos o termo de adoção responsável.' },
  { title: 'Bem-vindo, novo amigo', description: 'Acompanhamos os primeiros passos no novo lar.' }
];

const meta: Meta<typeof AdoptionSwiper> = {
  title: 'Atoms/AdoptionSwiper',
  component: AdoptionSwiper,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen' // o próprio componente já tem container; fullscreen evita padding extra do SB
  },
  argTypes: {
    title: { control: 'text' },
    ctaText: { control: 'text' },
    ctaLink: { control: 'text' }
  }
};

export default meta;
type Story = StoryObj<typeof AdoptionSwiper>;

export const Default: Story = {
  args: {
    title: 'Como funciona a adoção',
    content: lexicalParagraph(
      'Siga as etapas abaixo e prepare o coração — seu novo amigo está te esperando!'
    ),
    slides: demoSlides
  },
  render: (args) => (
    <div className="max-w-[1300px] mx-auto px-4 py-12">
      <AdoptionSwiper {...args} />
    </div>
  )
};

export const WithCTA: Story = {
  args: {
    title: 'Pronto para adotar?',
    content: lexicalParagraph(
      'Conheça o passo a passo e finalize sua adoção de forma responsável.'
    ),
    slides: demoSlides,
    ctaText: 'Ler Política de Adoção',
    ctaLink: '/politica-de-adocao'
  },
  render: (args) => (
    <div className="max-w-[1300px] mx-auto px-4 py-12">
      <AdoptionSwiper {...args} />
    </div>
  )
};

export const ManySlides: Story = {
  args: {
    title: 'Etapas detalhadas',
    content: lexicalParagraph('Lista longa para testar paginação e responsividade.'),
    slides: [
      ...demoSlides,
      { title: 'Ajuste do lar', description: 'Dicas de ambientação e enriquecimento ambiental.' },
      { title: 'Saúde em dia', description: 'Vacinas, castração e orientações iniciais.' },
      { title: 'Adaptação', description: 'Como conduzir a chegada com calma e carinho.' },
      { title: 'Acompanhamento', description: 'Suporte nos primeiros dias e dúvidas comuns.' }
    ]
  },
  render: (args) => (
    <div className="max-w-[1300px] mx-auto px-4 py-12">
      <AdoptionSwiper {...args} />
    </div>
  )
};

export const NarrowContainer: Story = {
  args: {
    title: 'Layout mais estreito',
    content: lexicalParagraph('Útil pra simular páginas com colunas/sidebars.'),
    slides: demoSlides
  },
  render: (args) => (
    <div className="max-w-[900px] mx-auto px-4 py-12 border rounded-lg">
      <AdoptionSwiper {...args} />
    </div>
  )
};
