import sharp from 'sharp';
import { buildConfig } from 'payload';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { nodemailerAdapter } from '@payloadcms/email-nodemailer';
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob';
import { pt } from '@payloadcms/translations/languages/pt';
import { activityLogPlugin } from '@payload-bites/activity-log';
import { importExportPlugin } from '@payloadcms/plugin-import-export';

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

// Util: configurações padrão de logging
const defaultLogging = {
  enableCreateLogging: true,
  enableDeleteLogging: true,
  enableDeviceInfoLogging: true,
  enableIpAddressLogging: true,
  enableUpdateLogging: true
};

const collectionsToLog = ['cats', 'adoptions', 'guardians', 'sponsorships', 'users'];
const globalsToLog = ['site-config', 'sobre', 'adote', 'contato', 'colabore', 'apadrinhe'];

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
  globals: [SiteConfig, Sobre, Adote, Contato, Colabore, Apadrinhe],

  i18n: {
    fallbackLanguage: 'pt',
    supportedLanguages: { pt }
  },

  localization: {
    defaultLocale: 'pt',
    locales: ['pt']
  },

  secret: process.env.PAYLOAD_SECRET || '',

  db: mongooseAdapter({
    url: process.env.DATABASE_URI || ''
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
    activityLogPlugin({
      access: {
        read: ({ req }) => req.user?.role === 'admin'
      },
      collections: Object.fromEntries(collectionsToLog.map((name) => [name, defaultLogging])),
      globals: Object.fromEntries(
        globalsToLog.map((name) => [
          name,
          {
            enableDeviceInfoLogging: true,
            enableIpAddressLogging: true
          }
        ])
      )
    })
  ],

  sharp
});
