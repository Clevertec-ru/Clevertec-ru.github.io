import { combineReducers } from 'redux';
import { OfferFormState } from '~/types/offer-form-types';
import offerFormReducer from './slices/offer-form';
import modalsReducer, { ModalState } from './slices/modals.ts';

export interface ApplicationState {
    offerForm: OfferFormState;
    modals: ModalState;
}

export const rootReducer = combineReducers({
    offerForm: offerFormReducer,
    modals: modalsReducer,
});

export default rootReducer;
