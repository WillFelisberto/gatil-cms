import type { Meta, StoryObj } from '@storybook/react';
import { Plus } from 'lucide-react';

import { CopyButton } from './CopyButton';

const meta: Meta<typeof CopyButton> = {
  title: 'Atoms/CopyButton',
  component: CopyButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link']
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon']
    }
  },
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
    disabled: false
  }
};

export default meta;
type Story = StoryObj<typeof CopyButton>;

export const Default: Story = {
  args: {}
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Plus />
        Adicionar
      </>
    )
  }
};

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-3">
      <CopyButton {...args} variant="default">
        Default
      </CopyButton>
      <CopyButton {...args} variant="secondary">
        Secondary
      </CopyButton>
      <CopyButton {...args} variant="outline">
        Outline
      </CopyButton>
      <CopyButton {...args} variant="ghost">
        Ghost
      </CopyButton>
      <CopyButton {...args} variant="link">
        Link
      </CopyButton>
      <CopyButton {...args} variant="destructive">
        Destructive
      </CopyButton>
    </div>
  )
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <CopyButton {...args} size="sm">
        Small
      </CopyButton>
      <CopyButton {...args} size="default">
        Default
      </CopyButton>
      <CopyButton {...args} size="lg">
        Large
      </CopyButton>
      <CopyButton {...args} size="icon" aria-label="Icon CopyButton">
        <Plus />
      </CopyButton>
    </div>
  )
};
