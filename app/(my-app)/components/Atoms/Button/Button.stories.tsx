import type { Meta, StoryObj } from '@storybook/react';
import { FaCat } from 'react-icons/fa';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    type: 'button'
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Dark: Story = {
  args: {
    children: 'Quem Somos',
    variant: 'dark',
    icon: <FaCat className="text-white" />,
    'data-testid': 'btn-dark'
  }
};

export const Light: Story = {
  args: {
    children: 'Apadrinhe',
    variant: 'light',
    icon: <FaCat className="text-white" />,
    'data-testid': 'btn-light'
  }
};

export const NoIcon: Story = {
  args: {
    children: 'Sem Ícone',
    variant: 'dark',
    'data-testid': 'btn-noicon'
  }
};
