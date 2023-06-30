import { Typography } from '@mui/material'
import productsArray, { IProduct, getProductsObject } from 'utils/productsArray'

type Props = {
    productsTotal: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: IProduct
    }
}

const CartTotal = ({
    productsTotal,
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
            {Object.keys(productsTotal).reduce(
                (total, productId) =>
                    total +
                    productsTotal[parseInt(productId)] *
                        productsObject[parseInt(productId)].price,
                0
            )}
        </Typography>
    )
}
export default CartTotal
