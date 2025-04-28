import sharp from 'sharp';
import { buildConfig } from 'payload';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { nodemailerAdapter } from '@payloadcms/email-nodemailer';
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob';
import { pt } from '@payloadcms/translations/languages/pt';
import { importExportPlugin } from '@payloadcms/plugin-import-export';
import { seoPlugin } from '@payloadcms/plugin-seo';
import { sqliteAdapter } from '@payloadcms/db-sqlite';

// Collections
import Cats from 'app/(payload)/collections/cats';
import Adoptions from 'app/(payload)/collections/adoptions';
import Guardians from 'app/(payload)/collections/guardians';
import Users from 'app/(payload)/collections/users';
import { Media } from 'app/(payload)/collections/media';
import Sponsorships from 'app/(payload)/collections/sponsorships';
import CronLogs from 'app/(payload)/collections/cronLogs';

// Globals
import SiteConfig from 'app/(payload)/globals/siteConfig';
import Sobre from './app/(payload)/globals/sobre';
import Adote from './app/(payload)/globals/adote';
import Contato from './app/(payload)/globals/contato';
import Colabore from './app/(payload)/globals/colabore';
import Apadrinhe from './app/(payload)/globals/apadrinhe';
import PoliticaAdocao from './app/(payload)/globals/politica';
import PoliticaApadrinhamento from './app/(payload)/globals/politicaApadrinhamento';
import Homepage from './app/(payload)/globals/home';

const globalsToLog = [
  'site-config',
  'sobre',
  'adote',
  'contato',
  'colabore',
  'apadrinhe',
  'politicaAdocao',
  'homepage',
  'politicaApadrinhamento'
];

const globalsWithSeo = globalsToLog.filter((name) => name !== 'site-config');

export default buildConfig({
  editor: lexicalEditor(),

  admin: {
    // Removed invalid webpack property as it is not supported in the admin object
    user: Users.slug,
    components: {
      graphics: {
        Icon: './app/(payload)/components/graphics/Icon',
        Logo: './app/(payload)/components/graphics/Logo'
      }
    },
    meta: {
      titleSuffix: ' - Gatil dos Resgatados',
      description: 'Sistema do Gatil dos Resgatados',
      icons: [
        {
          rel: 'icon',
          type: 'image/png',
          url: '/favicon.ico'
        }
      ]
    }
  },

  collections: [Cats, Adoptions, Users, Guardians, Media, Sponsorships, CronLogs],
  globals: [
    SiteConfig,
    Sobre,
    Adote,
    Contato,
    Colabore,
    Apadrinhe,
    PoliticaAdocao,
    PoliticaApadrinhamento,
    Homepage
  ],

  i18n: {
    fallbackLanguage: 'pt',
    supportedLanguages: { pt }
  },

  localization: {
    defaultLocale: 'pt',
    locales: ['pt']
  },

  secret: process.env.PAYLOAD_SECRET || '',

  db: sqliteAdapter({
    migrationDir: './app/(payload)/migrations',
    client: {
      url: process.env.DATABASE_URL || '',
      authToken: process.env.DATABASE_AUTH_TOKEN
    }
  }),

  ...(process.env.PAYLOAD_SMTP_USER && {
    email: nodemailerAdapter({
      defaultFromAddress: 'no-reply@gatildosresgatados.com',
      defaultFromName: 'Sistema do Gatil dos Resgatados',
      transportOptions: {
        host: process.env.PAYLOAD_SMTP_HOST,
        port: process.env.PAYLOAD_SMTP_PORT,
        auth: {
          user: process.env.PAYLOAD_SMTP_USER,
          pass: process.env.PAYLOAD_SMTP_PASS
        }
      }
    })
  }),

  plugins: [
    ...(process.env.BLOB_READ_WRITE_TOKEN
      ? [
          vercelBlobStorage({
            collections: {
              [Media.slug]: true
            },
            token: process.env.BLOB_READ_WRITE_TOKEN
          })
        ]
      : []),

    importExportPlugin({
      collections: ['cats', 'adoptions', 'guardians', 'sponsorships'],
      disableJobsQueue: true
    }),

    seoPlugin({
      globals: globalsWithSeo,
      uploadsCollection: 'media',
      tabbedUI: true
    })
  ],

  sharp
});
