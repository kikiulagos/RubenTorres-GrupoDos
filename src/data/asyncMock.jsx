export const products = [
    {
        id: 1,
        name: 'EMPORIO ARMANI',
        price: 299,
        discountPrice: 249,
        description: 'Reloj Emporio Armani Classic AR2453 Negro.',
        sizes: ['TALLA ÚNICA'],
        stock: 12,
        img: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/123216428_01/w=800,h=800,fit=pad',
        category: 'Accesorios'
    },
    {
        id: 2,
        name: 'JBL',
        price: 40,
        discountPrice: 34,
        description: 'Audífono Headset T520 Negro JBL',
        stock: 20,
        img: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/16874385_1/w=800,h=800,fit=pad',
        category: 'Electrónica'
    },
    {
        id: 3,
        name: 'SHORT HOMBRE PUMA',
        price: 20,
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        sizes: ['S', 'M', 'L', 'XL'],
        stock: 8,
        img: 'https://home.ripley.cl/store/Attachment/WOP/D315/2000382227000/2000382227000_2.jpg',
        category: 'Ropa'
    },
    {
        id: 4,
        name: 'Notebook Asus Vivobook Go 14 AMD Ryzen 5 8GB 512GB SSD 14"',
        price: 383,
        discountPrice: 340,
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 10,
        img: 'https://www.abcdin.cl/dw/image/v2/BCPP_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf4f44ad0/images/large/27116213.jpg?sw=1200&sh=1200&sm=fit',
        category: 'Electrónica'
    },
    {
        id: 5,
        name: 'Polerón oversize con estampado',
        price: 21,
        discountPrice: 18,
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        sizes: ['S', 'M', 'L', 'XL'],
        stock: 13,
        img: 'https://hmchile.vtexassets.com/arquivos/ids/5826463-483-725?v=638358836037930000&width=483&height=725&aspect=true',
        category: 'Ropa'
    },
    {
        id: 6,
        name: 'Pantalón cargo Loose Fit',
        price: 35,
        discountPrice: 30,
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        sizes: ['S', 'M', 'L', 'XL'],
        stock: 14,
        img: 'https://hmchile.vtexassets.com/arquivos/ids/5952424-483-725?v=638424527533600000&width=483&height=725&aspect=true',
        category: 'Ropa'
    },
    {
        id: 7,
        name: 'Celular Xiaomi 14T 512GB 6,67" Black Liberado',
        price: 500,
        discountPrice: 450,
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 20,
        img: 'https://www.abcdin.cl/dw/image/v2/BCPP_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe3a68f83/images/large/27975178.jpg?sw=1200&sh=1200&sm=fit',
        category: 'Electrónica'
    },
    {
        id: 8,
        name: 'Amplimove Cross Training Zapatilla Deportiva Hombre Negro Adidas',
        price: 35,
        discountPrice: 30,
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        sizes: ['39.5', '40', '40.5', '41', '41.5', '42', '42.5', '43'],
        stock: 8,
        img: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/50350038_1/w=1500,h=1500,fit=pad',
        category: 'Calzado'
    },
    {
        id: 9,
        name: 'MacBook Pro M4 Max',
        price: 4085,
        discountPrice: 3999,
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 10,
        img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-silver-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1728916305269',
        category: 'Electrónica'
    },
    {
        id: 10,
        name: 'Licuadora Oster BLSTPEGRPB 1,5 lts',
        price: 40,
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 2,
        img: 'https://www.abcdin.cl/dw/image/v2/BCPP_PRD/on/demandware.static/-/Sites-master-catalog/default/dwbcf88fba/images/large/27538045.jpg?sw=1200&sh=1200&sm=fit',
        category: 'Electrónica'
    },
];


export const getProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(products); 
        }, 2000); 
    });
};

export const getProductById = (id) => {
    return new Promise((res, rej) => {
        const productoFiltrado = products.find((product) => product.id === parseInt(id)); 
        setTimeout(() => {
            if (productoFiltrado) {
                res(productoFiltrado); 
            } else {
                rej(`Producto con ID ${id} no encontrado.`); 
            }
        }, 2000); 
    });
};

export const getProductByCategory = (category) => {
    return new Promise((res) => {
        const productosFiltrados = products.filter((product) => product.category === category); 
        setTimeout(() => {
            res(productosFiltrados); 
        }, 2000); 
    });
};