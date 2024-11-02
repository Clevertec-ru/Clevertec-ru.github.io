import { createSlice } from '@reduxjs/toolkit';
import { type ApplicationState } from '../root-reducer';

export const initialState: { isModalOpen: boolean } = {
    isModalOpen: false,
};

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state) => {
            state.isModalOpen = true;
        },
        closeModal: (state) => {
            state.isModalOpen = false;
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;

export const modalSelector = (state: ApplicationState) => state.modal;

export default modalSlice.reducer;
