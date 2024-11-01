import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<div> Start page</div>} />
            <Route path='/form' element={<div> Form</div>} />
            <Route path='/final' element={<div> Final page</div>} />
            <Route path='*' element={<div> Not Found</div>} />
        </Routes>
    </BrowserRouter>
);
