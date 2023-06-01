import React from 'react'
import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import './ProductListItem.scss'

type Props = {
    title: string
    description: string
    capacity: string
    type: string
    price: number
    image: string
}

type State = {
    count: number
}
class ProductListItem extends React.Component<Props, State> {
    state = {
        count: 1,
    }

    onIncrementClick = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }))
    }

    onDecrementClick = () => {
        this.setState((prevState) => ({
            count: prevState.count - 1,
        }))
    }

    render() {
        const { title, description, type, capacity, price, image } = this.props
        return (
            <Card className="product" variant="outlined">
                <CardContent>
                    <div className="product-img">
                        <img src={image} alt="" />
                    </div>
                    <h4 className="product-title">{title}</h4>
                    <div className="product-description">{description}</div>
                    <div className="product-features">{type}</div>
                    <div className="product-features">
                        Capacity: {capacity}Gb
                    </div>
                    <div className="product-price">Price: $ {price}</div>
                    <div className="product-quantity">
                        <Button
                            variant="outlined"
                            onClick={() => this.onDecrementClick()}
                        >
                            -
                        </Button>
                        <TextField value={this.state.count} size="small" />
                        <Button
                            variant="outlined"
                            onClick={() => this.onIncrementClick()}
                        >
                            +
                        </Button>
                    </div>
                    <CardActions className="btn-wrap">
                        <Button variant="outlined">Add to cart</Button>
                    </CardActions>
                </CardContent>
            </Card>
        )
    }
}

export default ProductListItem
