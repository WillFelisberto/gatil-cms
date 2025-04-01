import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';
import pluginReact from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  // 🔹 Ignora paths indesejados
  {
    ignores: [
      '**/node_modules/**',
      'coverage/**',
      '**/dist/**',
      '**/build/**',
      '**/.next/**',
      'app/\\(payload\\)/**',
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

  // 🔹 Regras gerais para arquivos TS/JS
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: globals.browser
    },
    plugins: {
      js,
      'simple-import-sort': simpleImportSort
    },
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
    },
    rules: {
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-alert': 'warn',
      'react/react-in-jsx-scope': 'off',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error'
    }
  },

  // 🔹 Regras específicas para arquivos de teste
  {
    files: ['**/*.test.{ts,tsx,js,jsx}'],
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { varsIgnorePattern: '^React$' }]
    }
  },

  // 🔹 Extensões base da linguagem + React + Import
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  importPlugin.flatConfigs.recommended
]);
