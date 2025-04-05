import { GlobalConfig } from 'payload';
import { checkRole } from '../../access/utils';
import { GlobalTriggerVercelIfChanged } from '../../hooks/afterChange/globalTriggerVercelIfChanged';

const Adote: GlobalConfig = {
  slug: 'adote',
  label: 'Página Adote',
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
      type: 'richText'
    }
  ]
};

export default Adote;
