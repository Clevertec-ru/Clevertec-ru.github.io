export const SPORT_OPTIONS = [
    { key: 'acrobatics', content: 'Акробатический рок-н-ролл' },
    { key: 'football', content: 'Футбол' },
    { key: 'basketball', content: 'Баскетбол' },
    { key: 'tennis', content: 'Теннис' },
    { key: 'volleyball', content: 'Волейбол' },
    { key: 'hockey', content: 'Хоккей' },
    { key: 'swimming', content: 'Плавание' },
    { key: 'athletics', content: 'Легкая атлетика' },
    { key: 'boxing', content: 'Бокс' },
    { key: 'gymnastics', content: 'Гимнастика' },
    { key: 'snowboarding', content: 'Сноуборд' },
    { key: 'golf', content: 'Гольф' },
    { key: 'rugby', content: 'Регби' },
];

export const PERIOD_OPTIONS = [
    { key: '6_months', content: '6 месяцев' },
    { key: '1_year', content: '1 год' },
    { key: '2_years', content: '2 года' },
    { key: '3_years', content: '3 года' },
];

export const sortedSportOptions = SPORT_OPTIONS.sort((a, b) => a.content.localeCompare(b.content));

export const GENDER_OPTIONS = [
    { key: '1', content: 'мужской' },
    { key: '2', content: 'женский' },
];

export const DOCUMENT_OPTIONS = [
    { key: '1', content: 'Паспорт РФ' },
    { key: '2', content: 'Свидетельство' },
];
