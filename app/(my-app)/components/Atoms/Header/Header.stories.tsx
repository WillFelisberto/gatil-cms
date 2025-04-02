import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Atoms/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Header>;

const mockMenuItems = [
  { label: 'Início', href: '/' },
  { label: 'Apadrinhe', href: '/apadrinhe' },
  { label: 'Colabore', href: '/colabore' },
  { label: 'Contato', href: '/contato' },
  { label: 'Projeto', href: '/projeto' },
  { label: 'Adote', href: '/adote' }
];

export const Default: Story = {
  args: {
    menuItems: mockMenuItems
  }
};
