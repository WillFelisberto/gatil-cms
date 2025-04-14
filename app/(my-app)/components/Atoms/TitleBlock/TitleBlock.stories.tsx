import type { Meta, StoryObj } from '@storybook/react';

import { TitleBlock } from './TitleBlock';

const meta: Meta<typeof TitleBlock> = {
  title: 'Atoms/TitleBlock',
  component: TitleBlock,
  tags: ['autodocs'],
  argTypes: {
    tag: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
    },
    alignment: {
      control: 'inline-radio',
      options: ['left', 'center', 'right']
    },
    showIcon: {
      control: 'boolean'
    },
    text: {
      control: 'text'
    },
    id: {
      control: 'text'
    }
  }
};

export default meta;
type Story = StoryObj<typeof TitleBlock>;

export const Default: Story = {
  args: {
    text: 'Título padrão',
    tag: 'h2',
    alignment: 'left',
    showIcon: false,
    blockType: 'title'
  }
};

export const WithIcon: Story = {
  args: {
    ...Default.args,
    text: 'Com ícone',
    showIcon: true
  }
};

export const Centered: Story = {
  args: {
    ...Default.args,
    text: 'Centralizado',
    alignment: 'center'
  }
};

export const H1Tag: Story = {
  args: {
    ...Default.args,
    text: 'Título H1',
    tag: 'h1'
  }
};
