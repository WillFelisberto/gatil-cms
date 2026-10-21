/** Textos de apresentação da landing. Os valores servem apenas como fallback antes
 * da primeira publicação da configuração editorial no Payload. */
export const landingDefaults = {
  hero: {
    eyebrow: 'RESGATANDO VIDAS EM SOMBRIO · SC',
    title: 'Todo amor merece um lar.',
    subtitle: 'Cada gatinho resgatado carrega uma história. Você pode fazer parte do próximo capítulo.',
    primaryButton: 'Conheça nossos gatinhos',
    secondaryButton: 'Nossa história',
    note: 'Um lar, uma família, um novo começo.',
    noteHighlight: 'Cada vida importa.',
    floatTitle: 'Pequenos gestos',
    floatSubtitle: 'transformam vidas.',
    bottomText: 'Amor não se compra, se adota.',
    scrollText: 'Role para conhecer',
    imageAlt: 'Gatinho acolhido pelo projeto'
  },
  shortcuts: {
    firstTitle: 'Adote um amigo', firstDescription: 'Abra espaço para um novo amor.',
    secondTitle: 'Seja padrinho', secondDescription: 'Cuide mesmo à distância.',
    thirdTitle: 'Faça uma doação', thirdDescription: 'Todo gesto faz a diferença.'
  },
  catalog: {
    eyebrow: 'CONHEÇA NOSSOS RESGATADOS',
    title: 'Pequenas vidas,', titleEmphasis: 'grandes histórias.',
    description: 'Todos os nossos gatinhos em um só lugar. Alguns procuram uma família, outros também podem receber seu carinho por meio do apadrinhamento.',
    allLabel: 'Todos os gatinhos', adoptionLabel: 'Para adoção', sponsorLabel: 'Para apadrinhar',
    singularResult: 'gatinho encontrado', pluralResult: 'gatinhos encontrados',
    emptyMessage: 'Não há gatinhos com esse perfil neste momento. Experimente outro filtro! 🐾',
    caption: 'Os botões em cada perfil respeitam a disponibilidade configurada no nosso cadastro. As informações são atualizadas pela equipe do Gatil.',
    adoptButton: 'Quero adotar', sponsorButton: 'Apadrinhar', adoptionBadge: 'À espera de um lar', sponsorBadge: 'Recebendo padrinhos'
  },
  about: {
    eyebrow: 'NOSSA HISTÓRIA', title: 'Por trás de cada resgate, existe', titleEmphasis: 'muito amor.',
    fallbackDescription: 'Resgatamos e cuidamos de gatos em situação de vulnerabilidade, com o sonho de encontrar famílias para cada um deles.',
    featureOne: 'Cuidado responsável', featureTwo: 'Acolhimento com carinho',
    button: 'Faça parte dessa história', sticker: 'Feito de amor e coragem', imageAlt: 'História do Gatil dos Resgatados'
  },
  sponsorship: {
    eyebrow: 'CUIDE MESMO À DISTÂNCIA', title: 'Um carinho que', titleEmphasis: 'vai mais longe.',
    description: 'Nem todo mundo pode adotar, mas todo mundo pode fazer a diferença. Apadrinhando, você participa dos cuidados dos nossos resgatados.',
    button: 'Ver gatinhos para apadrinhar', termsButton: 'Conheça os termos',
    firstTitle: 'Escolha um gatinho', firstDescription: 'Os perfis disponíveis têm a opção de apadrinhar.',
    secondTitle: 'Ajude nos cuidados', secondDescription: 'Contribua com alimentação, saúde e bem-estar.',
    thirdTitle: 'Faça parte da história', thirdDescription: 'Seu apoio ajuda a dar continuidade ao resgate.'
  },
  donationBanner: {
    eyebrow: 'SUA AJUDA MUDA DESTINOS', title: 'Não é só uma doação.', titleEmphasis: 'É um novo começo.',
    description: 'Seu apoio contribui com alimentação, cuidados veterinários, medicamentos e um abrigo seguro para os resgatados.',
    button: 'Quero ajudar agora', note: 'Chaves PIX administradas pelo nosso CMS.',
    sticker: 'Cada vida vale a pena', imageAlt: 'Gatinho resgatado'
  },
  donations: {
    eyebrow: 'DOAR É TRANSFORMAR', title: 'Seu apoio faz', titleEmphasis: 'a diferença.',
    description: 'Você pode contribuir diretamente com as informações de doação cadastradas pela equipe.',
    bankTitle: 'Transferência bancária', bankDescription: 'Outra forma de apoiar nossos resgatados.',
    emptyMessage: 'Estamos atualizando as informações para doação. Entre em contato para saber como ajudar.',
    materialsTitle: 'Doe materiais', materialsDescription: 'Ração, areia, produtos de limpeza e outros itens ajudam muito.',
    volunteersTitle: 'Seja voluntário', volunteersDescription: 'Ajude no cuidado e na divulgação dos nossos resgatados.'
  },
  adoption: {
    eyebrow: 'ADOÇÃO CONSCIENTE', title: 'Um encontro que muda', titleEmphasis: 'duas vidas.',
    description: 'Adotar é um compromisso de cuidado e afeto para toda a vida.',
    firstTitle: 'Conheça os resgatados', firstDescription: 'Encontre um gatinho que combine com você e sua família.',
    secondTitle: 'Converse com a equipe', secondDescription: 'Entenda as necessidades do animal e as etapas de adoção.',
    thirdTitle: 'Ofereça um lar seguro', thirdDescription: 'Prepare sua casa para receber um novo membro na família.',
    policyButton: 'Leia nossa política de adoção'
  },
  volunteers: {
    eyebrow: 'PESSOAS QUE FAZEM A DIFERENÇA', title: 'Quem cuida com amor.',
    description: 'Conheça parte da equipe dedicada aos nossos resgatados.'
  },
  contact: {
    eyebrow: 'A GENTE PRECISA DE VOCÊ', title: 'A próxima história de amor', titleEmphasis: 'pode começar com você.',
    description: 'Quer adotar, apadrinhar, doar ou tirar dúvidas? Nossa equipe terá prazer em conversar.',
    catalogButton: 'Conhecer os gatinhos', whatsappButton: 'Falar no WhatsApp', location: 'Sombrio, Santa Catarina',
    whatsappMessage: 'Olá! Gostaria de conhecer melhor o Gatil dos Resgatados e ajudar o projeto.'
  }
};

export type LandingContent = {
  [K in keyof typeof landingDefaults]?: Partial<{ [P in keyof (typeof landingDefaults)[K]]: string | null }> | null
} & {
  heroImage?: unknown;
  aboutImage?: unknown;
  aboutDescription?: unknown;
  donationImage?: unknown;
  /** Campo legada, oculto no painel; permite preservar o hero antigo durante a transição. */
  layout?: Array<{ blockType?: string; title?: string; subtitle?: string; backgroundImage?: unknown }> | null;
};

export function resolveLandingContent(value: LandingContent | null | undefined) {
  const record = (value || {}) as Record<string, unknown>;
  const result: Record<string, Record<string, string>> = {};
  for (const group of Object.keys(landingDefaults) as (keyof typeof landingDefaults)[]) {
    const defaults = landingDefaults[group] as Record<string, string>;
    const stored = record[group] && typeof record[group] === 'object' ? record[group] as Record<string, unknown> : {};
    result[group] = {};
    for (const key of Object.keys(defaults)) {
      const v = stored[key];
      result[group][key] = typeof v === 'string' ? v : defaults[key];
    }
  }
  // Não ignorar um hero já preenchido no Payload antigo até o editor substituí-lo.
  const legacyHero = value?.layout?.find(block => block.blockType === 'hero');
  if (typeof value?.hero?.title !== 'string' && legacyHero?.title) result.hero.title = legacyHero.title;
  if (typeof value?.hero?.subtitle !== 'string' && legacyHero?.subtitle) result.hero.subtitle = legacyHero.subtitle;
  return result as { [K in keyof typeof landingDefaults]: { [P in keyof (typeof landingDefaults)[K]]: string } };
}

export const footerDefaults = {
  about: 'Cada resgate é uma nova chance. Com cuidado e carinho, ajudamos gatinhos a encontrar o lar que merecem.',
  exploreTitle: 'Explore', infoTitle: 'Informações', contactTitle: 'Vamos conversar?',
  contactDescription: 'Tem alguma dúvida ou quer ajudar? Estamos por aqui.', location: 'Sombrio, Santa Catarina',
  adoptionPolicyLabel: 'Política de adoção', sponsorshipTermsLabel: 'Termos de apadrinhamento', contactLabel: 'Fale com a gente',
  contactButton: 'Faça parte dessa história', copyright: 'Gatil dos Resgatados. Feito com amor pelos animais.',
  closingPhrase: 'Uma vida de cada vez.'
};

export const navigationDefaults = {
  home: 'Início', cats: 'Gatinhos', about: 'Sobre nós', sponsorship: 'Apadrinhamento',
  donate: 'Como ajudar', contact: 'Contato', donateButton: 'Fazer uma doação'
};

export function resolveLabelGroup<T extends Record<string, string>>(defaults: T, value: unknown): T {
  const stored = value && typeof value === 'object' ? value as Record<string, unknown> : {};
  return Object.fromEntries(Object.entries(defaults).map(([key, fallback]) => [key, typeof stored[key] === 'string' ? stored[key] : fallback])) as T;
}
