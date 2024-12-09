import Loading from "../Loading/Loading";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { getProductByCategory } from "../../data/asyncMock";

export default function ProductsCategory() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null); 
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        setError(null); 
        getProductByCategory(categoryId)
            .then((data) => {
                setProducts(data);
            })
            .catch((err) => {
                console.error(err);
                setError('Error al cargar los productos.'); 
            })
            .finally(() => {
                setLoading(false);
            });
    }, [categoryId]);

    return (
        <div className="container mx-auto max-w-[1170px]">
            {loading && <Loading />}
            {error && <div className="text-red-500">{error}</div>} 
            {!loading && !error && products.length === 0 && (
                <div>No hay productos en esta categoría.</div> 
            )}
            {!loading && !error && products.length > 0 && (
                <>
                    <h2 className="text-2xl font-bold mb-4">{`Productos en la categoría: ${categoryId}`}</h2>
                    <ItemList products={products} />
                </>
            )}
        </div>
    );
}