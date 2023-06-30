export type Product = {
    id: number
    title: string
    description: string
    price: number
}

const productsArray: Product[] = [
    {
        id: 1,
        title: 'iPhone 12',
        description: 'This is iPhone 12....',
        price: 30000,
    },
    {
        id: 2,
        title: 'iPhone 8',
        description: 'This is iPhone 8....',
        price: 34000,
    },
    {
        id: 3,
        title: 'iPhone X',
        description: 'This is iPhone X.... ',
        price: 50000,
    },
]

export const getProductsObject = (array: Product[]) => 
    array.reduce(
        (object, product)=> ({
            ...object,
            [product.id]: product,
        }),
        {}
    )

export default productsArray