import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './features/LandingPage/LandingPage';
import ProductListing from './features/Product/ProductListing/ProductListing';
import ShoppingCart from './features/Product/ShoppingCart/ShoppingCart';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="product/list" element={<ProductListing/>} />
        <Route path="product/cart" element={<ShoppingCart/>} />
      </Routes>
    </HashRouter>
  );
};

export default App;