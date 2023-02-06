import { createSlice } from "@reduxjs/toolkit";
import PS5Rangarok from "../assets/shop-console-god-of-war.webp";
import PS5RangarokDigital from "../assets/shop-console-digital-edition.webp";
import PS5Console from "../assets/shop-console-god-of-war.webp";
import PS5ConsoleDigital from "../assets/shop-console-god-of-war.webp";
import PS5CartImg from "../assets/ps5-cart-img.webp";
import GodOfWarCartImg from "../assets/god-of-war-cart-img.webp";
import PSVRShop from "../assets/ps-vr-shop-item.webp";
import PSVRForzaShop from "../assets/ps-vr-forza-shop-item.webp";
import PSSVRenseShop from "../assets/ps-vr-sense-shop-item.png";
import PSVRMini from "../assets/ps-vr-mini-cart.webp";
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
        cart_img: GodOfWarCartImg,
      },
      {
        id: 2,
        available: true,
        name: "Playstation 5 Console - God of War Rangarök Bundle Digital Edition",
        price: 459.99,
        img: PS5RangarokDigital,
        cart_img: GodOfWarCartImg,
      },
      {
        id: 3,
        available: true,
        name: "Playstation 5 Console",
        price: 499.99,
        img: PS5Console,
        cart_img: PS5CartImg,
      },
      {
        id: 4,
        available: false,
        name: "Playstation 5 Digital Edition Console",
        price: 399.99,
        img: PS5ConsoleDigital,
        cart_img: PS5CartImg,
      },
    ],
    VRs: [
      {
        id: 1,
        available: true,
        name: "PlayStation VR2",
        price: 549.99,
        img: PSVRShop,
        cart_img: PSVRMini,
      },
      {
        id: 2,
        available: true,
        name: "PlayStation®VR2 Horizon Call of the Mountain™ Bundle",
        price: 599.99,
        img: PSVRForzaShop,
        cart_img: PSVRMini,
      },
      {
        id: 3,
        available: true,
        name: "PlayStation VR2 Sense™ Controller Charging Station",
        price: 49.99,
        img: PSSVRenseShop,
        cart_img: PSVRMini,
      },
    ],
  },
  reducers: {},
});

export default shopItemsSlice.reducer;
