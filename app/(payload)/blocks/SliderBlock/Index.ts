import { Block } from 'payload';

export const SliderBlock: Block = {
  slug: 'sliderBlock',
  labels: { singular: 'Slider', plural: 'Sliders' },
  fields: [
    {
      name: 'title',
      label: 'Título',
      type: 'text',
      required: true
    },
    {
      name: 'content',
      label: 'Texto',
      type: 'richText',
      required: true
    },
    {
      name: 'slides',
      type: 'array',
      label: 'Slides',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Titulo do slide',
          required: true
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Descrição'
        }
      ]
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
