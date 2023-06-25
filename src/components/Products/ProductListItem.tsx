import { Button, Card, CardActions, CardContent } from '@mui/material'
import { useState } from 'react'
import './ProductListItem.scss'

type Props = {
    id: number
    title: string
    description: string
    price: number
    addProductToCart: (id: number, count: number) => void
}

const ProductListItem = ({
    id,
    title,
    description,
    price,
    addProductToCart,
}: Props) => {
    const [count, setCount] = useState<number>(1)

    return (
        <Card className="product" variant="outlined">
            <CardContent>
                <h4 className="product-title">{title}</h4>
                <div className="product-description">{description}</div>
                <div className="product-price">EUR {price}</div>
                <CardActions className="btn">
                    <Button
                        variant="outlined"
                        onClick={() => addProductToCart(id, count)}
                    >
                        Buy
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default ProductListItem
