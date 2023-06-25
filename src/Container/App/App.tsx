import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { createContext, useState } from 'react'
import { Container } from '@mui/material'
import Home from 'pages/Home/Home'

type ProductsInCart = {
    [id: number]: number
}

type Context = {
    changeProductQuantity: (id: number, count: number) => void
    productsInCart: {
        [id: number]: number
    }
}

export const AppContext = createContext<Context | null>(null)

const App = () => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCart>({})

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    const changeProductQuantity = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: count,
        }))
    }

    return (
        <StyledEngineProvider injectFirst>
            <AppContext.Provider
                value={{
                    changeProductQuantity: changeProductQuantity,
                    productsInCart: productsInCart,
                }}
            >
                <CssBaseline />
                <Container
                    sx={{
                        padding: '40px 0',
                    }}
                >
                    <Home
                        addProductToCart={addProductToCart}
                        productsInCart={productsInCart}
                    />
                </Container>
            </AppContext.Provider>
        </StyledEngineProvider>
    )
}

export default App
