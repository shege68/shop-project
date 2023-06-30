import { Button, Typography } from '@mui/material'

type Props = {
    addCurrencyAndPriceToCart: (currency: string, coefficient: number) => void
    changeCoefficient: number
}

const ChangeCurrency = ({
    changeCoefficient,
    addCurrencyAndPriceToCart,
}: Props) => {
    return (
        <Typography align="center" sx={{ marginBottom: '30px' }}>
            <Button
                variant="outlined"
                onClick={() =>
                    addCurrencyAndPriceToCart('USD', changeCoefficient * 38)
                }
            >
                USD
            </Button>
            <Button
                variant="outlined"
                onClick={() =>
                    addCurrencyAndPriceToCart('EUR', changeCoefficient * 40)
                }
            >
                EUR
            </Button>
            <Button
                variant="outlined"
                onClick={() =>
                    addCurrencyAndPriceToCart('UAH', changeCoefficient)
                }
            >
                UAH
            </Button>
            <Button
                variant="outlined"
                onClick={() =>
                    addCurrencyAndPriceToCart('GBR', changeCoefficient * 42)
                }
            >
                GBP
            </Button>
        </Typography>
    )
}

export default ChangeCurrency
