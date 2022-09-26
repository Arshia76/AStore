import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems:
    typeof localStorage !== 'undefined'
      ? JSON.parse(localStorage.getItem('AstoreCart'))
      : [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isExistingProduct = state.cartItems.find(
        (item) => item.id.toString() === action.payload.id.toString()
      );
      if (!isExistingProduct)
        state.cartItems = [...state.cartItems, action.payload];
      localStorage.setItem('AstoreCart', JSON.stringify(state.cartItems));
    },
    changeCount: (state, action) => {
      const data = state.cartItems.find(
        (item) => item.id.toString() === action.payload.id.toString()
      );

      if (data) {
        console.log('find');
        data.count = action.payload.count;
        localStorage.setItem('AstoreCart', JSON.stringify(state.cartItems));
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id.toString() !== action.payload.toString()
      );
      localStorage.setItem('AstoreCart', JSON.stringify(state.cartItems));
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem('AstoreCart');
    },
  },
});

export const { addToCart, removeFromCart, changeCount, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
