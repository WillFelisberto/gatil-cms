import type { StorybookConfig } from '@storybook/experimental-nextjs-vite';
import svgr from 'vite-plugin-svgr';

const config: StorybookConfig = {
  stories: ['../app/[(]my-app[)]/components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    '@storybook/experimental-addon-test'
  ],
  framework: {
    name: '@storybook/experimental-nextjs-vite',
    options: {}
  },
  viteFinal: async (config) => {
    config.plugins = [
      ...(config.plugins || []),
      svgr({
        svgrOptions: { icon: true } // 👈 example of a valid property
      })
    ];
    return config;
  },
  staticDirs: ['../public']
};

export default config;
