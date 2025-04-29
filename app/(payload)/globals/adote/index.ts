import { GlobalConfig } from 'payload';
import { checkRole } from '../../access/utils';
import { PageBlocks } from '../../blocks';

const Adote: GlobalConfig = {
  slug: 'adote',
  label: 'Página Adote',
  admin: {
    group: 'Site'
  },
  hooks: {},
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
      name: 'layout',
      type: 'blocks',
      required: true,
      blocks: PageBlocks
    }
  ]
};

export default Adote;
