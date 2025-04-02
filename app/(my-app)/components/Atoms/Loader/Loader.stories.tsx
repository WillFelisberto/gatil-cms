import type { Meta, StoryObj } from '@storybook/react';

import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
  title: 'Atoms/Loader',
  component: Loader,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  args: {}
};

export const WithText: Story = {
  args: {
    text: 'Carregando gatinhos adoráveis...'
  }
};
