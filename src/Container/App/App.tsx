import { useState } from 'react'
// interface IProduct {
//     id: number
//     title: string
//     description: string
//     price: {
//         currency: string
//         coefficient: number
//         value: number
//     }
// }

// const productsArray: IProduct[] = [
//     {
//         id: 1,
//         title: 'iPhone 12',
//         description: 'This is iPhone 12....',

//         price: {
//             currency: '',
//             coefficient: 0,
//             value: 0,
//         },
//     },
// ]

const App = () => {
    const [changeCurrency, setChangeCurrency] = useState('UAH')

    const [changePrice, setChangePrice] = useState(30000)

    const [changeCoefficient, setChangeCoefficient] = useState(1)
    console.log(
        '🚀 ~ file: App.tsx:33 ~ App ~ changeCoefficient:',
        changeCoefficient
    )

    const [totalPrice, setTotalPrice] = useState(0)

    function addCurrencyAndPriceToCart(currency: string, coefficient: number) {
        setChangeCurrency(currency)

        setChangeCoefficient((prevState) => {
            return prevState / coefficient
        })

        setChangePrice(changePrice / coefficient)
        if (totalPrice !== 0) {
            setTotalPrice(totalPrice / coefficient)
        }
    }

    function addToTotal() {
        setTotalPrice((prevState) => prevState + changePrice)
    }

    return (
        <div>
            <h1>Our shop page</h1>
            <button
                onClick={() =>
                    addCurrencyAndPriceToCart('USD', changeCoefficient * 38)
                }
            >
                USD
            </button>
            <button
                onClick={() =>
                    addCurrencyAndPriceToCart('EUR', changeCoefficient * 40)
                }
            >
                EUR
            </button>
            <button
                onClick={() =>
                    addCurrencyAndPriceToCart('UAH', changeCoefficient)
                }
            >
                UAH
            </button>
            <button
                onClick={() =>
                    addCurrencyAndPriceToCart('GBR', changeCoefficient * 42)
                }
            >
                GBR
            </button>
            <p>
                {changeCurrency}
                <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>
                    {changePrice.toFixed(2)}
                </span>
            </p>
            <button onClick={() => addToTotal()}>Buy</button>
            <h2>total: {totalPrice.toFixed(2)}</h2>
        </div>
    )
}

export default App
