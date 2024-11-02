const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
    extends: [require.resolve('arui-presets-lint/eslint')],
    parserOptions: {
        project: ['./tsconfig.eslint.json', './cypress/tsconfig.json'],
    },
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: ['cypress/**/*.ts', '**/*.test.{ts,tsx,js,jsx}'],
            },
        ],
        'import/no-default-export': 'error',
        'import/no-cycle': 'off',
        'no-restricted-syntax': 'off',
        indent: 'off', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
    },
    ignorePatterns: ['coverage'],
});
