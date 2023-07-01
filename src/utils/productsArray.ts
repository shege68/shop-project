export type Product = {
    id: number
    title: string
    description: string
    currency: string
    price: number
}

const productsArray: Product[] = [
    {
        id: 1,
        title: 'iPhone 12',
        description: 'This is iPhone 12....',
        currency: 'UAH',
        price: 30000,
    },
    {
        id: 2,
        title: 'iPhone 8',
        description: 'This is iPhone 8....',
        currency: 'UAH',
        price: 34000,
    },
    {
        id: 3,
        title: 'iPhone X',
        description: 'This is iPhone X.... ',
        currency: 'UAH',
        price: 50000,
    },
]

export default productsArray