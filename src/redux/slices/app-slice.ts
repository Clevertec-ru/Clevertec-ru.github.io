import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ApplicationState } from '~/redux/root-reducer.ts';

export type AppSliceType = {
    isVisa: boolean;
};

const initialState: AppSliceType = {
    isVisa: false,
};

export const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {
        setIsVisa: (state, { payload }: PayloadAction<boolean>) => {
            state.isVisa = payload;
        },
    },
});

export const { setIsVisa } = appSlice.actions;
export const visaSelector = (state: ApplicationState) => state.app;
export default appSlice.reducer;
