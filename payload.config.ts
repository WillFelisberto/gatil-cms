import sharp from 'sharp';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { buildConfig } from 'payload';
import Cats from 'app/(payload)/collections/cats';
import Adoptions from 'app/(payload)/collections/adoptions';
import Guardians from 'app/(payload)/collections/guardians';
import { Media } from 'app/(payload)/collections/media';
import Sponsorships from 'app/(payload)/collections/sponsorships';
import { pt } from '@payloadcms/translations/languages/pt';
import { activityLogPlugin } from '@payload-bites/activity-log';
import Users from 'app/(payload)/collections/users';
import { nodemailerAdapter } from '@payloadcms/email-nodemailer';
import CronLogs from 'app/(payload)/collections/cronLogs';
import SocialLinks from 'app/(payload)/collections/socialLinks';

export default buildConfig({
  editor: lexicalEditor(),
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: ' - Gatil dos Resgatados',
      description: 'Sistema do Gatil dos Resgatados',
      icons: [
        {
          rel: 'icon',
          type: 'image/png',
          url: '/public/favicon.ico'
        }
      ]
    }
  },

  collections: [Cats, Adoptions, Users, Guardians, Media, Sponsorships, CronLogs],
  globals: [SocialLinks],
  i18n: {
    fallbackLanguage: 'pt',
    supportedLanguages: {
      pt
    }
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
      defaultFromAddress: 'no-reply@gatildosresgatados.com.br',
      defaultFromName: 'Sistema do Gatil dos Resgatados',
      // Nodemailer transportOptions
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
    activityLogPlugin({
      access: {
        read: (args) => args.req.user?.role === 'admin'
      },
      collections: {
        cats: {
          enableCreateLogging: true,
          enableDeleteLogging: true,
          enableDeviceInfoLogging: true,
          enableIpAddressLogging: true,
          enableUpdateLogging: true
        },
        adoptions: {
          enableCreateLogging: true,
          enableDeleteLogging: true,
          enableDeviceInfoLogging: true,
          enableIpAddressLogging: true,
          enableUpdateLogging: true
        },
        guardians: {
          enableCreateLogging: true,
          enableDeleteLogging: true,
          enableDeviceInfoLogging: true,
          enableIpAddressLogging: true,
          enableUpdateLogging: true
        },
        sponsorships: {
          enableCreateLogging: true,
          enableDeleteLogging: true,
          enableDeviceInfoLogging: true,
          enableIpAddressLogging: true,
          enableUpdateLogging: true
        },
        users: {
          enableCreateLogging: true,
          enableDeleteLogging: true,
          enableDeviceInfoLogging: true,
          enableIpAddressLogging: true,
          enableUpdateLogging: true
        }
      },
      globals: {
        'social-links': {
          enableDeviceInfoLogging: true,
          enableIpAddressLogging: true
        }
      }
    })
  ],
  sharp
});
