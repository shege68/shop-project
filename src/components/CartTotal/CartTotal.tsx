import { Typography } from '@mui/material'
import productsArray, { Product, getProductsObject } from 'utils/productsArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
}

const CartTotal = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <Typography
            component="h2"
            variant="h4"
            align="center"
            sx={{ marginTop: '30px' }}
        >
            total:{' '}
            {Object.keys(productsInCart).reduce(
                (total, productId) =>
                    total +
                    productsInCart[parseInt(productId)] *
                        productsObject[parseInt(productId)].price,
                0
            )}
        </Typography>
    )
}
export default CartTotal
