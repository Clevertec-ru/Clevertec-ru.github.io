import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      'arui-presets-lint/eslint',
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Добавляем правила из вашего .eslintrc.js
      'import/no-default-export': 'error',
      'import/no-cycle': 'off',
      'no-restricted-syntax': 'off',
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: ['cypress/**/*.ts', '**/*.test.{ts,tsx,js,jsx}'],
        },
      ],
      'no-param-reassign': 'off',
      'no-return-assign': 'off',
      indent: 'off', // Если нужно
    },
    overrides: [
      {
        files: ['config/**/*.ts', 'src/global-definitions.d.ts', 'src/libs.d.ts'],
        rules: {
          'import/no-default-export': 'off',
        },
      },
      {
        files: ['src/server/mocks/**/*.ts'],
        rules: {
          '@typescript-eslint/no-var-requires': 'off',
        },
      },
      {
        files: ['src/redux/modules/*.ts'],
        rules: {
          'no-param-reassign': 'off',
          'no-return-assign': 'off',
          'import/no-default-export': 'off',
        },
      },
    ],
  },
);