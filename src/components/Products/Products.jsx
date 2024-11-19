import { useState } from 'react';
import ItemList from '../ItemList/ItemList';
import CategoryList from '../CategoryList/CategoryList';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import CategoryList from '../CategoryList/CategoryList';
import Loading from '../Loading/Loading'; 

const categories = ['Ropa', 'Electrónica', 'Calzado', 'Accesorios'];

export default function ProductsPage() {
    const [selectedCategory, setSelectedCategory] = useState('Todos');


    const [loading, setLoading] = useState(true); 

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
    };

    return (
        //cambiarfuente
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000); 
    }, []));

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <Loading />
            </div>
        );
    }

    return (
        <div className="container mx-auto max-w-[1170px] p-4">
            <h1 className="text-6xl font-serif text-black mb-7"> 
                Lista de Productos
            </h1>
            <CategoryList categories={categories} onSelectCategory={handleSelectCategory} />

            <div className="mb-4">
                <h2 className="text-2xl font-semibold mb-3 text-gray-800" style={{ fontFamily: 'Arial, sans-serif' }}>Categorías</h2>
                <CategoryList categories={categories} onSelectCategory={handleSelectCategory} />
            </div>
            <ItemList selectedCategory={selectedCategory} />
        </div>
    );
}