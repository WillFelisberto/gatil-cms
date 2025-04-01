import type { Meta, StoryObj } from '@storybook/react';
import { Facebook, Instagram, Music2 } from 'lucide-react';

import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Atoms/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen flex flex-col">
        {/* Conteúdo da página (simulado) */}
        <main className="flex-grow p-6 bg-gray-50">
          <p className="text-center text-gray-400">
            Conteúdo da página simulada para visualização do Footer no rodapé.
          </p>
        </main>
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    socialLinks: [
      { icon: Facebook, url: 'https://facebook.com' },
      { icon: Instagram, url: 'https://instagram.com' },
      { icon: Music2, url: 'https://tiktok.com' }
    ],
    menuItems: [
      { label: 'Início', href: '#' },
      { label: 'Apadrinhe', href: '#' },
      { label: 'Colabore', href: '#' },
      { label: 'Contato', href: '#' },
      { label: 'Sobre o Projeto', href: '#' },
      { label: 'Adote', href: '#' }
    ]
  }
};
