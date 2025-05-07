import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';


const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Register />} />
        </Routes>
    </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
