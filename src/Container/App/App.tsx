import { useState } from 'react'

const App = () => {
    const [changeCurrency, setChangeCurrency] = useState('UAH')

    const [changePrice, setChangePrice] = useState(5800)

    const [totalPrice, setTotalPrice] = useState(0)

    function addCurrencyAndPriceToCart(currency: string, coefficient: number) {
        setChangeCurrency(currency)
        setChangePrice(5800 / coefficient)
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
            <button onClick={() => addCurrencyAndPriceToCart('USD', 38)}>
                USD
            </button>
            <button onClick={() => addCurrencyAndPriceToCart('EUR', 40)}>
                EUR
            </button>
            <button onClick={() => addCurrencyAndPriceToCart('UAH', 1)}>
                UAH
            </button>
            <button onClick={() => addCurrencyAndPriceToCart('GBR', 42)}>
                GBR
            </button>
            <p>
                {changeCurrency}
                <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>
                    {changePrice}
                </span>
            </p>
            <button onClick={() => addToTotal()}>Buy</button>
            <h2>total: {totalPrice}</h2>
        </div>
    )
}

export default App
