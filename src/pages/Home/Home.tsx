import ProductList from 'components/Products/ProductList'
import { Product } from 'utils/productsArray'

type Props = {
    addProductToCart: (id: number, count: number) => void
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
}

const Home = ({ addProductToCart, productsInCart, productsObject }: Props) => {
    return (
        <>
            <ProductList
                addProductToCart={addProductToCart}
                productsInCart={productsInCart}
                productsObject={productsObject}
            />
        </>
    )
}
export default Home
