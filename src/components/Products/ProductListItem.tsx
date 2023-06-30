import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductListItem.scss'

type Props = {
    title: string
    description: string
    changeCurrency: string
    changePrice: number
    addToTotal: () => void
}

const ProductListItem = ({
    title,
    description,
    changeCurrency,
    changePrice,
    addToTotal,
}: Props) => {
    return (
        <Card className="product" variant="outlined">
            <CardContent>
                <h4 className="product-title">{title}</h4>
                <div className="product-description">{description}</div>
                <div className="product-price">
                    {changeCurrency}
                    <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>
                        {changePrice.toFixed(2)}
                    </span>
                </div>
                <CardActions className="btn">
                    <Button variant="outlined" onClick={() => addToTotal()}>
                        Buy
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default ProductListItem
