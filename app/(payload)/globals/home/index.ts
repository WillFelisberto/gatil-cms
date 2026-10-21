import type { Field, GlobalConfig } from 'payload';
import { landingDefaults } from '@/lib/landingContent';
import { checkRole } from '../../access/utils';
import { PageBlocks } from '../../blocks';

const names = {
  hero: '01 · Destaque principal', shortcuts: '02 · Atalhos de ajuda', catalog: '03 · Catálogo dos gatos',
  about: '04 · Nossa história', sponsorship: '05 · Apadrinhamento', donationBanner: '06 · Chamada para doação',
  donations: '07 · PIX e formas de ajudar', adoption: '08 · Adoção responsável',
  volunteers: '09 · Nossa equipe', contact: '10 · Contato e encerramento'
} as const;

const fieldLabels: Record<string, string> = {
  firstTitle: 'Item 1 · Título', firstDescription: 'Item 1 · Descrição',
  secondTitle: 'Item 2 · Título', secondDescription: 'Item 2 · Descrição',
  thirdTitle: 'Item 3 · Título', thirdDescription: 'Item 3 · Descrição',
  primaryButton: 'Texto do botão principal', secondaryButton: 'Texto do botão secundário',
  button: 'Texto do botão', termsButton: 'Botão · Termos', policyButton: 'Botão · Política de adoção',
  fallbackDescription: 'Texto padrão da história (sem conteúdo rico)', titleEmphasis: 'Trecho destacado no título',
  eyebrow: 'Chamada acima do título', subtitle: 'Subtítulo', description: 'Descrição',
  imageAlt: 'Texto alternativo da imagem',
  adoptButton: 'Botão · Adotar', sponsorButton: 'Botão · Apadrinhar',
  allLabel: 'Filtro · Todos', adoptionLabel: 'Filtro · Adoção', sponsorLabel: 'Filtro · Apadrinhamento',
  singularResult: 'Resultado · Singular', pluralResult: 'Resultado · Plural',
  emptyMessage: 'Mensagem sem resultados', caption: 'Legenda abaixo do catálogo',
  featureOne: 'Benefício 1', featureTwo: 'Benefício 2',
  floatTitle: 'Cartão sobre a foto · Título', floatSubtitle: 'Cartão sobre a foto · Subtítulo',
  scrollText: 'Indicação para rolar a página', bottomText: 'Frase abaixo do destaque',
  note: 'Frase de apoio', noteHighlight: 'Frase de apoio em destaque',
  sticker: 'Selo da imagem', bankTitle: 'Título da transferência bancária', bankDescription: 'Descrição da transferência bancária',
  materialsTitle: 'Doação de materiais · Título', materialsDescription: 'Doação de materiais · Descrição',
  volunteersTitle: 'Voluntariado · Título', volunteersDescription: 'Voluntariado · Descrição',
  adoptionBadge: 'Selo · Disponível para adoção', sponsorBadge: 'Selo · Disponível para apadrinhar',
  catalogButton: 'Botão para ver os gatos', whatsappButton: 'Botão do WhatsApp',
  location: 'Localização', whatsappMessage: 'Mensagem inicial do WhatsApp'
};

const editorialGroups: Field[] = (Object.keys(landingDefaults) as (keyof typeof landingDefaults)[]).map(key => ({
  name: key,
  type: 'group',
  label: names[key],
  admin: { description: 'Os textos desta seção são exibidos diretamente na landing page.' },
  fields: Object.entries(landingDefaults[key]).map(([name, defaultValue]) => ({
    name,
    type: ['subtitle', 'description', 'fallbackDescription', 'caption', 'emptyMessage', 'note', 'about'].includes(name) || name.endsWith('Description') ? 'textarea' as const : 'text' as const,
    label: fieldLabels[name] || name.replace(/([A-Z])/g, ' $1'),
    defaultValue
  }))
}));

const Homepage: GlobalConfig = {
  slug: 'homepage',
  label: 'Conteúdo da Landing Page',
  admin: { group: 'Conteúdo do site', description: 'Edite aqui todos os textos e imagens editoriais da página única. Gatos são cadastrados em Gatos; PIX em Doações.' },
  access: {
    read: ({ req: { user } }) => (user ? checkRole('admin', user) : false),
    update: ({ req: { user } }) => (user ? checkRole('admin', user) : false)
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        { label: 'Destaque e catálogo', fields: [editorialGroups[0], {
          name: 'heroImage', label: 'Imagem do destaque', type: 'upload', relationTo: 'media',
          admin: { description: 'Substitui a imagem do hero. Se vazio, aproveita a imagem do layout antigo.' }
        }, editorialGroups[1], editorialGroups[2]] },
        { label: 'História e apadrinhamento', fields: [editorialGroups[3], {
          name: 'aboutImage', label: 'Fotografia sobre o projeto', type: 'upload', relationTo: 'media'
        }, {
          name: 'aboutDescription', label: 'História do projeto', type: 'richText',
          admin: { description: 'Texto rico desta seção. Enquanto estiver vazio, usa a descrição anterior de Sobre o projeto.' }
        }, editorialGroups[4]] },
        { label: 'Doações', fields: [editorialGroups[5], {
          name: 'donationImage', label: 'Fotografia da chamada para doação', type: 'upload', relationTo: 'media'
        }, editorialGroups[6]] },
        { label: 'Adoção, equipe e contato', fields: [editorialGroups[7], editorialGroups[8], editorialGroups[9]] },
        { label: 'Conteúdos complementares', fields: [
          { name: 'showComplementaryContent', type: 'checkbox', label: 'Exibir os blocos complementares na landing', defaultValue: false, admin: { description: 'Revise o material importado antes de ativar. Heros antigos não são exibidos para evitar seções duplicadas.' } },
          { name: 'legacyMigrationCompleted', type: 'checkbox', defaultValue: false, admin: { hidden: true, readOnly: true, description: 'Controle interno: importação do conteúdo das páginas antigas realizada.' } },
          { name: 'layout', label: 'Blocos importados e complementares', type: 'blocks', required: false, blocks: PageBlocks, admin: { description: 'Edite, reorganize ou exclua blocos migrados. Conteúdo das antigas páginas Adote, Apadrinhe, Contato e Colabore é importado por script sem apagar as fontes.' } }
        ] }
      ]
    },

  ]
};

export default Homepage;
