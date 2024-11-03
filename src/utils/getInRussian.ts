export const getInRussian = (
    options: Array<{ key: string; content: string }>,
    key: string | null,
) => {
    const option = options.find((option) => option.key === key);
    return option ? option.content : key;
};
