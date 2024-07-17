import React from 'react';
import './ProductCard.css';
import { selectCart, addItem } from '../../../cart/cartSlice';
import { useAppSelector } from '../../../../app/hooks';
import { useAppDispatch } from '../../../../app/hooks';

interface ProductCardProps {
    name: string;
    description: string;
    price: number;
    image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, price, image }) => {

    const cart = useAppSelector(selectCart)
    const dispatch = useAppDispatch()

    return (
        <div className="product-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>${price}</p>
            { cart.some(value => value.name === name)
                ? <button className="product-card-btn-disabled" disabled>Added to Cart</button>
                : <button className="product-card-btn" onClick={() => dispatch(addItem({ name, price, image, qty: 1 }))}>Add to Cart</button>
            }
        </div>
    );
};

export default ProductCard;