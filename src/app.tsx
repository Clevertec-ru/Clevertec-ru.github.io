import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { StartPage } from './pages/start-page';
import { Provider } from 'react-redux';
import { configureAppStore } from './configure-store';
import { FormPage } from './pages/form-page';
import { Modals } from '~/components/modals';
const store = configureAppStore();

export const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<StartPage />} />
                <Route path='/form' element={<FormPage />} />
                <Route path='/final' element={<div> Final page</div>} />
                <Route path='*' element={<div> Not Found</div>} />
            </Routes>
            <Modals />
        </BrowserRouter>
    </Provider>
);
