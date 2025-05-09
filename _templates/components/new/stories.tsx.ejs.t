---
to: app/(my-app)/components/<%= h.changeCase.pascal(componentType) %>/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.stories.tsx
---
import type { Meta, StoryObj } from '@storybook/react';
import { <%= h.changeCase.pascal(name) %> } from './<%= h.changeCase.pascal(name) %>';

const meta: Meta<typeof <%= h.changeCase.pascal(name) %>> = {
  title: '<%= h.changeCase.pascal(componentType) %>/<%= h.changeCase.pascal(name) %>', 
  component: <%= h.changeCase.pascal(name) %>,
   tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof <%= h.changeCase.pascal(name) %>>;

export const Default: Story = {
  args: {},
};
