import { createSlice } from '@reduxjs/toolkit';

export type MockType = { [key: string]: string };

const initialState: MockType = {};

export const mockSlice = createSlice({
    name: 'mock',
    initialState,
    reducers: {
        setWithKid: (state) => {
            Object.assign(state, {
                email: 'test@mail.ru',
                phone: '+7 (901) 726-08-85',
                policy_fio: 'Иванов Иван Иванович',
                policy_doc: 'passport',
                policy_serial: '1234',
                policy_number: '123456',
                policy_gender: 'male',
                policy_place: 'г. Москва',
                policy_reg: 'г. Москва, ул. Пушкина 2/1',
                policy_fact: 'г. Москва, ул. Пушкина 2/1',
                policy_dob: '11.02.2022',
                insured_fio: 'Иванов Емельян Иванович',
                insured_doc: 'passport',
                insured_serial: '1234',
                insured_number: '123456',
                insured_gender: 'male',
                insured_reg: 'г. Москва, ул. Пушкина 2/1',
                insured_fact: 'г. Москва, ул. Пушкина 2/1',
                insured_dob: '11.02.2022',
                insured_place: 'г. Москва',
            });
        },
        setSelf: (state) => {
            Object.assign(state, {
                email: 'test@mail.ru',
                phone: '+7 (901) 726-08-85',
                policy_fio: 'Иванов Емельян Иванович',
                policy_doc: 'passport',
                policy_serial: '1234',
                policy_number: '123456',
                policy_dob: '11.02.2022',
                policy_gender: 'male',
                policy_place: 'г. Москва',
                policy_reg: 'г. Москва, ул. Пушкина 2/1',
                policy_fact: 'г. Москва, ул. Пушкина 2/1',
            });
        },
        clearData: () => initialState,
    },
    selectors: {
        bigFormSelector: (state) => state,
    },
});

export const { setWithKid, clearData, setSelf } = mockSlice.actions;
export const { bigFormSelector } = mockSlice.selectors;
export default mockSlice.reducer;
