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
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.svg', '.json', '.css', '.scss', '.less']
        }
      }
    }
  },
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/coverage/',
      '**/.jest/',
      '**/build/**',
      '**/.next/**',
      'app/\\(payload\\)/**',
      'payload.config.ts',
      'prettier.config.js',
      'babel.config.cjs',
      'eslint.config.js',
      'vitest.setup.ts',
      'jest.setup.js',
      '.storybook/**',
      'next.config.mjs',
      'tailwind.config.js',
      'vitest.config.ts',
      '_templates/**'
    ]
  },
  {
    rules: {
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-alert': 'warn',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      ...importPlugin.configs.recommended.rules // <-- substitui o flatConfig para aplicar as regras corretamente
    }
  },
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      import: importPlugin // <-- registra o plugin manualmente
    }
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime']
]);
