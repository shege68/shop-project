export interface IProduct {
    id: number
    title: string
    description: string
    currency: string
    price: number
}

const productsArray: IProduct[] = [
    {
        id: 1,
        title: 'iPhone 12',
        description: 'This is iPhone 12....',
        currency: '',
        price: 0,
    },
    {
        id: 2,
        title: 'iPhone 8',
        description: 'This is iPhone 8....',
        currency: '',
        price: 0,
    },
    {
        id: 3,
        title: 'iPhone X',
        description: 'This is iPhone X.... ',
        currency: '',
        price: 0,
    },
]

export const getProductsObject = (array: IProduct[]) => 
    array.reduce(
        (object, product)=> ({
            ...object,
            [product.id]: product,
        }),
        {}
    )

export default productsArray