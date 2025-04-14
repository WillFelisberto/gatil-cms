import { GlobalConfig } from 'payload';
import { checkRole } from '../../access/utils';
import { GlobalTriggerVercelIfChanged } from '../../hooks/afterChange/globalTriggerVercelIfChanged';
import { PageBlocks } from '../../blocks';

const Colabore: GlobalConfig = {
  slug: 'colabore',
  label: 'Página Colabore',
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
    },
    {
      name: 'logobanco',
      label: 'Logo do banco',
      type: 'upload',
      relationTo: 'media',
      required: true
    },
    {
      name: 'qrcode',
      label: 'QR code do PIX',
      type: 'upload',
      relationTo: 'media',
      required: true
    }
  ]
};

export default Colabore;
