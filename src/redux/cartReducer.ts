import { createSlice } from '@reduxjs/toolkit'

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
    reducers: {},
})

export default cartSlice.reducer