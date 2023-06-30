import { Button, Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
import productsArray, { IProduct } from 'utils/productsArray'
import CartTotal from 'components/CartTotal/CartTotal'

type Props = {
    addProductToTotal: (id: number, count: number) => void
    productsTotal: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: IProduct
    }
}

const ProductList = ({
    productsTotal,
    addProductToTotal,
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
                            addProductToTotal={addProductToTotal}
                        />
                    </Grid>
                ))}
            </Grid>
            <CartTotal
                productsTotal={productsTotal}
                productsObject={productsObject}
            />
        </>
    )
}

export default ProductList
