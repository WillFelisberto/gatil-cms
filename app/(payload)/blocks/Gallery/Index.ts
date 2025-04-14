import { Block } from 'payload';

export const Gallery: Block = {
  slug: 'gallery',
  labels: { singular: 'Galeria', plural: 'Galerias' },
  fields: [
    {
      name: 'images',
      label: 'Imagens',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          label: 'Imagem',
          relationTo: 'media',
          required: true
        },
        {
          name: 'caption',
          label: 'Legenda',
          type: 'text'
        }
      ]
    }
  ]
};
