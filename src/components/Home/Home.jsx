import { Carousel } from 'react-bootstrap';
import Title from '../Title/Title';
import ItemList from "../ItemList/ItemList";
import { useCartStore } from '../../Stores/CartStores';
import './HomePage.css';

export default function HomePage() {
    const slides = [
        { id: 1, image: 'https://cdn.pixabay.com/photo/2019/10/23/08/16/clothes-4570801_1280.jpg' },
        { id: 2, image: './slider2.jpg' },
        { id: 3, image: './slider3.jpg' },
    ];

    const products = [
        { id: 1, name: 'EMPORIO ARMANI', price: 299, discountPrice: 249, img: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/123216428_01/w=800,h=800,fit=pad', category: 'Ropa' },
        { id: 2, name: 'JBL', price: 40, discountPrice: 34, img: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/16874385_1/w=800,h=800,fit=pad', category: 'Electrónica' },
        { id: 4, name: 'ASUS', price: 383, discountPrice: 340, img: 'https://www.abcdin.cl/dw/image/v2/BCPP_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf4f44ad0/images/large/27116213.jpg?sw=1200&sh=1200&sm=fit', category: 'Electrónica' },
        { id: 5, name: 'Polerón oversize con estampado', price: 21, discountPrice: 18, img: 'https://hmchile.vtexassets.com/arquivos/ids/5826463-483-725?v=638358836037930000&width=483&height=725&aspect=true', category: 'Ropa' },
        { id: 6, name: 'Pantalón cargo Loose Fit', price: 35, discountPrice: 30, img: 'https://hmchile.vtexassets.com/arquivos/ids/5952424-483-725?v=638424527533600000&width=483&height=725&aspect=true', category: 'Ropa' },
    ];

    const popularProducts = [
        { id: 8, name: 'ADIDAS', price: 35, discountPrice: 30, img: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/50350038_1/w=1500,h=1500,fit=pad', category: 'Calzado' },
        { id: 7, name: 'Xiaomi', price: 500, discountPrice: 450, img: 'https://www.abcdin.cl/dw/image/v2/BCPP_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe3a68f83/images/large/27975178.jpg?sw=1200&sh=1200&sm=fit', category: 'Calzado' },
        { id: 9, name: 'MacBook Pro', price: 4085, discountPrice: 3999, img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-silver-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1728916305269', category: 'Electrónica' }
    ];

    const { addToCart } = useCartStore();
    const handleAddToCart = (product) => {
        addToCart(product);
        alert(`Producto "${product.name}" añadido al carrito.`);
    };

    return (    
        <div>
            <Carousel>
                {slides.map((slide) => (
                    <Carousel.Item key={slide.id}>
                        <img
                            className="d-block w-100"
                            src={slide.image}
                            alt="Slide"
                        />
                    </Carousel.Item>
                ))}
            </Carousel>

            <Title
                text="En Oferta"
                level={1}
                className="text-5xl font-semibold mb-8 mt-12 text-black tracking-tight ml-6"
                style={{ letterSpacing: '0.05em' }}
            />
            <ItemList 
                products={products} 
                onAddToCart={handleAddToCart} 
            /> 

            <Title
                text="Productos Más Populares"
                level={2}
                className="text-4xl font-medium mb-6 mt-8 text-black tracking-tight ml-6"
                style={{ letterSpacing: '0.05em' }}
            />
            <ItemList 
                products={popularProducts} 
                onAddToCart={handleAddToCart} 
            /> 
        </div>
    );
}