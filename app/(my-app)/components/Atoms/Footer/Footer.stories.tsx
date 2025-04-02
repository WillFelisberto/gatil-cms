import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Atoms/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Footer>;

const mockSocialLinks: { type: 'facebook' | 'instagram' | 'tiktok'; url: string }[] = [
  { type: 'facebook', url: 'https://facebook.com' },
  { type: 'instagram', url: 'https://instagram.com' },
  { type: 'tiktok', url: 'https://tiktok.com' }
];

const mockMenuItems = [
  { label: 'Início', href: '/' },
  { label: 'Apadrinhe', href: '/apadrinhe' },
  { label: 'Contato', href: '/contato' }
];

export const Default: Story = {
  args: {
    socialLinks: mockSocialLinks,
    menuItems: mockMenuItems
  }
};
