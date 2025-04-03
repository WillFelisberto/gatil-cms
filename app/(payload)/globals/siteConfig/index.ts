import { GlobalConfig } from 'payload';
import { checkRole } from '../../access/utils';

const SiteConfig: GlobalConfig = {
  slug: 'site-config',
  label: 'Configurações do Site',
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
      name: 'whatsapp',
      label: 'WhatsApp para contato',
      admin: {
        description: 'Número do WhatsApp utilizado no site para adoção/contato no geral',
        components: {
          Field: 'app/(payload)/components/fields/MaskedPhoneField',
          Cell: 'app/(payload)/components/fields/PhoneCell'
        }
      },
      type: 'text'
    },
    {
      name: 'links',
      label: 'Redes Sociais',
      type: 'array',
      labels: {
        singular: 'Rede Social',
        plural: 'Redes Sociais'
      },
      minRows: 1,
      fields: [
        {
          name: 'type',
          label: 'Tipo',
          type: 'select',
          required: true,
          options: [
            { label: 'Instagram', value: 'instagram' },
            { label: 'Facebook', value: 'facebook' },
            { label: 'TikTok', value: 'tiktok' }
          ]
        },
        {
          name: 'url',
          label: 'URL',
          type: 'text',
          required: true
        }
      ]
    }
  ]
};

export default SiteConfig;
