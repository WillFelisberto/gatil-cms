import type { Meta, StoryObj } from '@storybook/react';
import Image from 'next/image';

import { SectionCat } from './SectionCat';

const meta: Meta<typeof SectionCat> = {
  title: 'Molecules/SectionCat',
  component: SectionCat,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof SectionCat>;

const Content = ({ dark }: { dark?: boolean }) => (
  <div className="h-full flex flex-col md:flex-row items-center justify-center gap-8 px-4">
    {/* Texto */}
    <div className="md:w-1/2 text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Conheça nossos gatinhos resgatados</h2>
      <p className="text-lg md:text-xl leading-relaxed mb-8">
        Ao apadrinhar, você contribui diretamente para os cuidados diários, tratamentos e bem-estar
        dos nossos pequenos heróis. Clique abaixo e escolha o seu novo afilhado.
      </p>
      <button
        className={`px-8 py-3 rounded-full text-lg font-semibold transition-colors ${
          dark
            ? 'bg-[#A1DFFF] text-blue-950 hover:bg-[#7cd0f3]'
            : 'bg-blue-950 text-white hover:bg-[#001f4c]'
        }`}
      >
        Apadrinho M
      </button>
    </div>

    {/* Imagem */}
    <div className="md:w-1/2 flex justify-center">
      <div className="relative w-full h-64 md:h-96">
        <Image
          src="/gato.jpg"
          alt="Gato para adoção"
          fill
          className="rounded-xl shadow-lg object-cover"
        />
      </div>
    </div>
  </div>
);

export const Claro: Story = {
  args: {
    dark: false,
    children: <Content dark={false} />
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
};

export const Escuro: Story = {
  args: {
    dark: true,
    children: <Content dark={true} />
  },
  parameters: {
    layout: 'fullscreen'
  }
};
