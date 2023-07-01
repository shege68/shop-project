import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductListItem.scss'

type Props = {
    title: string
    description: string
    currency: string
    price: number
    addToTotal: (price: number) => void
}

const ProductListItem = ({
    title,
    description,
    currency,
    price,
    addToTotal,
}: Props) => {
    return (
        <Card className="product" variant="outlined">
            <CardContent>
                <h4 className="product-title">{title}</h4>
                <div className="product-description">{description}</div>
                <div className="product-price">
                    {currency}
                    <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>
                        {price.toFixed(0)}
                    </span>
                </div>
                <CardActions className="btn">
                    <Button
                        variant="outlined"
                        onClick={() => addToTotal(price)}
                    >
                        Buy
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default ProductListItem
