import PropTypes from 'prop-types'; 
import Item from "../Item/Item"; 
import { getProducts } from "../../data/asyncMock"; 
import { useEffect, useState } from "react"; 
import Loading from "../Loading/Loading"; 

export default function ItemList({ products, selectedCategory, onAddToCart }) {
    const [fetchedProducts, setFetchedProducts] = useState([]); 
    const [loading, setLoading] = useState(!products); 
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!products) {
            setLoading(true);
            getProducts()
                .then((data) => {
                    if (Array.isArray(data)) {
                        if (selectedCategory === 'Todos' || !selectedCategory) {
                            setFetchedProducts(data);
                        } else {
                            setFetchedProducts(data.filter(prod => prod.category === selectedCategory));
                        }
                    } else {
                        setError('Error: no se recibieron productos.');
                    }
                })
                .catch((err) => {
                    console.error(err);
                    setError('Error al cargar los productos.');
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setFetchedProducts(products);
        }
    }, [products, selectedCategory]);

    const displayedProducts = products || fetchedProducts;

    return (
        <div>
            {loading && <Loading />} 
            {error && <div className="text-red-500">{error}</div>} 
            {!loading && !error && displayedProducts.length === 0 && (
                <div>No hay productos disponibles.</div>
            )}
            {!loading && !error && displayedProducts.length > 0 && (
                <div className="flex flex-wrap">
                    {displayedProducts.map((prod) => (
                        <Item 
                            key={prod.id} 
                            id={prod.id} 
                            name={prod.name} 
                            price={prod.price} 
                            discountPrice={prod.discountPrice} 
                            img={prod.img} 
                            onAddToCart={() => onAddToCart(prod)} 
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

ItemList.propTypes = {
    products: PropTypes.array,
    selectedCategory: PropTypes.string,
    onAddToCart: PropTypes.func 
};

ItemList.defaultProps = {
    products: null,
    selectedCategory: 'Todos',
    onAddToCart: () => {} 
};