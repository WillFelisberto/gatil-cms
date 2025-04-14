import type { Meta, StoryObj } from '@storybook/react';

import type { BlockProps } from '@/app/(my-app)/types/block-props';

import { HeroComponent } from './HeroComponent';

const meta: Meta<typeof HeroComponent> = {
  title: 'Molecules/HeroComponent',
  component: HeroComponent,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    ctaText: { control: 'text' },
    ctaLink: { control: 'text' }
  }
};

export default meta;
type Story = StoryObj<typeof HeroComponent>;

export const Default: Story = {
  args: {
    title: 'Ajude um Gato Hoje',
    subtitle: 'Cada produto comprado ajuda um resgatado 🐾',
    ctaText: 'Conheça os produtos',
    ctaLink: '/produtos',
    backgroundImage: {
      url: '/cat-hero.jpg'
    },
    blockType: 'hero'
  } as BlockProps<'hero'>
};
