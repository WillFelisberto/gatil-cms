import { GlobalConfig } from 'payload';
import { checkRole } from '../../access/utils';
import { GlobalTriggerVercelIfChanged } from '../../hooks/afterChange/globalTriggerVercelIfChanged';
import { PageBlocks } from '../../blocks';

const Homepage: GlobalConfig = {
  slug: 'homepage',
  label: 'Página Inicial',
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
      name: 'layout',
      type: 'blocks',
      required: true,
      blocks: PageBlocks
    }
  ]
};

export default Homepage;
