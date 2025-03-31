import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { buildConfig } from "payload";
import Cats from "app/(payload)/collections/cats";
import Adoptions from "app/(payload)/collections/adoptions";
import Guardians from "app/(payload)/collections/guardians";
import { Media } from "app/(payload)/collections/media";
import Sponsorships from "app/(payload)/collections/sponsorships";
import { pt } from "@payloadcms/translations/languages/pt";
import { activityLogPlugin } from "@payload-bites/activity-log";
import Users from "app/(payload)/collections/users";

export default buildConfig({
  editor: lexicalEditor(),
  admin: {
    user: Users.slug,
  },

  collections: [Cats, Adoptions, Users, Guardians, Media, Sponsorships],
  i18n: {
    fallbackLanguage: "pt",
    supportedLanguages: {
      pt,
    },
  },

  localization: {
    defaultLocale: "pt",
    locales: ["pt"],
  },

  secret: process.env.PAYLOAD_SECRET || "",

  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  plugins: [
    activityLogPlugin({
      access: {
        read: (args) => args.req.user?.role === "admin",
      },
      collections: {
        cats: {
          enableCreateLogging: true,
          enableDeleteLogging: true,
          enableDeviceInfoLogging: true,
          enableIpAddressLogging: true,
          enableUpdateLogging: true,
        },
        adoptions: {
          enableCreateLogging: true,
          enableDeleteLogging: true,
          enableDeviceInfoLogging: true,
          enableIpAddressLogging: true,
          enableUpdateLogging: true,
        },
        guardians: {
          enableCreateLogging: true,
          enableDeleteLogging: true,
          enableDeviceInfoLogging: true,
          enableIpAddressLogging: true,
          enableUpdateLogging: true,
        },
        sponsorships: {
          enableCreateLogging: true,
          enableDeleteLogging: true,
          enableDeviceInfoLogging: true,
          enableIpAddressLogging: true,
          enableUpdateLogging: true,
        },
      },
      globals: {
        footer: {},
      },
    }),
  ],
  sharp,
});
