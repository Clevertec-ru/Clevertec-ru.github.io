import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { StartPage } from './pages/start-page';

export const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<StartPage />} />
            <Route path='/form' element={<div> Form</div>} />
            <Route path='/final' element={<div> Final page</div>} />
            <Route path='*' element={<div> Not Found</div>} />
        </Routes>
    </BrowserRouter>
);
