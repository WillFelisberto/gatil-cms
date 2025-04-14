import { Block } from 'payload';
import { NumberField } from '@nouance/payload-better-fields-plugin/Number';

export const ProductsBlock: Block = {
  slug: 'products',
  labels: {
    singular: 'Produto solidário',
    plural: 'Produtos solidários'
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Título da seção',
      defaultValue: 'Compre e ajude!',
      required: true
    },
    {
      name: 'products',
      type: 'array',
      label: 'Lista de Produtos',
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Nome do produto',
          required: true
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Descrição'
        },
        ...NumberField(
          {
            name: 'price',
            label: 'Preço (R$)',
            required: true
          },
          {
            prefix: 'R$ ',
            thousandSeparator: '.',
            decimalSeparator: ',',
            decimalScale: 2,
            fixedDecimalScale: true
          }
        ),
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true
        },
        {
          name: 'buyLink',
          type: 'text',
          label: 'Link do Mercado Pago',
          required: true
        }
      ]
    }
  ]
};
