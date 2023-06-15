import Header from 'Container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { createContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Container } from '@mui/material'
import Home from 'pages/Home/Home'
import CartPage from 'pages/Cart/CartPage'
import { omit } from 'lodash'

type ProductsInCart = {
    [id: number]: number
}

type Context = {
    removeProductFromCart: (id: number) => void
}

export const AppContext = createContext<Context | null>(null)

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
        setProductsInCart((prevState) => omit(prevState, id))
    }

    return (
        <StyledEngineProvider injectFirst>
            <AppContext.Provider
                value={{ removeProductFromCart: removeProductFromCart }}
            >
                <CssBaseline />
                <Header productsInCart={productsInCart} />
                <Container
                    sx={{
                        padding: '40px 0',
                    }}
                >
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Home addProductToCart={addProductToCart} />
                            }
                        />
                        <Route
                            path="/cart"
                            element={
                                <CartPage productsInCart={productsInCart} />
                            }
                        />
                    </Routes>
                </Container>
            </AppContext.Provider>
        </StyledEngineProvider>
    )
}

export default App
