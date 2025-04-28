import { Block } from 'payload';

export const ImageWithText: Block = {
  slug: 'imageWithText',
  dbName: 'img_pos',
  labels: { singular: 'Imagem com texto', plural: 'Imagens com texto' },
  fields: [
    {
      name: 'imagePosition',
      type: 'radio',
      label: 'Posição da imagem',
      options: [
        { label: 'Esquerda', value: 'left' },
        { label: 'Direita', value: 'right' }
      ],
      defaultValue: 'left'
    },
    {
      name: 'backgroundColor',
      type: 'radio',
      label: 'Cor de fundo',
      options: [
        { label: 'Escuro', value: 'dark' },
        { label: 'Claro', value: 'light' }
      ],
      defaultValue: 'light'
    },
    {
      name: 'image',
      label: 'Imagem',
      type: 'upload',
      relationTo: 'media',
      required: true
    },
    {
      name: 'title',
      label: 'Título',
      type: 'text'
    },
    {
      name: 'text',
      label: 'Texto',
      type: 'textarea'
    },
    {
      name: 'ctaText',
      type: 'text',
      label: 'Texto botão de ação',
      validate: (value: any, { siblingData }: { siblingData: Record<string, any> }) => {
        if (value && !siblingData.ctaLink) {
          return 'Você precisa informar o link do botão se preencher o texto.';
        }
        return true;
      }
    },
    {
      name: 'ctaLink',
      type: 'text',
      label: 'Link botão de ação',
      validate: (value: any, { siblingData }: { siblingData: Record<string, any> }) => {
        if (value && !siblingData.ctaText) {
          return 'Você precisa informar o texto do botão se preencher o link.';
        }
        return true;
      }
    }
  ]
};
