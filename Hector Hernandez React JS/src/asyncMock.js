const products = [
    {
        id: '1',
        name: 'Samsung Galaxy A-51',
        price: '1000',
        category: 'celular',
        img: 'https://ferbi.com.ar/web/image/product.image/798/image_1024/Celular%20Samsung%20Galaxy%20A51%20Reacondicionado?unique=3aad907',
        stock: '30',
        description: 'Características del Samsung Galaxy A-51'
    },
    {
        id: '2',
        name: 'Samsung Galaxy tab A7',
        price: '2000',
        category: 'tablets',
        img: 'https://images.fravega.com/f500/c21447c9dd963e3703541bd25a56817a.jpg',
        stock: '25',
        description: 'Características de la tablet Samsung Galaxy tab A7'
    },
    {
        id: '3',
        name: 'Auriculares Razer Kraken',
        price: '3000',
        category: 'accesorios',
        img: 'https://app.contabilium.com/files/explorer/16277/Productos-Servicios/concepto-6009150.jpg',
        stock: '25',
        description: 'Características de los Auriculares Razer Kraken'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === category))
        }, 500)
    })
}
