import { createSlice } from '@reduxjs/toolkit'
import { omit } from 'lodash'
import { act } from 'react-dom/test-utils'

type State = {
    [id: number]: number
}

const initialState: State = {
    1: 2,
    2: 2,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart:(state, action)=>({
            ...state,
            [action.payload.id]:
            (state[action.payload.id] || 0) + action.payload.count,
        }),
        removeProductFromCart: (state, action) => omit(state, action.payload),
        changeProductQuantity: (state, action) => ({
            ...state,
            [action.payload.id]: action.payload.count
        })
    },
})

export const {addProductToCart, removeProductFromCart, changeProductQuantity} = cartSlice.actions
export default cartSlice.reducer