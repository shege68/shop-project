import { Typography } from '@mui/material'

type Props = {
    totalPrice: number
}

const CartTotal = ({ totalPrice }: Props) => {
    return (
        <Typography
            component="h2"
            variant="h4"
            align="center"
            sx={{ marginTop: '30px' }}
        >
            total: {totalPrice.toFixed(0)}
        </Typography>
    )
}
export default CartTotal
