import React from 'react';
import './ShoppingCard.css';
import { selectCart, removeItem, addItem, deleteItem, CartItem } from '../../../cart/cartSlice';
import { useAppSelector } from '../../../../app/hooks';
import { useAppDispatch } from '../../../../app/hooks';

const ShoppingCard: React.FC<CartItem> = ({ name, qty, price, image }) => {

    const cart = useAppSelector(selectCart)
    const dispatch = useAppDispatch()

    return (
        <div className="shopping-card">
            <img src={image} alt={name} />
            <div className="shopping-card-right">
                <h3>{name}</h3>
                <p>${price}</p>
                <div className="shopping-card-qty">
                    <button className="shopping-card-btn" onClick={() => qty === 1 ? dispatch(deleteItem(name)) : dispatch(removeItem(name))}>-</button>
                    <span> {qty} </span>
                    <button className="shopping-card-btn" onClick={() => dispatch(addItem({ name, price, image, qty: 1 }))}>+</button>
                </div>
                <p>Total: ${price * qty}</p>
                <button className="shopping-card-delete" onClick={() => dispatch(deleteItem(name))}>Delete</button>
            </div>
        </div>
    );
};

export default ShoppingCard;