import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum ModalNames {
    EDIT_MODAL = 'EDIT_MODAL',
    GOSUSLUG = 'GOSUSLUG',
    INPUT_METHOD = 'INPUT_METHOD',
    NO_DATA = 'NO_DATA',
    PAYMENT = 'PAYMENT',
    PAYMENT_FRAME = 'PAYMENT_FRAME',
    PERMISSIONS = 'PERMISSIONS',
}
export type ModalState = { [K in ModalNames]: boolean };

const initialState: ModalState = {
    [ModalNames.EDIT_MODAL]: false,
    [ModalNames.GOSUSLUG]: false,
    [ModalNames.INPUT_METHOD]: false,
    [ModalNames.NO_DATA]: false,
    [ModalNames.PAYMENT]: true,
    [ModalNames.PAYMENT_FRAME]: false,
    [ModalNames.PERMISSIONS]: false,
};

const allClosed: ModalState = {
    [ModalNames.EDIT_MODAL]: false,
    [ModalNames.GOSUSLUG]: false,
    [ModalNames.INPUT_METHOD]: false,
    [ModalNames.NO_DATA]: false,
    [ModalNames.PAYMENT]: false,
    [ModalNames.PAYMENT_FRAME]: false,
    [ModalNames.PERMISSIONS]: false,
};

type SetModalPayload = {
    modal: keyof ModalState;
    isOpen: boolean;
};

export const modalSlice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        setModalOpen: (state, { payload }: PayloadAction<SetModalPayload>) => {
            Object.assign(state, allClosed);
            state[payload.modal] = payload.isOpen;
        },
    },
    selectors: {
        modalsSelector: (state) => state,
    },
});

export const { setModalOpen } = modalSlice.actions;
export const { modalsSelector } = modalSlice.selectors;
export default modalSlice.reducer;
