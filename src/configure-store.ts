import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './redux/root-reducer';

export function configureAppStore() {
    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
        devTools: process.env.NODE_ENV !== 'production',
    });

    return store;
}
