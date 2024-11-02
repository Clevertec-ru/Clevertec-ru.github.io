module.exports = {
    extends: [require.resolve('arui-presets-lint/eslint')],
    parserOptions: {
        project: ['./tsconfig.eslint.json', './tsconfig.json'],
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
};
