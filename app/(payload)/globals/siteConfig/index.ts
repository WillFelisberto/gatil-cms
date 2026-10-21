import { GlobalConfig } from 'payload';
import { checkRole } from '../../access/utils';
import { footerDefaults, navigationDefaults } from '@/lib/landingContent';

const navigationLabels: Record<string, string> = {
  home: 'Início',
  cats: 'Gatinhos',
  about: 'Sobre nós',
  sponsorship: 'Apadrinhamento',
  donate: 'Como ajudar',
  contact: 'Contato',
  donateButton: 'Botão de doação no cabeçalho'
};
const footerLabels: Record<string, string> = {
  about: 'Descrição do Gatil',
  exploreTitle: 'Título dos links',
  infoTitle: 'Título das informações',
  contactTitle: 'Título do contato',
  contactDescription: 'Descrição do contato',
  location: 'Localização',
  adoptionPolicyLabel: 'Política de adoção',
  sponsorshipTermsLabel: 'Termos de apadrinhamento',
  contactLabel: 'Contato',
  contactButton: 'Botão principal do rodapé',
  copyright: 'Texto dos direitos autorais',
  closingPhrase: 'Frase de encerramento'
};

const SiteConfig: GlobalConfig = {
  slug: 'site-config',
  label: 'Configurações do Site',
  admin: {
    group: 'Conteúdo do site'
  },
  hooks: {},
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
      type: 'collapsible',
      label: 'Navegação do site',
      fields: [
        {
          name: 'navigation',
          type: 'group',
          label: 'Textos do menu e botão de doação',
          fields: Object.entries(navigationDefaults).map(([name, defaultValue]) => ({
            name,
            type: 'text' as const,
            label: navigationLabels[name],
            defaultValue
          }))
        }
      ]
    },
    {
      type: 'collapsible',
      label: 'Rodapé do site',
      fields: [
        {
          name: 'footer',
          type: 'group',
          label: 'Textos do rodapé',
          fields: Object.entries(footerDefaults).map(([name, defaultValue]) => ({
            name,
            type:
              name === 'about' || name === 'contactDescription'
                ? ('textarea' as const)
                : ('text' as const),
            label: footerLabels[name],
            defaultValue
          }))
        }
      ]
    },
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
