import { Grid } from '@mui/material'
import ProductListItem from './ProductListItem'
import productsArray from 'utils/productsArray'

type Props = {
    addToTotal: () => void
    changeCurrency: string
    changePrice: number
}

const ProductList = ({ addToTotal, changeCurrency, changePrice }: Props) => {
    return (
        <>
            <Grid container spacing={4}>
                {productsArray.map(({ id, title, description }) => (
                    <Grid item xs={12} sm={6} md={4} key={id}>
                        <ProductListItem
                            title={title}
                            description={description}
                            changeCurrency={changeCurrency}
                            changePrice={changePrice}
                            addToTotal={addToTotal}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default ProductList
