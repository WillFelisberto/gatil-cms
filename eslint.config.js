import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';
import pluginReact from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], languageOptions: { globals: globals.browser } },
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], plugins: { js }, extends: ['js/recommended'] },
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/.next/**',
      'app/\\(payload\\)/**',
      'app/[(]payload[)]/**',
      'payload.config.ts',
      'prettier.config.js',
      'babel.config.cjs',
      'eslint.config.js',
      'vitest.setup.ts',
      '.storybook/**',
      'next.config.mjs',
      'tailwind.config.js',
      'vitest.config.ts',
      '_templates/**'
    ]
  },
  {
    settings: {
      react: {
        version: 'detect'
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json'
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        }
      }
    }
  },
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-alert': 'warn',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error'
    }
  },
  {
    plugins: {
      'simple-import-sort': simpleImportSort
    }
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'], // Add this if you are using React 17+
  importPlugin.flatConfigs.recommended
]);
