import { useState } from "react";
import ShopHero from "./ShopHero";
import ShopPS5Consoles from "./ShopPS5Consoles";
import { useSelector } from "react-redux";
import { GiShoppingCart } from "react-icons/gi";
import "../styles/shop.css";

const Shop = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [cartOpen, setCartopen] = useState(false);
  //functions

  const handleCartButton = () => {
    setCartopen(!cartOpen);
  };

  const calculateTotalPrice = () => {
    let price = 0;
    cartItems.forEach((item) => (price = price + item.price));
    return price;
  };
  return (
    <>
      <ShopHero />
      <ShopPS5Consoles />
      <div className="fixed top-[10%] right-[3%]">
        <button
          onClick={handleCartButton}
          className=" w-[70px] h-[70px] bg-main-blue rounded-full flex items-center justify-center transition-all duration-75"
        >
          <GiShoppingCart className="text-7xl text-white p-3" />
          <div className="absolute h-[27px] w-[27px] bg-red-600 bottom-[-10px] right-0 rounded-full text-white flex items-center justify-center">
            <span className="">{cartItems.length}</span>
          </div>
        </button>
        {cartOpen && (
          <div className="absolute top-[105%] right-[50%] w-[500px] border-2 shadow-lg z-[999] bg-gray-100 animate-[opacityAndScale_0.5s_cubic-bezier(0.08,0.82,0.17,1)] animation-forwards origin-top-right flex flex-col transition-all duration-75">
            <div className="flex items-center py-10 justify-evenly">
              <span className="text-5xl font-light">${calculateTotalPrice().toFixed(2)}</span>
              <button className="bg-main-orange font-semibold text-white w-[30%] py-2">Checkout</button>
            </div>
            <div className="cart-content flex flex-col overflow-y-auto max-h-[30em] scroll-smooth">
              {cartItems.map((item) => {
                return (
                  <div className="flex justify-between items-center bg-white px-10 border-b py-3">
                    <div className="flex items-start">
                      <img className="" src={item.cart_img} alt="" />
                      <div className="flex flex-col">
                        <span className="max-w-[50%]">{item.name}</span>
                        <span className="font-bold">{item.price}</span>
                      </div>
                    </div>
                    <div>
                      <span className="">Qty: 1</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Shop;
