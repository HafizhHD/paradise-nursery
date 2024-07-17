import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { CartItem, removeItem, deleteItem, selectCart } from './../../cart/cartSlice'
import ShoppingCard from './ShoppingCard/ShoppingCard';
import Header from '../../Header/Header';
import './ShoppingCart.css';
import { Link } from 'react-router-dom';

const ShoppingCart: React.FC = () => {

    const cartItems = useAppSelector(selectCart)

    const totalAmount = cartItems.reduce((sum, { price, qty }) => sum + price * qty, 0)

    return (
        <>
            <Header />
            <div className="shopping-cart">
                <h1>Total Cart Amount: ${totalAmount}</h1>
                {cartItems.length === 0 && <p>Your cart is empty</p>}
                {cartItems.map((item: CartItem) => (
                    <ShoppingCard name={item.name} price={item.price} image={item.image} qty={item.qty} />
                ))}
                <Link to="/product/list" className="shopping-cart-btn">Continue Shopping</Link>
                <button className="shopping-cart-btn" onClick={() => alert('Coming Soon!!!!!')}>Checkout</button>
            </div>
        </>
    );
};

export default ShoppingCart;