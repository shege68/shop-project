import { Typography } from '@mui/material'

type Props = {
    totalPrice: number
    changeCurrency: string
}

const CartTotal = ({ totalPrice, changeCurrency }: Props) => {
    return (
        <Typography
            component="h2"
            variant="h4"
            align="center"
            sx={{ marginTop: '30px' }}
        >
            total: {totalPrice.toFixed(2)} {changeCurrency}
        </Typography>
    )
}
export default CartTotal
