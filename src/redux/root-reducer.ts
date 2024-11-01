import { combineReducers } from 'redux';
import { OfferFormState } from '~/types/offer-form-types';
import offerFormReducer from './slices/offer-form';

export interface ApplicationState {
    offerForm: OfferFormState;
}

export const rootReducer = combineReducers({
    offerForm: offerFormReducer,
});

export default rootReducer;
