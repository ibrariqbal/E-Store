// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../feature/productSlice.js'
import cartReducer from '../feature/CartSlice.js'
export const store = configureStore({
  reducer: {
    products: productReducer,
    cart : cartReducer
  },
})
