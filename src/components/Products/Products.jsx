import { useState } from 'react';
import ItemList from '../ItemList/ItemList';
import CategoryList from '../CategoryList/CategoryList';

const categories = ['Ropa', 'Electrónica', 'Calzado', 'Accesorios'];

export default function ProductsPage() {
    const [selectedCategory, setSelectedCategory] = useState('Todos');

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
    };

    return (
        //cambiarfuente
        <div className="container mx-auto max-w-[1170px] p-4">
            <h1 className="text-6xl font-serif text-black mb-7"> 
                Lista de Productos
            </h1>
            <CategoryList categories={categories} onSelectCategory={handleSelectCategory} />
            <ItemList selectedCategory={selectedCategory} />
        </div>
    );
}