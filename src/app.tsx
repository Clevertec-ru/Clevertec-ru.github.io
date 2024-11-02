import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { MainPage } from './pages/main-page';
import { Provider } from 'react-redux';
import { configureAppStore } from './configure-store';
const store = configureAppStore();

export const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/form' element={<div> Form</div>} />
                <Route path='/final' element={<MainPage />} />
                <Route path='*' element={<div> Not Found</div>} />
            </Routes>
        </BrowserRouter>
    </Provider>
);
