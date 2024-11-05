import { useState } from 'react';
import './Header.css';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import Search from '../Search/Search';
import PropTypes from 'prop-types';
import Cart from '../Cart/Cart';
import cartIcon from '../../../public/cart-icon.png'; 

export default function Header({ cartItems, onRemoveFromCart }) {
    const [isCartVisible, setIsCartVisible] = useState(false);

    const toggleCartVisibility = () => {
        setIsCartVisible(!isCartVisible);
    };

    return (
        <>
            <header className="cabezal">
                <div className='container mx'>
                    <div className='logo'><Logo /></div>
                    <div className='menunav'><Navbar /></div>
                    <div className='search'><Search /></div>
                    <div className='cart-icon' onClick={toggleCartVisibility}>
                        <img src={cartIcon} alt='Carrito de Compras' className='cart-icon-image' />
                    </div>
                </div>
            </header>
            {isCartVisible && (
                <Cart 
                    cartItems={cartItems} 
                    onRemoveFromCart={onRemoveFromCart} 
                />
            )}
        </>
    );
}

Header.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemoveFromCart: PropTypes.func.isRequired,
};