import { GlobalConfig } from 'payload';
import { checkRole } from '../../access/utils';
import { GlobalTriggerVercelIfChanged } from '../../hooks/afterChange/globalTriggerVercelIfChanged';

const Contato: GlobalConfig = {
  slug: 'contato',
  label: 'Página de contato',
  admin: {
    group: 'Site'
  },
  hooks: {
    afterChange: [GlobalTriggerVercelIfChanged]
  },
  access: {
    read: ({ req: { user } }) => {
      return user ? checkRole('admin', user) : false;
    },
    update: ({ req: { user } }) => {
      return user ? checkRole('admin', user) : false;
    }
  },
  fields: [
    {
      name: 'descricao',
      label: 'Descrição',
      type: 'richText',
      required: true
    },
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

export default Contato;
