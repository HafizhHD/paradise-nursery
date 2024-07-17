import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
import type { AppThunk } from "../../app/store"

export interface CartSliceState {
  value: Array<CartItem>
}

export interface CartItem {
  name: string
  qty: number
  price: number
  image: string
}

const initialState: CartSliceState = {
  value: []
}

export const cartSlice = createAppSlice({
  name: "cart",
  initialState,
  reducers: create => ({
    addItem: create.reducer(
      (state, action: PayloadAction<CartItem>) => {
        const item = state.value.find(item => item.name === action.payload.name)
        if (item) {
          item.qty += 1
        } else {
          state.value.push(action.payload)
        }
      },
    ),
    removeItem: create.reducer(
      (state, action: PayloadAction<string>) => {
        const item = state.value.find(item => item.name === action.payload)
        if (item && item.qty > 1) {
          item.qty -= 1
        } else {
          state.value = state.value.filter(item => item.name !== action.payload)
        }
      },
    ),
    deleteItem: create.reducer(
      (state, action: PayloadAction<string>) => {
        state.value = state.value.filter(item => item.name !== action.payload)
      },
    ),
  }),
  selectors: {
    selectCart: cart => cart.value
  },
})

export const { addItem, removeItem, deleteItem } = cartSlice.actions

export const { selectCart } = cartSlice.selectors
