import { GlobalConfig } from 'payload';
import { checkRole } from '../../access/utils';

const PoliticaAdocao: GlobalConfig = {
  slug: 'politicaAdocao',
  label: 'Página Política de Adoção',
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

export default PoliticaAdocao;
