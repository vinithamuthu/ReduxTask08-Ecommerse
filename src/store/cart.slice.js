import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: []
}

const currencyFormtter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
});

const cartSlice = createSlice({
  name: 'cart', 
  initialState,
  reducers: {
    addProduct(state, action) {
      return {
        ...state,
        products: [...state.products, action.payload]
      }
    },
    removeProduct(state, action) {
      return {
        ...state,
        products: state.products.filter(item => item.id !== action.payload.id)
      }
    },
    clearProduct(state) {
      return {
        ...state,
        products: []
      }
    }
  },
  selectors: {
    selectTotal: (state) => {
      return state.products.length
    },
    totalPrice: (state) => {
      return currencyFormtter.format(state.products.reduce((a, b) => a + (b.price - (b.price * (b.discountPercentage / 100))), 0))
    }
  }
})

export const { addProduct, removeProduct, clearProduct } = cartSlice.actions;
export const { selectTotal, totalPrice } = cartSlice.getSelectors()
export default cartSlice.reducer;