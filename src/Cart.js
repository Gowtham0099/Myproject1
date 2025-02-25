import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

function Cart() {
    const navigate = useNavigate();
    const { cart } = useCart();

    return (
        <div>
            <h1>Shopping Cart</h1>
            {cart.length === 0 ? <p>Cart is empty</p> : 
                cart.map((item, index) => (
                    <div key={index}>
                        <h3>{item.title}</h3>
                        <h3>Name</h3>
                        
                        <input type='text'></input>
                        <h3>Address</h3>
                        <input type='text'></input>
                        <h3>Pincode</h3>
                        <input type='number'></input>
                        <h3>Phone number</h3>
                        <input type='number'></input>
                        
                        
                        <p>Price: ${item.price}</p>
                    </div>
                ))
            }
            {cart.length > 0 && <button onClick={() => navigate('/order')}>Proceed to Order</button>}
        </div>
    );
}

export default Cart;