import { GlobalConfig } from 'payload';
import { checkRole } from '../../access/utils';
import { GlobalTriggerVercelIfChanged } from '../../hooks/afterChange/globalTriggerVercelIfChanged';

const Sobre: GlobalConfig = {
  slug: 'sobre',
  label: 'Página Sobre o Projeto',
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
  hooks: {
    afterChange: [GlobalTriggerVercelIfChanged]
  },
  fields: [
    {
      name: 'imagem',
      label: 'Imagem',
      type: 'upload',
      relationTo: 'media'
    },
    {
      name: 'descricao',
      label: 'Descrição',
      type: 'richText'
    }
  ]
};

export default Sobre;
