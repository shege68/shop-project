import { Grid } from '@mui/material'
import ProductListItem from './ProductListItem'
import productsArray from 'utils/productsArray'
import ChangeCurrency from 'components/ChangeCurrency/ChangeCurrency'
import CartTotal from 'components/CartTotal/CartTotal'
import { useState } from 'react'

type Props = {}

const ProductList = (props: Props) => {
    const [newProductsArray, setNewProductsArray] = useState(productsArray)

    const [changeCoefficient, setChangeCoefficient] = useState(1)

    const [totalPrice, setTotalPrice] = useState(0)

    function addCurrencyAndPriceToCart(currency: string, coefficient: number) {
        setChangeCoefficient((prevState) => {
            return prevState / coefficient
        })

        setNewProductsArray(
            newProductsArray.map((item) => {
                return {
                    ...item,
                    currency: currency,
                    price: item.price / coefficient,
                }
            })
        )

        if (totalPrice !== 0) {
            setTotalPrice(totalPrice / coefficient)
        }
    }

    function addToTotal(price: number) {
        setTotalPrice((prevState) => prevState + price)
    }
    return (
        <>
            <ChangeCurrency
                addCurrencyAndPriceToCart={addCurrencyAndPriceToCart}
                changeCoefficient={changeCoefficient}
            />
            <Grid container spacing={4}>
                {newProductsArray.map(
                    ({ id, title, description, currency, price }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductListItem
                                title={title}
                                description={description}
                                currency={currency}
                                price={price}
                                addToTotal={addToTotal}
                            />
                        </Grid>
                    )
                )}
            </Grid>
            <CartTotal totalPrice={totalPrice} />
        </>
    )
}

export default ProductList
