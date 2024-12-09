import { useCartStore } from '../../Stores/CartStores'; 
import cartIcon from '/cart-icon.png'; 
import './Cart.css';

export default function Cart() {
  const { cart, incrementQuantity, decrementQuantity, removeFromCart } = useCartStore();

  const handleIncrease = (id) => {
    const product = cart.find(item => item.id === id);
    if (product && product.quantity < product.stock) {
      incrementQuantity(id);  
    }
  };

  const handleDecrease = (id) => {
    decrementQuantity(id); 
  };

  const handleRemove = (id) => {
    removeFromCart(id); 
  };

  const totalPrice = cart.reduce(
    (total, item) => total + (item.discountPrice || item.price) * item.quantity,
    0
  );

  return (
    <div className="cart-container fixed right-0 top-0 w-[400px] bg-white p-4 shadow-lg">
      <div className="cart-header flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={cartIcon}
            alt="Carrito de Compras"
            className="cart-icon-image w-8 h-8"
          />
          <h2 className="text-xl font-bold ml-2">Tu Carrito</h2>
        </div>
      </div>
      {cart.length === 0 ? (
        <p className="text-gray-500 mt-4">El carrito está vacío.</p>
      ) : (
        <>
          <ul className="cart-list mt-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center py-4 border-b"
              >
                <div className="flex items-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="ml-4">
                    <p className="font-medium">{item.name}</p>
                    <p>
                      {item.discountPrice ? (
                        <>
                          <span className="line-through text-gray-500 mr-2">
                            ${item.price.toFixed(2)}
                          </span>
                          <span className="text-red-600">
                            ${item.discountPrice.toFixed(2)}
                          </span>
                        </>
                      ) : (
                        <span>${item.price.toFixed(2)}</span>
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleDecrease(item.id)}
                    className={`text-gray-500 hover:text-gray-700 ${
                      item.quantity === 1 ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleIncrease(item.id)}
                    className={`text-gray-500 hover:text-gray-700 ${
                      item.quantity >= item.stock ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    disabled={item.quantity >= item.stock}  
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
          <div className="cart-total mt-4 flex justify-between items-center">
            <p className="font-bold text-lg">Total: ${totalPrice.toFixed(2)}</p>
            <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
              Proceder al Pago
            </button>
          </div>
        </>
      )}
    </div>
  );
}