import { GlobalConfig } from 'payload';

const SocialLinks: GlobalConfig = {
  slug: 'social-links',
  label: 'Redes Sociais',
  access: {
    read: () => true,
    update: () => true
  },
  admin: {
    group: 'Site'
  },
  fields: [
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

export default SocialLinks;
