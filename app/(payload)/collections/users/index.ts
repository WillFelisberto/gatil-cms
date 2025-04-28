import { checkRole } from 'app/(payload)/access/utils';
import { CollectionConfig } from 'payload';
import { firstLoginTemplate } from '../../utils/firstLoginTemplate';
import { forgotPasswordTemplate } from '../../utils/forgotPasswordTemplate';
import afterForgotPasswordHook from '../../hooks/afterForgotPasswordHook';

const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    plural: 'Usuários',
    singular: 'Usuário'
  },
  auth: {
    maxLoginAttempts: 0,
    forgotPassword: {
      generateEmailSubject: (args) => {
        const { user } = args || {};

        if (user?.firstLogin) {
          return '🐱 Crie sua senha e ative seu acesso';
        }

        return '🔐 Redefinição de senha';
      },
      generateEmailHTML: (args) => {
        const { token, user } = args || {};

        const url = `${process.env.NEXT_PUBLIC_SITE_URL}/admin/reset/${token}`;
        return user.firstLogin
          ? firstLoginTemplate(user.name || '', url)
          : forgotPasswordTemplate(user.name || '', url);
      }
    }
  },
  admin: {
    useAsTitle: 'name',
    group: 'Conteúdo',
    defaultColumns: ['name', 'email', 'role']
  },
  hooks: {
    afterOperation: [
      async ({ operation, result, req }) => {
        if (operation === 'create') {
          try {
            await req.payload.forgotPassword({
              collection: 'users',
              data: {
                email: result.email
              },
              req
            });
          } catch (error) {
            console.error('Erro ao enviar e-mail de redefinição de senha:', error);
          }
        }
      }
    ],
    afterForgotPassword: [afterForgotPasswordHook],
    beforeChange: [
      ({ data, operation }) => {
        if (operation === 'create') {
          data.locked = false;
        }
        return data;
      }
    ]
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
      type: 'row',
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
    },
    {
      name: 'firstLogin',
      label: 'Primeiro acesso pendente?',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        hidden: true
      }
    }
  ]
};

export default Users;
