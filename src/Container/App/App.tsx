import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'
import { Container } from '@mui/material'
import ProductList from 'components/Products/ProductList'

type ProductsTotal = {
    [id: number]: number
}

type ChangeCurrency = {}

const App = () => {
    const [productsTotal, setProductsTotal] = useState<ProductsTotal>({})

    const [changeCurrency, setChangeCurrency] = useState<ChangeCurrency>({})

    const addProductToTotal = (id: number, count: number) => {
        setProductsTotal((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Container
                sx={{
                    padding: '40px 0',
                }}
            >
                <ProductList
                    addProductToTotal={addProductToTotal}
                    productsTotal={productsTotal}
                />
            </Container>
        </StyledEngineProvider>
    )
}

export default App
