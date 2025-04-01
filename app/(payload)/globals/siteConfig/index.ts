import { GlobalConfig } from 'payload';

const SiteConfig: GlobalConfig = {
  slug: 'site-config',
  label: 'Configurações do Site',
  fields: [
    {
      name: 'tituloSite',
      label: 'Título do site',
      type: 'text',
      defaultValue: 'Gatil dos Resgatados'
    },
    {
      name: 'emailContato',
      label: 'Email de contato',
      type: 'email'
    },
    {
      name: 'redesSociais',
      label: 'Redes sociais',
      type: 'array',
      fields: [
        { name: 'nome', label: 'Nome da rede', type: 'text' },
        { name: 'url', label: 'URL da rede', type: 'text' }
      ]
    }
  ]
};

export default SiteConfig;
