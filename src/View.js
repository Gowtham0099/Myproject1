import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
// import "./View.css";
function View() {
    const location = useLocation();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const product = location.state;

    if (!product) {
        return <p>No product details available.</p>;
    }

    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <h3>Price: ${product.price}</h3>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <button onClick={() => navigate('/cart')}>Go to Cart</button>
        </div>
    );
}

export default View;