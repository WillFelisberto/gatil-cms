import { GlobalConfig } from 'payload';
import { checkRole } from '../../access/utils';

const Adote: GlobalConfig = {
  slug: 'adote',
  label: 'Página Adote',
  admin: {
    group: 'Site'
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
