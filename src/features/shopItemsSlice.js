import { createSlice } from "@reduxjs/toolkit";
import PS5Rangarok from "../assets/shop-console-god-of-war.webp";
import PS5RangarokDigital from "../assets/shop-console-digital-edition.webp";
import PS5Console from "../assets/shop-console-ps5.png";
import PS5ConsoleDigital from "../assets/shop-console-ps5-digital-edition.png";
export const shopItemsSlice = createSlice({
  name: "shopItems",
  initialState: {
    consoles: [
      {
        id: 1,
        available: true,
        name: "Playstation 5 Console - God of War Rangarök Bundle",
        price: 559.99,
        img: PS5Rangarok,
      },
      {
        id: 2,
        available: true,
        name: "Playstation 5 Console - God of War Rangarök Bundle Digital Edition",
        price: 459.99,
        img: PS5RangarokDigital,
      },
      {
        id: 3,
        available: true,
        name: "Playstation 5 Console",
        price: 499.99,
        img: PS5Console,
      },
      {
        id: 4,
        available: false,
        name: "Playstation 5 Digital Edition Console",
        price: 399.99,
        img: PS5Console,
      },
    ],
  },
  reducers: {},
});

export default shopItemsSlice.reducer;
