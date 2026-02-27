import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';

export default defineConfig([
  js.configs.recommended,

  ...tseslint.configs.recommended,

  pluginReact.configs.flat.recommended,
  {
    files: ['**/*.{js,mjs,ts,mts,cts,jsx,tsx}'],
    settings: {
      react: {
        version: 'detect', // автоматически определяет версию React из node_modules
      },
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      unicorn: eslintPluginUnicorn,
    },
    rules: {
      'unicorn/better-regex': 'error',
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'none',
        },
      ],
      semi: 'error',
      'no-console': 'error',
      'no-debugger': 'error',
      quotes: ['error', 'single'],
      'comma-dangle': ['error', 'always-multiline'],
      'max-lines': ['warn', 250],
      'max-len': [
        'error',
        {
          code: 120,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreComments: true,
        },
      ],
    },
  },
]);
