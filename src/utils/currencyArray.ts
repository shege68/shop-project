export type Currency = {
    id: number
    currency: string
    price: number
}

const currencyArray: Currency[] = [
    {
        id: 1,
        currency: 'USD',
        price: 750,
    },
    {
        id: 2,
        currency: 'EUR',
        price: 850,
    },
    {
        id: 3,
        currency: 'UAH',
        price: 1250,
    },
    {
        id: 4,
        currency: 'GBR',
        price: 700,
    },
]

export const getCurrencyObject = (array: Currency[]) => 
    array.reduce(
        (object, currency)=> ({
            ...object,
            [currency.id]: currency,
        }),
        {}
    )

export default currencyArray
