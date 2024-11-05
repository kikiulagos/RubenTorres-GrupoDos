import PropTypes from 'prop-types';
import './Cart.css';
import cartIcon from '../../../public/cart-icon.png'; 

const Cart = ({ cartItems, onRemoveFromCart }) => {

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className='cart'>
      <div className='cart-header'>
        <img src={cartIcon} alt='Carrito de Compras' className='cart-icon-image' />
        <h2>Carrito</h2>
      </div>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <ul className='cart-list'>
            {cartItems.map((item, index) => (
              <li key={index} className='cart-item'>
                <img src={item.image} alt={item.title} className='cart-item-image' />
                <div className='cart-item-details'>
                  <p className='cart-item-title'>{item.title}</p>
                  <p className='cart-item-price'>${item.price.toFixed(2)}</p>
                  <button onClick={() => onRemoveFromCart(item)} className='remove-from-cart-button'>
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className='cart-total'>
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  onRemoveFromCart: PropTypes.func.isRequired,
};

export default Cart;