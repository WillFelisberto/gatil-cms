import { Block } from 'payload';

export const TextBlock: Block = {
  slug: 'textBlock',
  labels: { singular: 'Texto', plural: 'Textos' },
  fields: [
    {
      name: 'content',
      label: 'Texto',
      type: 'richText',
      required: true
    }
  ]
};
