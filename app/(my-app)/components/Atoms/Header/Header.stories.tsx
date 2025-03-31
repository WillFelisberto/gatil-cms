import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta: Meta<typeof Header> = {
  title: "Atoms/Header", // Organização no painel do Storybook
  component: Header,
  parameters: {
    layout: "fullscreen", // Mostra em tela cheia
  },
  tags: ["autodocs"], // Permite geração automática de documentação
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {},
};
