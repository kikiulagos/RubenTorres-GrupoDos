import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
<<<<<<< HEAD

export default function Item({ id, name, price, discountPrice, img }) {
    const discountPercentage = discountPrice ? Math.round(((price - discountPrice) / price) * 100) : 0;

=======
import { useCartStore } from '../../Stores/CartStores'; 

export default function Item({ id, name, price, discountPrice, img }) {
    const { addToCart, cart } = useCartStore(); 

    const discountPercentage = discountPrice ? Math.round(((price - discountPrice) / price) * 100) : 0;

    const productInCart = cart.find(item => item.id === id);
    const quantity = productInCart ? productInCart.quantity : 0;

    const handleAddToCart = () => {
        const product = { id, name, price, discountPrice, img };
        addToCart(product);
    };

>>>>>>> 90f51ba (19-11)
    return (
        <div className="relative flex flex-col items-center my-4 mx-auto px-4 py-4 border border-gray-200 rounded-lg shadow-lg w-[260px] text-center">
            <Link to={`/products/${id}`} className="w-full flex justify-center">
                <img 
                    src={img} 
                    alt={`Imagen de ${name}`} 
                    className="w-[200px] h-[200px] object-cover rounded-lg mb-4" 
                />
            </Link>
<<<<<<< HEAD

=======
>>>>>>> 90f51ba (19-11)
            {discountPrice && (
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    -{discountPercentage}% OFF
                </div>
            )}
<<<<<<< HEAD

=======
>>>>>>> 90f51ba (19-11)
            <Link 
                to={`/products/${id}`} 
                className="text-[20px] font-bold my-3 tracking-[4px] uppercase text-[#030303] hover:text-[rgb(100,99,95)]"
            >
<<<<<<< HEAD
                {name}
            </Link>
     
=======
                {name} {quantity > 0 && <span className="text-sm text-gray-500">x{quantity}</span>}
            </Link>
>>>>>>> 90f51ba (19-11)
            <div className="text-[18px] font-bold mb-2">
                {discountPrice ? (
                    <>
                        <span className="text-gray-500 line-through mr-2">${price}</span>
                        <span className="text-red-600">${discountPrice}</span>
                    </>
                ) : (
                    <span className="text-black">${price}</span>
                )}
            </div>
<<<<<<< HEAD
=======

            <button
                onClick={handleAddToCart} 
                className="mt-4 bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
            >
                {quantity > 0 ? `Añadido (${quantity})` : 'Añadir al carrito'}
            </button>
>>>>>>> 90f51ba (19-11)
        </div>
    );
}

Item.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discountPrice: PropTypes.number,
    img: PropTypes.string.isRequired,
<<<<<<< HEAD
=======
};

Item.defaultProps = {
    discountPrice: null,
>>>>>>> 90f51ba (19-11)
};