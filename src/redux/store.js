import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import shopItemsReducer from "../features/shopItemsSlice";
export default configureStore({
  reducer: {
    cart: cartReducer,
    shopItems: shopItemsReducer,
  },
});
