import { useState, useRef } from "react";
import ShopHero from "./ShopHero";
import ShopPS5Consoles from "./ShopPS5Consoles";
import { useDispatch, useSelector } from "react-redux";
import { GiShoppingCart } from "react-icons/gi";
import "../styles/shop.css";
import ShopDualsense from "./ShopDualsense";
import ShopVrs from "./ShopVrs";
import ShopPSExperience from "./ShopPSExperience";
import ShopAccessories from "./ShopAccessories";
import ShopTheLastOfus from "./ShopTheLastOfus";
import { clearCart } from "../features/cartSlice";

const Shop = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [cartOpen, setCartopen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const cartRef = useRef();
  const loaderRef = useRef();
  const successRef = useRef();
  const cartWrapperRef = useRef();
  //functions

  const handleCartButton = () => {
    setCartopen(!cartOpen);
  };

  const handleCheckoutButton = () => {
    setIsLoading(true);
    cartRef.current.classList.add("animate-[dissapear_0.2s_ease]");
    cartRef.current.classList.add("animation-forwards");
    if (loaderRef.current) {
      loaderRef.current.classList.add("animate-[appear_1s_ease]");
      loaderRef.current.classList.add("animation-forwards");
    }
    setTimeout(() => {
      loaderRef.current.classList.remove("animate-appear_1s_ease");
      loaderRef.current.classList.remove("animation-forwards");
      successRef.current.classList.add("animate-[appear_0.5s_ease]");
      successRef.current.classList.add("animation-forwards");
      setTimeout(() => {
        cartWrapperRef.current.classList.add("animate-[opacityAndReverse_0.3s_ease]");

        setTimeout(() => {
          cartWrapperRef.current.classList.remove("animate-[opacityAndReverse_0.3s_ease]");
          setCartopen(false);
          dispatch(clearCart());
        }, 400);
      }, 3000);
    }, 3000);
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
      <ShopDualsense />
      <ShopVrs />
      <ShopPSExperience />
      <ShopAccessories />
      <ShopTheLastOfus />
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
          <div
            ref={cartWrapperRef}
            className="absolute top-[105%] right-[50%] w-[500px] border-2 shadow-lg z-[999] bg-gray-100 animate-[opacityAndScale_0.5s_cubic-bezier(0.08,0.82,0.17,1)] animation-forwards origin-top-right flex flex-col transition-all duration-75"
          >
            <div ref={loaderRef} className="absolute top-[45%] left-[50%] translate-x-[-50%] opacity-0">
              <span className="loader"></span>
            </div>
            <div ref={successRef} className="absolute top-[45%] left-[50%] translate-x-[-50%] opacity-0">
              <span className="text-xl font-light min-w-[20em] left-[-8em] text-green-400 absolute">
                You have purchased {cartItems.length} items successfully!
              </span>
            </div>

            {cartItems.length > 0 ? (
              <div ref={cartRef}>
                <div className="flex items-center py-10 justify-evenly">
                  <span className="text-5xl font-light">${calculateTotalPrice().toFixed(2)}</span>
                  <button onClick={handleCheckoutButton} className="bg-main-orange font-semibold text-white w-[30%] py-2">
                    Checkout
                  </button>
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
                        <div></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <span className="text-gray-500 font-light text-xl text-center py-10">Your cart is currently empty.</span>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Shop;
