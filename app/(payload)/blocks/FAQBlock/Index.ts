import { Block } from 'payload';

export const FAQBlock: Block = {
  slug: 'faq',
  labels: {
    singular: 'FAQ',
    plural: 'FAQs'
  },
  fields: [
    {
      name: 'faq',
      label: 'Perguntas frequentes',
      type: 'array',
      fields: [
        {
          name: 'pergunta',
          label: 'Pergunta',
          type: 'text',
          required: true
        },
        {
          name: 'resposta',
          label: 'Resposta',
          type: 'textarea',
          required: true
        }
      ]
    }
  ]
};
