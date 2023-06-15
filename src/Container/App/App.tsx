import Header from 'Container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Container } from '@mui/material'
import Home from 'pages/Home/Home'
import CartPage from 'pages/Cart/CartPage'

type ProductsInCart = {
    [id: number]: number
}

const App = () => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCart>({
        1: 5,
        2: 5,
    })

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    const removeProductFromCart = (id: number) => {
        setProductsInCart((prevState) => {
            let prevProductInCart = { ...prevState }
            delete prevProductInCart[id]
            return prevProductInCart
        })
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <button onClick={() => removeProductFromCart(1)}>
                Remove product
            </button>
            <Container
                sx={{
                    padding: '40px 0',
                }}
            >
                <Routes>
                    <Route
                        path="/"
                        element={<Home addProductToCart={addProductToCart} />}
                    />
                    <Route
                        path="/cart"
                        element={<CartPage productsInCart={productsInCart} />}
                    />
                </Routes>
            </Container>
        </StyledEngineProvider>
    )
}

export default App
