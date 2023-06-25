import { Button, Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
import productsArray, { Product } from 'utils/productsArray'
import CartTotal from 'components/CartTotal/CartTotal'

type Props = {
    addProductToCart: (id: number, count: number) => void
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
}

const ProductList = ({
    addProductToCart,
    productsInCart,
    productsObject,
}: Props) => {
    return (
        <>
            <Typography
                component="h2"
                variant="h3"
                align="center"
                sx={{ marginBottom: '30px' }}
            >
                Our shop page
            </Typography>
            <Typography align="center" sx={{ marginBottom: '30px' }}>
                <Button variant="outlined">USD</Button>
                <Button variant="outlined">EUR</Button>
                <Button variant="outlined">UAH</Button>
                <Button variant="outlined">GBP</Button>
            </Typography>
            <Grid container spacing={4}>
                {productsArray.map(({ id, title, description, price }) => (
                    <Grid item xs={12} sm={6} md={4} key={id}>
                        <ProductListItem
                            id={id}
                            title={title}
                            description={description}
                            price={price}
                            addProductToCart={addProductToCart}
                        />
                    </Grid>
                ))}
            </Grid>
            <CartTotal
                productsInCart={productsInCart}
                productsObject={productsObject}
            />
        </>
    )
}

export default ProductList
