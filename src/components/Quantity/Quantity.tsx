import { Button } from '@mui/material'
import { TextField } from '@mui/material'

type Props = {
    count: number
    onIncrementClick: () => void
    onDecrementClick: () => void
    minCount: number
}

const Quantity = ({
    count,
    onIncrementClick,
    onDecrementClick,
    minCount,
}: Props) => {
    return (
        <div className="product-quantity">
            <Button
                variant="outlined"
                onClick={() => onDecrementClick()}
                disabled={count <= minCount}
            >
                -
            </Button>
            <TextField value={count} size="small" />
            <Button
                variant="outlined"
                onClick={() => onIncrementClick()}
                disabled={count >= 10}
            >
                +
            </Button>
        </div>
    )
}

export default Quantity
