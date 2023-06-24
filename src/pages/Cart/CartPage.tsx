import CartTotal from 'components/CartTotal/CartTotal'
import CartProductList from 'components/CartProductList/CartProductList'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtended'
import { Grid } from '@mui/material'
import { useAppSelector } from 'redux/hooks'
import { Link } from 'react-router-dom'

type Props = {
    productsInCart?: {
        [id: number]: number
    }
}

const CartPage = (props: Props) => {
    const productsInCart = useAppSelector((state) => state.productsInCart)

    return (
        <div>
            <Grid container spacing={4}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                />
            </Grid>
            <CartTotal productsInCart={productsInCart} />
            <Link to="/checkout">Proceed to checkout</Link>
        </div>
    )
}

export default CartPage
