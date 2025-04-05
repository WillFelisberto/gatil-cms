import { GlobalConfig } from 'payload';
import { checkRole } from '../../access/utils';
import { GlobalTriggerVercelIfChanged } from '../../hooks/afterChange/globalTriggerVercelIfChanged';

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
      name: 'imagem',
      label: 'Imagem',
      type: 'upload',
      relationTo: 'media',
      required: true
    },
    {
      name: 'descricao',
      label: 'Descrição',
      type: 'richText',
      required: true
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
