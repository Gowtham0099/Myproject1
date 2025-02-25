import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './CartContext';
import Login from './Login';
import Sigup from './Sigup';
import Dashboard from './Dashboard';
import View from './View';
import Cart from './Cart';
import Order from './Order';

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/Sigup' element={<Sigup />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/view' element={<View />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/order' element={<Order />} />
                </Routes> 
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;