import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type ApplicationState } from '../root-reducer';
import { OfferFormState } from '~/types/offer-form-types';

export const initialState: OfferFormState = {
    insuranceFor: 'self',
    insuranceType: '',
    sportType: null,
    birthDate: '',
    startDate: '',
    period: null,
    errors: {},
    insuranceAmount: 0,
    cost: 0,
};

export const offerFormSlice = createSlice({
    name: 'offerForm',
    initialState,
    reducers: {
        setInsuranceFor: (state, action: PayloadAction<string>) => {
            state.insuranceFor = action.payload;
        },
        setInsuranceType: (state, action: PayloadAction<string>) => {
            state.insuranceType = action.payload;
        },
        setSportType: (state, action: PayloadAction<string | null>) => {
            state.sportType = action.payload;
        },
        setBirthDate: (state, action: PayloadAction<string>) => {
            state.birthDate = action.payload;
        },
        setStartDate: (state, action: PayloadAction<string>) => {
            state.startDate = action.payload;
        },
        setPeriod: (state, action: PayloadAction<string | null>) => {
            state.period = action.payload;
        },
        setInsuranceAmount: (state, action: PayloadAction<number>) => {
            state.insuranceAmount = action.payload;
        },
        setCost: (state, action: PayloadAction<number>) => {
            state.cost = action.payload;
        },
        setOfferFormErrors: (state, action: PayloadAction<Record<string, string>>) => {
            state.errors = { ...state.errors, ...action.payload };
        },
        resetOfferForm: (state) => {
            state.insuranceFor = '';
            state.insuranceType = '';
            state.sportType = null;
            state.birthDate = '';
            state.startDate = '';
            state.period = null;
            state.insuranceAmount = 0;
            state.cost = 0;
            state.errors = {};
        },
        setOfferForm: (state, { payload }: PayloadAction<OfferFormState>) => {
            Object.assign(state, payload);
        },
    },
    selectors: {
        insuranceAmountSelector: (state) => state.insuranceAmount,
    },
});

export const {
    setInsuranceFor,
    setInsuranceType,
    setSportType,
    setBirthDate,
    setStartDate,
    setPeriod,
    setInsuranceAmount,
    setCost,
    setOfferFormErrors,
    resetOfferForm,
    setOfferForm,
} = offerFormSlice.actions;

export const offerFormSelector = (state: ApplicationState) => state.offerForm;
export const { insuranceAmountSelector } = offerFormSlice.selectors;
export default offerFormSlice.reducer;
