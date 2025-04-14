import { Block } from 'payload';

export const TitleBlock: Block = {
  slug: 'title',
  labels: {
    singular: 'Título',
    plural: 'Títulos'
  },
  fields: [
    {
      name: 'text',
      type: 'text',
      required: true,
      label: 'Texto do título'
    },
    {
      name: 'tag',
      type: 'select',
      label: 'Tag HTML',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      defaultValue: 'h2',
      required: true
    },
    {
      name: 'alignment',
      type: 'select',
      label: 'Alinhamento do texto',
      options: [
        { label: 'Esquerda', value: 'left' },
        { label: 'Centro', value: 'center' },
        { label: 'Direita', value: 'right' }
      ],
      defaultValue: 'left',
      required: true
    },
    {
      name: 'showIcon',
      type: 'checkbox',
      label: 'Mostrar icone',
      defaultValue: false
    }
  ]
};
