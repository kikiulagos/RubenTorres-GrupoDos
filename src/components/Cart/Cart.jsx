import PropTypes from 'prop-types';
<<<<<<< HEAD
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
=======
import { useCartStore } from '../../Stores/CartStores';

export default function Cart() {
  const { cart, addToCart, removeFromCart } = useCartStore();

  const handleIncrease = (id) => {
    addToCart({ id });
  };

  const handleDecrease = (id) => {
    removeFromCart(id);
  };

  const handleRemove = (id) => {
    removeFromCart(id, true);
  };

  return (
    <div className="cart-container fixed right-0 top-0 w-[400px] bg-white p-4 shadow-lg">
      <h2 className="text-xl font-bold">Tu Carrito</h2>
      {cart.length === 0 ? (
        <p>No tienes productos en tu carrito.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between items-center py-2">
              <div className="flex items-center">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="ml-4">
                  <p>{item.name}</p>
                  <p>
                    {item.discountPrice ? (
                      <>
                        <span className="line-through text-gray-500 mr-2">${item.price}</span>
                        <span className="text-red-600">${item.discountPrice}</span>
                      </>
                    ) : (
                      <span>${item.price}</span>
                    )}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleDecrease(item.id)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleIncrease(item.id)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  +
                </button>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="flex justify-between items-center mt-4">
        <p className="font-bold">
          Total: ${cart.reduce((total, item) => total + (item.discountPrice || item.price) * item.quantity, 0).toFixed(2)}
        </p>
        <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
          Proceder al Pago
        </button>
      </div>
    </div>
  );
}
>>>>>>> 90f51ba (19-11)

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
<<<<<<< HEAD
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  onRemoveFromCart: PropTypes.func.isRequired,
};

export default Cart;
=======
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      discountPrice: PropTypes.number,
      img: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired, 
    })
  ).isRequired,
  onRemoveFromCart: PropTypes.func.isRequired,
};
>>>>>>> 90f51ba (19-11)
