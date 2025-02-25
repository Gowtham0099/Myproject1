import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

function Order() {
    const navigate = useNavigate();
    const { clearCart } = useCart();

    useEffect(() => {
        setTimeout(() => {
            alert('Order Placed Successfully!');
            clearCart();
            navigate('/dashboard');
        }, 2000);
    }, [clearCart, navigate]);

    return (
        <div>
            <h1>Processing Order...</h1>
        </div>
    );
}

export default Order;