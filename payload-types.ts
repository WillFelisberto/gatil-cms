/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * Supported timezones in IANA format.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "supportedTimezones".
 */
export type SupportedTimezones =
  | 'Pacific/Midway'
  | 'Pacific/Niue'
  | 'Pacific/Honolulu'
  | 'Pacific/Rarotonga'
  | 'America/Anchorage'
  | 'Pacific/Gambier'
  | 'America/Los_Angeles'
  | 'America/Tijuana'
  | 'America/Denver'
  | 'America/Phoenix'
  | 'America/Chicago'
  | 'America/Guatemala'
  | 'America/New_York'
  | 'America/Bogota'
  | 'America/Caracas'
  | 'America/Santiago'
  | 'America/Buenos_Aires'
  | 'America/Sao_Paulo'
  | 'Atlantic/South_Georgia'
  | 'Atlantic/Azores'
  | 'Atlantic/Cape_Verde'
  | 'Europe/London'
  | 'Europe/Berlin'
  | 'Africa/Lagos'
  | 'Europe/Athens'
  | 'Africa/Cairo'
  | 'Europe/Moscow'
  | 'Asia/Riyadh'
  | 'Asia/Dubai'
  | 'Asia/Baku'
  | 'Asia/Karachi'
  | 'Asia/Tashkent'
  | 'Asia/Calcutta'
  | 'Asia/Dhaka'
  | 'Asia/Almaty'
  | 'Asia/Jakarta'
  | 'Asia/Bangkok'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Tokyo'
  | 'Asia/Seoul'
  | 'Australia/Brisbane'
  | 'Australia/Sydney'
  | 'Pacific/Guam'
  | 'Pacific/Noumea'
  | 'Pacific/Auckland'
  | 'Pacific/Fiji';

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  blocks: {};
  collections: {
    cats: Cat;
    adoptions: Adoption;
    users: User;
    guardians: Guardian;
    media: Media;
    sponsorships: Sponsorship;
    cronLogs: CronLog;
    exports: Export;
    'activity-log': ActivityLog;
    'payload-jobs': PayloadJob;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    cats: CatsSelect<false> | CatsSelect<true>;
    adoptions: AdoptionsSelect<false> | AdoptionsSelect<true>;
    users: UsersSelect<false> | UsersSelect<true>;
    guardians: GuardiansSelect<false> | GuardiansSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    sponsorships: SponsorshipsSelect<false> | SponsorshipsSelect<true>;
    cronLogs: CronLogsSelect<false> | CronLogsSelect<true>;
    exports: ExportsSelect<false> | ExportsSelect<true>;
    'activity-log': ActivityLogSelect<false> | ActivityLogSelect<true>;
    'payload-jobs': PayloadJobsSelect<false> | PayloadJobsSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: string;
  };
  globals: {
    'site-config': SiteConfig;
    sobre: Sobre;
    adote: Adote;
    contato: Contato;
    colabore: Colabore;
    apadrinhe: Apadrinhe;
    politicaAdocao: PoliticaAdocao;
    politicaApadrinhamento: PoliticaApadrinhamento;
    homepage: Homepage;
  };
  globalsSelect: {
    'site-config': SiteConfigSelect<false> | SiteConfigSelect<true>;
    sobre: SobreSelect<false> | SobreSelect<true>;
    adote: AdoteSelect<false> | AdoteSelect<true>;
    contato: ContatoSelect<false> | ContatoSelect<true>;
    colabore: ColaboreSelect<false> | ColaboreSelect<true>;
    apadrinhe: ApadrinheSelect<false> | ApadrinheSelect<true>;
    politicaAdocao: PoliticaAdocaoSelect<false> | PoliticaAdocaoSelect<true>;
    politicaApadrinhamento: PoliticaApadrinhamentoSelect<false> | PoliticaApadrinhamentoSelect<true>;
    homepage: HomepageSelect<false> | HomepageSelect<true>;
  };
  locale: 'pt';
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: {
      createCollectionExport: TaskCreateCollectionExport;
      inline: {
        input: unknown;
        output: unknown;
      };
    };
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "cats".
 */
export interface Cat {
  id: string;
  nome: string;
  birthDate?: string | null;
  idade?: string | null;
  descricao?: string | null;
  sexo: 'M' | 'F';
  foto?: (string | null) | Media;
  galeria?:
    | {
        imagem?: (string | null) | Media;
        legenda?: string | null;
        id?: string | null;
      }[]
    | null;
  vacinas?:
    | {
        nome: string;
        data?: string | null;
        observacoes?: string | null;
        id?: string | null;
      }[]
    | null;
  vermifugacoes?:
    | {
        nome?: string | null;
        data?: string | null;
        observacoes?: string | null;
        id?: string | null;
      }[]
    | null;
  castrado?: boolean | null;
  doencas?: string | null;
  dataEntrada?: string | null;
  observacoesSaude?: string | null;
  adotado?: boolean | null;
  show?: boolean | null;
  disponivelParaApadrinhamento?: boolean | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
  sizes?: {
    thumbnail?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    card?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    tablet?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "adoptions".
 */
export interface Adoption {
  id: string;
  gato: string | Cat;
  tutor: string | Guardian;
  dataAdocao: string;
  observacoes?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "guardians".
 */
export interface Guardian {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  document?: string | null;
  endereco?: string | null;
  whatsapp?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  name: string;
  telefone?: string | null;
  showPhone?: boolean | null;
  photo?: (string | null) | Media;
  role: 'admin' | 'voluntario';
  show?: boolean | null;
  emailUpdates?: boolean | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "sponsorships".
 */
export interface Sponsorship {
  id: string;
  gato?: (string | Cat)[] | null;
  apadrinhaProjeto?: boolean | null;
  padrinho: string | Guardian;
  formaPagamento?: ('Pix' | 'Cartão' | 'Dinheiro') | null;
  valorMensal: 'R$ 29,90 (Básico)' | 'R$ 59,90 (Premium)' | 'R$ 99,90 (Master)';
  certificadoDigital?: boolean | null;
  visitas?: boolean | null;
  aceitaTermos: boolean;
  dataAtualizacao?: string | null;
  proximaAtualizacao?: string | null;
  /**
   * Marque para confirmar o pagamento.
   */
  ativo?: boolean | null;
  whatsapp?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "cronLogs".
 */
export interface CronLog {
  id: string;
  executadoEm?: string | null;
  totalVencidos?: number | null;
  emailEnviado?: boolean | null;
  mensagem?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "exports".
 */
export interface Export {
  id: string;
  name?: string | null;
  format: 'csv' | 'json';
  limit?: number | null;
  sort?: string | null;
  locale?: ('all' | 'pt') | null;
  drafts?: ('yes' | 'no') | null;
  selectionToUse?: ('currentSelection' | 'currentFilters' | 'all') | null;
  fields?: string[] | null;
  collectionSlug: string;
  where?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "activity-log".
 */
export interface ActivityLog {
  id: string;
  user?: {
    relationTo: 'users';
    value: string | User;
  } | null;
  operation?: ('create' | 'read' | 'update' | 'delete') | null;
  timestamp?: string | null;
  ipAddress?: string | null;
  deviceInfo?: string | null;
  locale?: string | null;
  resource?: string | null;
  documentId?: string | null;
  data?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-jobs".
 */
export interface PayloadJob {
  id: string;
  /**
   * Input data provided to the job
   */
  input?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  taskStatus?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  completedAt?: string | null;
  totalTried?: number | null;
  /**
   * If hasError is true this job will not be retried
   */
  hasError?: boolean | null;
  /**
   * If hasError is true, this is the error that caused it
   */
  error?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  /**
   * Task execution log
   */
  log?:
    | {
        executedAt: string;
        completedAt: string;
        taskSlug: 'inline' | 'createCollectionExport';
        taskID: string;
        input?:
          | {
              [k: string]: unknown;
            }
          | unknown[]
          | string
          | number
          | boolean
          | null;
        output?:
          | {
              [k: string]: unknown;
            }
          | unknown[]
          | string
          | number
          | boolean
          | null;
        state: 'failed' | 'succeeded';
        error?:
          | {
              [k: string]: unknown;
            }
          | unknown[]
          | string
          | number
          | boolean
          | null;
        id?: string | null;
      }[]
    | null;
  taskSlug?: ('inline' | 'createCollectionExport') | null;
  queue?: string | null;
  waitUntil?: string | null;
  processing?: boolean | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'cats';
        value: string | Cat;
      } | null)
    | ({
        relationTo: 'adoptions';
        value: string | Adoption;
      } | null)
    | ({
        relationTo: 'users';
        value: string | User;
      } | null)
    | ({
        relationTo: 'guardians';
        value: string | Guardian;
      } | null)
    | ({
        relationTo: 'media';
        value: string | Media;
      } | null)
    | ({
        relationTo: 'sponsorships';
        value: string | Sponsorship;
      } | null)
    | ({
        relationTo: 'cronLogs';
        value: string | CronLog;
      } | null)
    | ({
        relationTo: 'exports';
        value: string | Export;
      } | null)
    | ({
        relationTo: 'activity-log';
        value: string | ActivityLog;
      } | null)
    | ({
        relationTo: 'payload-jobs';
        value: string | PayloadJob;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "cats_select".
 */
export interface CatsSelect<T extends boolean = true> {
  nome?: T;
  birthDate?: T;
  idade?: T;
  descricao?: T;
  sexo?: T;
  foto?: T;
  galeria?:
    | T
    | {
        imagem?: T;
        legenda?: T;
        id?: T;
      };
  vacinas?:
    | T
    | {
        nome?: T;
        data?: T;
        observacoes?: T;
        id?: T;
      };
  vermifugacoes?:
    | T
    | {
        nome?: T;
        data?: T;
        observacoes?: T;
        id?: T;
      };
  castrado?: T;
  doencas?: T;
  dataEntrada?: T;
  observacoesSaude?: T;
  adotado?: T;
  show?: T;
  disponivelParaApadrinhamento?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "adoptions_select".
 */
export interface AdoptionsSelect<T extends boolean = true> {
  gato?: T;
  tutor?: T;
  dataAdocao?: T;
  observacoes?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  name?: T;
  telefone?: T;
  showPhone?: T;
  photo?: T;
  role?: T;
  show?: T;
  emailUpdates?: T;
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "guardians_select".
 */
export interface GuardiansSelect<T extends boolean = true> {
  nome?: T;
  email?: T;
  telefone?: T;
  document?: T;
  endereco?: T;
  whatsapp?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
  sizes?:
    | T
    | {
        thumbnail?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        card?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        tablet?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
      };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "sponsorships_select".
 */
export interface SponsorshipsSelect<T extends boolean = true> {
  gato?: T;
  apadrinhaProjeto?: T;
  padrinho?: T;
  formaPagamento?: T;
  valorMensal?: T;
  certificadoDigital?: T;
  visitas?: T;
  aceitaTermos?: T;
  dataAtualizacao?: T;
  proximaAtualizacao?: T;
  ativo?: T;
  whatsapp?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "cronLogs_select".
 */
export interface CronLogsSelect<T extends boolean = true> {
  executadoEm?: T;
  totalVencidos?: T;
  emailEnviado?: T;
  mensagem?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "exports_select".
 */
export interface ExportsSelect<T extends boolean = true> {
  name?: T;
  format?: T;
  limit?: T;
  sort?: T;
  locale?: T;
  drafts?: T;
  selectionToUse?: T;
  fields?: T;
  collectionSlug?: T;
  where?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "activity-log_select".
 */
export interface ActivityLogSelect<T extends boolean = true> {
  user?: T;
  operation?: T;
  timestamp?: T;
  ipAddress?: T;
  deviceInfo?: T;
  locale?: T;
  resource?: T;
  documentId?: T;
  data?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-jobs_select".
 */
export interface PayloadJobsSelect<T extends boolean = true> {
  input?: T;
  taskStatus?: T;
  completedAt?: T;
  totalTried?: T;
  hasError?: T;
  error?: T;
  log?:
    | T
    | {
        executedAt?: T;
        completedAt?: T;
        taskSlug?: T;
        taskID?: T;
        input?: T;
        output?: T;
        state?: T;
        error?: T;
        id?: T;
      };
  taskSlug?: T;
  queue?: T;
  waitUntil?: T;
  processing?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "site-config".
 */
export interface SiteConfig {
  id: string;
  /**
   * Número do WhatsApp utilizado no site para adoção/contato no geral
   */
  whatsapp?: string | null;
  links?:
    | {
        type: 'instagram' | 'facebook' | 'tiktok';
        url: string;
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "sobre".
 */
export interface Sobre {
  id: string;
  imagem?: (string | null) | Media;
  descricao?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    /**
     * Maximum upload file size: 12MB. Recommended file size for images is <500KB.
     */
    image?: (string | null) | Media;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "adote".
 */
export interface Adote {
  id: string;
  descricao?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    /**
     * Maximum upload file size: 12MB. Recommended file size for images is <500KB.
     */
    image?: (string | null) | Media;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contato".
 */
export interface Contato {
  id: string;
  descricao: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  faq?:
    | {
        pergunta: string;
        resposta: string;
        id?: string | null;
      }[]
    | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    /**
     * Maximum upload file size: 12MB. Recommended file size for images is <500KB.
     */
    image?: (string | null) | Media;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "colabore".
 */
export interface Colabore {
  id: string;
  imagem: string | Media;
  descricao: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  logobanco: string | Media;
  qrcode: string | Media;
  meta?: {
    title?: string | null;
    description?: string | null;
    /**
     * Maximum upload file size: 12MB. Recommended file size for images is <500KB.
     */
    image?: (string | null) | Media;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "apadrinhe".
 */
export interface Apadrinhe {
  id: string;
  descricao: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  meta?: {
    title?: string | null;
    description?: string | null;
    /**
     * Maximum upload file size: 12MB. Recommended file size for images is <500KB.
     */
    image?: (string | null) | Media;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "politicaAdocao".
 */
export interface PoliticaAdocao {
  id: string;
  descricao?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    /**
     * Maximum upload file size: 12MB. Recommended file size for images is <500KB.
     */
    image?: (string | null) | Media;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "politicaApadrinhamento".
 */
export interface PoliticaApadrinhamento {
  id: string;
  descricao?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    /**
     * Maximum upload file size: 12MB. Recommended file size for images is <500KB.
     */
    image?: (string | null) | Media;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "homepage".
 */
export interface Homepage {
  id: string;
  layout: (
    | {
        title: string;
        subtitle?: string | null;
        backgroundImage: string | Media;
        ctaText?: string | null;
        ctaLink?: string | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'hero';
      }
    | {
        images?:
          | {
              image: string | Media;
              caption?: string | null;
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'gallery';
      }
    | {
        content: {
          root: {
            type: string;
            children: {
              type: string;
              version: number;
              [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            version: number;
          };
          [k: string]: unknown;
        };
        id?: string | null;
        blockName?: string | null;
        blockType: 'textBlock';
      }
    | {
        imagePosition?: ('left' | 'right') | null;
        backgroundColor?: ('dark' | 'light') | null;
        image: string | Media;
        title?: string | null;
        text?: string | null;
        ctaText?: string | null;
        ctaLink?: string | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'imageWithText';
      }
    | {
        text: string;
        tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
        alignment: 'left' | 'center' | 'right';
        showIcon?: boolean | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'title';
      }
    | {
        title: string;
        products?:
          | {
              name: string;
              description?: string | null;
              price: number;
              image: string | Media;
              buyLink: string;
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'products';
      }
  )[];
  meta?: {
    title?: string | null;
    description?: string | null;
    /**
     * Maximum upload file size: 12MB. Recommended file size for images is <500KB.
     */
    image?: (string | null) | Media;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "site-config_select".
 */
export interface SiteConfigSelect<T extends boolean = true> {
  whatsapp?: T;
  links?:
    | T
    | {
        type?: T;
        url?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "sobre_select".
 */
export interface SobreSelect<T extends boolean = true> {
  imagem?: T;
  descricao?: T;
  meta?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "adote_select".
 */
export interface AdoteSelect<T extends boolean = true> {
  descricao?: T;
  meta?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contato_select".
 */
export interface ContatoSelect<T extends boolean = true> {
  descricao?: T;
  faq?:
    | T
    | {
        pergunta?: T;
        resposta?: T;
        id?: T;
      };
  meta?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "colabore_select".
 */
export interface ColaboreSelect<T extends boolean = true> {
  imagem?: T;
  descricao?: T;
  logobanco?: T;
  qrcode?: T;
  meta?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "apadrinhe_select".
 */
export interface ApadrinheSelect<T extends boolean = true> {
  descricao?: T;
  meta?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "politicaAdocao_select".
 */
export interface PoliticaAdocaoSelect<T extends boolean = true> {
  descricao?: T;
  meta?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "politicaApadrinhamento_select".
 */
export interface PoliticaApadrinhamentoSelect<T extends boolean = true> {
  descricao?: T;
  meta?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "homepage_select".
 */
export interface HomepageSelect<T extends boolean = true> {
  layout?:
    | T
    | {
        hero?:
          | T
          | {
              title?: T;
              subtitle?: T;
              backgroundImage?: T;
              ctaText?: T;
              ctaLink?: T;
              id?: T;
              blockName?: T;
            };
        gallery?:
          | T
          | {
              images?:
                | T
                | {
                    image?: T;
                    caption?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        textBlock?:
          | T
          | {
              content?: T;
              id?: T;
              blockName?: T;
            };
        imageWithText?:
          | T
          | {
              imagePosition?: T;
              backgroundColor?: T;
              image?: T;
              title?: T;
              text?: T;
              ctaText?: T;
              ctaLink?: T;
              id?: T;
              blockName?: T;
            };
        title?:
          | T
          | {
              text?: T;
              tag?: T;
              alignment?: T;
              showIcon?: T;
              id?: T;
              blockName?: T;
            };
        products?:
          | T
          | {
              title?: T;
              products?:
                | T
                | {
                    name?: T;
                    description?: T;
                    price?: T;
                    image?: T;
                    buyLink?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
      };
  meta?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "TaskCreateCollectionExport".
 */
export interface TaskCreateCollectionExport {
  input: {
    name?: string | null;
    format: 'csv' | 'json';
    limit?: number | null;
    sort?: string | null;
    locale?: ('all' | 'pt') | null;
    drafts?: ('yes' | 'no') | null;
    selectionToUse?: ('currentSelection' | 'currentFilters' | 'all') | null;
    fields?: string[] | null;
    collectionSlug: string;
    where?:
      | {
          [k: string]: unknown;
        }
      | unknown[]
      | string
      | number
      | boolean
      | null;
    user?: string | null;
    userCollection?: string | null;
    exportsCollection?: string | null;
  };
  output: {
    success?: boolean | null;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}