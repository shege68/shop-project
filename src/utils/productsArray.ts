type Product = {
    title: string
    description: string
    capacity: string
    type: string
    price: number
}

const productsArray: Product[] = [
    {
        title: 'iPhone 14 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '256',
        price: 1500,
    },
    {
        title: 'iPhone 13 Pro',
        description: 'This is iPhone 13 Pro',
        type: 'phone',
        capacity: '256',
        price: 1000,
    },
    {
        title: 'iPhone 14',
        description: 'This is iPhone 14 ',
        type: 'phone',
        capacity: '128',
        price: 1000,
    },
    {
        title: 'iPhone 11 Pro MAX',
        description: 'This is iPhone 11 Pro MAX',
        type: 'phone',
        capacity: '512',
        price: 2000,
    },
    {
        title: 'iPhone XS',
        description: 'This is iPhone XS',
        type: 'phone',
        capacity: '128',
        price: 500,
    },
    {
        title: 'iPhone 12 Pro',
        description: 'This is iPhone 12 Pro',
        type: 'phone',
        capacity: '64',
        price: 1500,
    },
]

export default productsArray