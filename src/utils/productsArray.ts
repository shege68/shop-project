type Product = {
    id: number
    title: string
    description: string
    capacity: string
    type: string
    price: number
    image: string
}

const productsArray: Product[] = [
    {
        id: 1,
        title: 'iPhone 14 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '256',
        price: 1500,
        image: "/images/37399227.webp"
    },
    {
        id: 2,
        title: 'iPhone 13 Pro',
        description: 'This is iPhone 13 Pro',
        type: 'phone',
        capacity: '256',
        price: 1000,
        image: "/images/221026603.webp"
    },
    {
        id: 3,
        title: 'iPhone 14',
        description: 'This is iPhone 14 ',
        type: 'phone',
        capacity: '128',
        price: 1000,
        image: "/images/30872861.webp"
    },
    {
        id: 4,
        title: 'iPhone 11 Pro MAX',
        description: 'This is iPhone 11 Pro MAX',
        type: 'phone',
        capacity: '512',
        price: 2000,
        image: "/images/284913550.webp"
    },
    {
        id: 5,
        title: 'iPhone XS',
        description: 'This is iPhone XS',
        type: 'phone',
        capacity: '128',
        price: 500,
        image: "/images/284920888.webp"
    },
    {
        id: 6,
        title: 'iPhone 12 Pro',
        description: 'This is iPhone 12 Pro',
        type: 'phone',
        capacity: '64',
        price: 1500,
        image: "/images/284983293.webp"
    },
]

export default productsArray