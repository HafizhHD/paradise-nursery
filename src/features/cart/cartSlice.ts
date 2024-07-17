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

// If you are not using async thunks you can use the standalone `createSlice`.
export const cartSlice = createAppSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: create => ({
    // increment: create.reducer(state => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // }),
    // decrement: create.reducer(state => {
    //   state.value -= 1
    // }),
    // // Use the `PayloadAction` type to declare the contents of `action.payload`
    // incrementByAmount: create.reducer(
    //   (state, action: PayloadAction<number>) => {
    //     state.value += action.payload
    //   },
    // ),
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
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectCart: cart => cart.value
  },
})

// Action creators are generated for each case reducer function.
export const { addItem, removeItem, deleteItem } =
  cartSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectCart } = cartSlice.selectors
