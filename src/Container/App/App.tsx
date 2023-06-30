import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'
import { Container, Typography } from '@mui/material'
import ProductList from 'components/Products/ProductList'
import ChangeCurrency from 'components/ChangeCurrency/ChangeCurrency'
import CartTotal from 'components/CartTotal/CartTotal'

// type PriceInCart = {
//     [price: number]: Product
// }

const App = () => {
    const [changeCurrency, setChangeCurrency] = useState('UAH')

    const [changePrice, setChangePrice] = useState(30000)

    console.log('🚀 ~ file: App.tsx:17 ~ App ~ changePrice:', changePrice)

    const [changeCoefficient, setChangeCoefficient] = useState(1)

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
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Container
                sx={{
                    padding: '40px 0',
                }}
            >
                <Typography
                    component="h2"
                    variant="h3"
                    align="center"
                    sx={{ marginBottom: '30px' }}
                >
                    Our shop page
                </Typography>
                <ChangeCurrency
                    addCurrencyAndPriceToCart={addCurrencyAndPriceToCart}
                    changeCoefficient={changeCoefficient}
                />
                <ProductList
                    addToTotal={addToTotal}
                    changeCurrency={changeCurrency}
                    changePrice={changePrice}
                />
                <CartTotal
                    totalPrice={totalPrice}
                    changeCurrency={changeCurrency}
                />
            </Container>
        </StyledEngineProvider>
    )
}

export default App
