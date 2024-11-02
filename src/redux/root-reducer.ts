import { combineReducers } from 'redux';
import { OfferFormState } from '~/types/offer-form-types';
import offerFormReducer from './slices/offer-form';
import modalReducer from './slices/modal';

export interface ApplicationState {
    offerForm: OfferFormState;
    modal: boolean;
}

export const rootReducer = combineReducers({
    offerForm: offerFormReducer,
    modal: modalReducer,
});

export default rootReducer;
