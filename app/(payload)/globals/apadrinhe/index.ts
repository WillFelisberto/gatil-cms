import { GlobalConfig } from 'payload';
import { checkRole } from '../../access/utils';

const Apadrinhe: GlobalConfig = {
  slug: 'apadrinhe',
  label: 'Página Apadrinhe',
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
      type: 'richText',
      required: true
    }
  ]
};

export default Apadrinhe;
