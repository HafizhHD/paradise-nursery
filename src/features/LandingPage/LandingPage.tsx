import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage: React.FC = () => {
    return (
        <div className="landing-page">
            <img className="landing-page-bg" src="https://images.stockcake.com/public/c/c/7/cc7c1ccc-258e-47f6-bab4-7c7ca1afa943/mystic-forest-serenity-stockcake.jpg" alt="Paradise Nursery" />
            <div className="landing-page-left">
                <h1>Welcome to Paradise Nursery</h1>
                <p>Where Green Meets Serenity</p>
                <Link to="/product/list" className="landing-page-btn">Get Started</Link>
            </div>
            <div className="landing-page-right">
                <h3>Welcome to Paradise Nursery, where green meets serenity!</h3>
                <p>At Paradise Nursery, we believe in providing our customers with not only high-quality plants but also expert guidance and care tips. Our team of knowledgeable plant enthusiasts is always ready to assist you in finding the perfect plant for your home or office. Whether you have specific requirements or need advice on plant care, we are here to help you make informed decisions and ensure that your plants thrive in their new environment.</p>
                <p>Shopping at Paradise Nursery is a delightful experience. Our nursery is thoughtfully designed to create a serene and inviting atmosphere, allowing you to immerse yourself in the beauty of nature. As you explore our aisles, you'll discover a wide range of plant varieties, each carefully curated to cater to different tastes and preferences. From trendy succulents to elegant orchids, we have something for everyone.</p>
                <p>Visit Paradise Nursery today and embark on a journey of greenery and tranquility. Let us help you transform your space into a lush oasis that brings joy and relaxation. Whether you're looking to add a touch of nature to your living room or create a peaceful ambiance in your office, our plants will surely exceed your expectations. Experience the beauty of Paradise Nursery and let nature inspire you.</p>
            </div>    
        </div>
    );
};

export default LandingPage;