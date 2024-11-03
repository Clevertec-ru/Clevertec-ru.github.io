import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ApplicationState } from '~/redux/root-reducer.ts';

export type AppSliceType = {
    isVisa: boolean;
    email: string;
};

const initialState: AppSliceType = {
    isVisa: false,
    email: '',
};

export const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {
        setIsVisa: (state, { payload }: PayloadAction<boolean>) => {
            state.isVisa = payload;
        },
        setEmail: (state, { payload }: PayloadAction<string>) => {
            state.email = payload;
        },
    },
});

export const { setIsVisa, setEmail } = appSlice.actions;
export const visaSelector = (state: ApplicationState) => state.app.isVisa;
export const emailSelector = (state: ApplicationState) => state.app.email;
export default appSlice.reducer;
