import { combineReducers } from 'redux';
import { OfferFormState } from '~/types/offer-form-types';
import offerFormReducer from './slices/offer-form';
import modalsReducer, { ModalState } from './slices/modals.ts';
import appReducer, { AppSliceType } from '~/redux/slices/app-slice.ts';
import mockSlice, { MockType } from '~/redux/slices/mock-slice.ts';

export interface ApplicationState {
    offerForm: OfferFormState;
    modals: ModalState;
    app: AppSliceType;
    mock: MockType;
}

export const rootReducer = combineReducers({
    offerForm: offerFormReducer,
    modals: modalsReducer,
    app: appReducer,
    mock: mockSlice,
});

export default rootReducer;
