import { Block } from 'payload';

export const Hero: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero',
    plural: 'Heros'
  },
  fields: [
    {
      name: 'title',
      label: 'Título',
      type: 'text',
      required: true
    },
    {
      name: 'subtitle',
      label: 'Subtítulo',
      type: 'textarea'
    },
    {
      name: 'backgroundImage',
      label: 'Imagem de fundo',
      type: 'upload',
      relationTo: 'media',
      required: true
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
