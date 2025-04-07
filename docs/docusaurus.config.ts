import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import * as dotenv from 'dotenv';
dotenv.config();

const config: Config = {
  title: 'Gatil dos Resgatados',
  tagline: 'Documentação do Gatil CMS 🐱',
  favicon: 'img/favicon.ico',

  url:  process.env.SITEDOCS_URL || 'https://docs.gatildosresgatados.com', // seu domínio real aqui
  baseUrl: '/',

  organizationName: process.env.GITHUB_ORG || 'WillFelisberto',
  projectName: process.env.GITHUB_REPO || 'gatil-cms',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: `${process.env.GITHUB_REPO}/wiki`, // redireciona pra wiki se quiser editar lá
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png', // opcional, imagem de social sharing
    navbar: {
      title: 'Gatil CMS',
      logo: {
        alt: 'Logo do Gatil CMS',
        src: 'img/logo.webp', // troque pelo seu logo real
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentação',
        },
        {
          href: process.env.SITE_URL,
          label: 'Site',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links úteis',
          items: [
            {
              label: 'Documentação',
              to: '/docs/intro',
            },
            {
              label: 'GitHub',
              href: process.env.GITHUB_URL,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Gatil CMS.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
