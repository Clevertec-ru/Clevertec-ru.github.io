module.exports = {
    extends: require.resolve('arui-presets-lint/stylelint'),
    rules: {
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: ['global'],
            },
        ],
    },
    ignoreFiles: ['src/server/mocks/api/shared-ui/**/*.css'],
};
