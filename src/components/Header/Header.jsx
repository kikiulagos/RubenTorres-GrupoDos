<<<<<<< HEAD
import { useState } from 'react';
=======
import { useState, useEffect, useRef } from 'react';
>>>>>>> 90f51ba (19-11)
import './Header.css';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import Search from '../Search/Search';
<<<<<<< HEAD
import PropTypes from 'prop-types';
import Cart from '../Cart/Cart';
import cartIcon from '../../../public/cart-icon.png'; 

export default function Header({ cartItems, onRemoveFromCart }) {
    const [isCartVisible, setIsCartVisible] = useState(false);

    const toggleCartVisibility = () => {
        setIsCartVisible(!isCartVisible);
    };

=======
import Cart from '../Cart/Cart';
import cartIcon from '../../../public/cart-icon.png'; 
import { useCartStore } from '../../Stores/CartStores';

export default function Header() {
    const { cart, removeFromCart } = useCartStore(); 
    const [isCartVisible, setIsCartVisible] = useState(false); 
    const cartRef = useRef(null);

    const toggleCartVisibility = () => {
        setIsCartVisible(!isCartVisible); 
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cartRef.current && !cartRef.current.contains(event.target)) {
                setIsCartVisible(false); 
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

>>>>>>> 90f51ba (19-11)
    return (
        <>
            <header className="cabezal">
                <div className='container mx'>
                    <div className='logo'><Logo /></div>
                    <div className='menunav'><Navbar /></div>
                    <div className='search'><Search /></div>
<<<<<<< HEAD
                    <div className='cart-icon' onClick={toggleCartVisibility}>
                        <img src={cartIcon} alt='Carrito de Compras' className='cart-icon-image' />
=======
                    <div className='cart-icon relative flex items-center cursor-pointer' onClick={toggleCartVisibility}>
                        <img 
                            src={cartIcon} 
                            alt='Carrito de Compras' 
                            className='w-10 h-10 object-contain'
                        />
                        {cart.length > 0 && (
                            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                                {cart.length}
                            </span>
                        )}
>>>>>>> 90f51ba (19-11)
                    </div>
                </div>
            </header>
            {isCartVisible && (
<<<<<<< HEAD
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
=======
                <div 
                    ref={cartRef} 
                    className="fixed top-0 right-0 z-50 bg-white shadow-lg w-80 p-4 mt-20 rounded-lg"
                >
                    <Cart 
                        cartItems={cart} 
                        onRemoveFromCart={removeFromCart} 
                    />
                </div>
            )}
        </>
    );
}
>>>>>>> 90f51ba (19-11)
