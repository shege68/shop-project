import { Grid } from '@mui/material'
import ProductListItem from './ProductListItem'
import productsArray from 'utils/productsArray'
import ChangeCurrency from 'components/ChangeCurrency/ChangeCurrency'
import CartTotal from 'components/CartTotal/CartTotal'
import { useState } from 'react'

type Props = {}

const ProductList = (props: Props) => {
    const [changeCurrency, setChangeCurrency] = useState('UAH')

    const [changePrice, setChangePrice] = useState(30000)

    console.log('🚀 ~ file: App.tsx:17 ~ App ~ changePrice:', changePrice)

    const [changeCoefficient, setChangeCoefficient] = useState(1)

    const [totalPrice, setTotalPrice] = useState(0)

    function addCurrencyAndPriceToCart(currency: string, coefficient: number) {
        setChangeCurrency(currency)

        setChangeCoefficient((prevState) => {
            return prevState / coefficient
        })

        setChangePrice(changePrice / coefficient)

        if (totalPrice !== 0) {
            setTotalPrice(totalPrice / coefficient)
        }
    }

    function addToTotal() {
        setTotalPrice((prevState) => prevState + changePrice)
    }
    return (
        <>
            <ChangeCurrency
                addCurrencyAndPriceToCart={addCurrencyAndPriceToCart}
                changeCoefficient={changeCoefficient}
            />
            <Grid container spacing={4}>
                {productsArray.map(({ id, title, description, price }) => (
                    <Grid item xs={12} sm={6} md={4} key={id}>
                        <ProductListItem
                            title={title}
                            description={description}
                            changeCurrency={changeCurrency}
                            changePrice={changePrice}
                            price={price}
                            addToTotal={addToTotal}
                        />
                    </Grid>
                ))}
            </Grid>
            <CartTotal
                totalPrice={totalPrice}
                changeCurrency={changeCurrency}
            />
        </>
    )
}

export default ProductList
