import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./store/cart.slice"
export const store = configureStore({
  reducer: cartReducer
})