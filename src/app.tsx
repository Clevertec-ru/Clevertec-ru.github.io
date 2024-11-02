import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { MainPage } from './pages/main-page';
import { Provider } from 'react-redux';
import { configureAppStore } from './configure-store';
import { FormPage } from './pages/form-page';
import { Modals } from '~/components/modals';
import { Roots } from '~/types/roots.ts';

const store = configureAppStore();

export const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path={Roots.MAIN} element={<MainPage />} />
                <Route path={Roots.FORM} element={<FormPage />} />
                <Route path={Roots.FINAL} element={<MainPage />} />
                <Route path={Roots.ERROR} element={<div> Not Found</div>} />
            </Routes>
            <Modals />
        </BrowserRouter>
    </Provider>
);
