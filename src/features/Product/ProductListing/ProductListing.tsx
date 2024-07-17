import React from 'react';
import productmock from './product-mock.json';
import Header from '../../Header/Header';
import './ProductListing.css';
import ProductCard from './ProductCard/ProductCard';

const ProductListing: React.FC = () => {

    const products = productmock;

    const categories = ["Indoor Plants", "Outdoor Plants", "Best Sellers", "New Arrivals"]

    return (
        <>
            <Header />
            <div>
                {categories.map((category, index) => (
                    <div key={index} className="product-category">
                        <h2>{category}</h2>
                        <div className="product-list">
                            {products.map((product, index) => (
                                ((product.category.includes(category) && index < 6) && <ProductCard {...product} />)
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProductListing;