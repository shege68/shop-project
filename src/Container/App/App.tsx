import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { Container, Typography } from '@mui/material'
import ProductList from 'components/Products/ProductList'

const App = () => {
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

                <ProductList />
            </Container>
        </StyledEngineProvider>
    )
}

export default App
