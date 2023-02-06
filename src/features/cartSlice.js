import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [
 
    ]
  },
  reducers: {
    addItemToCart: (state, action) => {
      state.items.push(action.payload)
    },
    removeItemFromCart: (state) => {
      state.value -= 1;
    },
    clearCart: (state) => {},
  },
});

// Action creators are generated for each case reducer function
export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
