
import { FaShoppingCart } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectCart } from '../cart/cartSlice';
import './Header.css';

const Header: React.FC = () => {

    const cart = useAppSelector(selectCart)
    const location = useLocation()
    return (
        <header>
            <div className="header">
                <h2><Link to="/" className="title">Paradise Nursery</Link></h2>
                <Link to="/product/cart" className="cart-link">
                    <FaShoppingCart />
                    <span>{cart.length > 0 ? cart.reduce((sum, {qty}) => sum + qty, 0) : 0}</span>
                </Link>
            </div>
        </header>
    );
}

export default Header;