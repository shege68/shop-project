import { Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

type Props = {}

type Order = {
    name: string
    address: string
}

const CheckoutPade = (props: Props) => {
    const [orderData, setOrderData] = useState<Order>({
        name: '',
        address: '',
    })

    const [isOrderSend, setIsOrderSend] = useState<boolean>(false)

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState) => ({
            ...prevState,
            address: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        axios
            .post(
                'https://my-json-server.typicode.com/kznkv-skillup/server/orders',
                {
                    name: orderData.name,
                    address: orderData.address,
                }
            )
            .then((res) => res.data)
            .then(({ name, address }) => {
                setOrderData({ name, address })
                setIsOrderSend(true)
            })
            .catch((e) => console.log(e))
    }

    const renderForm = () => {
        return (
            <form onSubmit={onSend}>
                <div>
                    <input
                        type="text"
                        placeholder="Name"
                        value={orderData.name}
                        onChange={handleName}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Address"
                        value={orderData.address}
                        onChange={handleAddress}
                    />
                </div>
                <button type="submit">Send</button>
            </form>
        )
    }

    const renderMessage = () => {
        return (
            <div>
                <div>Dear, {orderData.name} thanks for your order!</div>
                <div>Address: {orderData.address}</div>
            </div>
        )
    }
    console.log(orderData)
    return (
        <div>
            <Typography variant="h4" component={'h1'}>
                Checkout
            </Typography>
            {isOrderSend ? renderMessage() : renderForm()}
        </div>
    )
}

export default CheckoutPade
