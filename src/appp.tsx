import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { FormPage } from './pages/form-page';

export const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<div> Start page</div>} />
            <Route path='/form' element={<FormPage />} />
            <Route path='/final' element={<div> Final page</div>} />
            <Route path='*' element={<div> Not Found</div>} />
        </Routes>
    </BrowserRouter>
);
