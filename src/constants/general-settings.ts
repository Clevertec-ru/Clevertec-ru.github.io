export const GENERAL_SETTINGS = {
    COLUMNS_WIDTH: { mobile: 12, tablet: 12, desktop: 6 },
    ROW_GUTTER: { mobile: 8, tablet: 16, desktop: 24 },
    INPUT_PROPS: {
        size: 56 as const,
        block: true,
    },
    ROW_FULL_WIDTH: '12',
    FORM_PARAMETERS_PROPS: {
        disabled: true,
        block: true,
        view: 'transparent' as const,
    },
};

export const PHONE_MASK = [
    '+',
    '7',
    ' ',
    '(',
    /[1-9]/,
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
];
