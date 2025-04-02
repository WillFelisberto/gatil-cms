import type { Meta, StoryObj } from '@storybook/react';

import { VolunteerCard } from './VolunteerCard';

const meta: Meta<typeof VolunteerCard> = {
  title: 'Atoms/VolunteerCard',
  component: VolunteerCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
};

export default meta;
type Story = StoryObj<typeof VolunteerCard>;

export const Default: Story = {
  args: {
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'Maria Oliveira',
    phone: '(11) 91234-5678'
  }
};

export const WithoutPhone: Story = {
  args: {
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'Carlos Silva'
  }
};
