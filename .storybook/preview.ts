import type { Preview } from '@storybook/react';
import '../styles/global.css';
const preview: Preview = {
  parameters: {
    nextjs: { appDirectory: true },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;
