import { checkRole } from 'app/(payload)/access/utils';
import { CollectionConfig } from 'payload';
import { CollectionTriggerVercelIfChanged } from '../../hooks/afterChange/collectionTriggerVercelIfChanged';

const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    plural: 'Usuários',
    singular: 'Usuário'
  },
  auth: true, // 🔐 Ativa autenticação
  admin: {
    useAsTitle: 'name',
    group: 'Conteúdo'
  },
  hooks: {
    afterChange: [CollectionTriggerVercelIfChanged]
  },
  fields: [
    {
      name: 'name',
      label: 'Nome completo',
      type: 'text',
      required: true
    },

    {
      name: 'email',
      label: 'E-mail',
      type: 'email',
      required: true
    },

    {
      type: 'row', // required
      fields: [
        {
          name: 'telefone',
          label: 'Telefone',
          type: 'text',
          admin: {
            components: {
              Field: 'app/(payload)/components/fields/MaskedPhoneField',
              Cell: 'app/(payload)/components/fields/PhoneCell'
            }
          }
        },
        {
          name: 'showPhone',
          label: 'Exibir telefone na página de sobre',
          type: 'checkbox',
          defaultValue: true,
          admin: {
            style: {
              justifyContent: 'center'
            }
          }
        }
      ]
    },
    {
      name: 'photo',
      label: 'Foto',
      type: 'upload',
      relationTo: 'media'
    },
    {
      access: {
        read: () => true,
        update: ({ req: { user } }) => {
          return user ? checkRole('admin', user) : false;
        }
      },
      name: 'role',
      label: 'Cargo',
      type: 'select',
      required: true,
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Voluntário', value: 'voluntario' }
      ],
      defaultValue: 'voluntario'
    },
    {
      name: 'show',
      label: 'Exibir na página de sobre o projeto',
      type: 'checkbox',
      defaultValue: true
    },
    {
      name: 'emailUpdates',
      label: 'Enviar e-mails sobre novos apadrinhamentos e atualizações',
      type: 'checkbox',
      defaultValue: false
    }
  ]
};

export default Users;
