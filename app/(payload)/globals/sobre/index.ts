import { GlobalConfig } from 'payload';
import { checkRole } from '../../access/utils';

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
