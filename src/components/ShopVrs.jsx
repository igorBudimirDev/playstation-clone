import { useDispatch, useSelector } from "react-redux";
import { GiShoppingCart } from "react-icons/gi";
import { addItemToCart, removeItemFromCart, clearCart } from "../features/cartSlice";
const ShopVrs = () => {
  const consoleData = useSelector((state) => state.shopItems.VRs);
  const dispatch = useDispatch();

  //functions
  const handleAddToCartbutton = (item) => {
    dispatch(addItemToCart(item))
  };

  return (
    <div className="flex flex-col md:gap-5 transition-all duration-75">
      <div className="flex flex-col gap-2 xl:pl-[5em] py-5 transition-all duration-75">
        <h2 className="text-4xl font-light">Shop PS5 Consoles from PlayStation</h2>
        <p className="text-main-blue font-semibold">Exclusives, Bundles, and more</p>
      </div>
      <div className="flex justify-center">
        <div className="flex items-center w-[100%] justify-center gap-[4em] overflow-x-scroll xl:overflow-x-hidden">
          {consoleData.map((data) => {
            return (
              <div className="flex flex-col max-w-[17em]">
                <div className="max-h-[20em]">
                  <img src={data.img} className="max-w-[20em]" />
                </div>
                <div className="flex items-center gap-5">
                  <span className="">{data.name.length > 40 ? data.name.substring(0, 30).concat("...") : data.name}</span>
                  <span className="font-bold">{data.price}</span>
                </div>
                {data.available ? (
                  <button
                    onClick={() => handleAddToCartbutton(data)}
                    className="flex items-center border-2 text-lg border-main-orange max-w-[5em] py-2  text-main-orange justify-center"
                  >
                    <span>Add</span>
                    <GiShoppingCart />
                  </button>
                ) : (
                  <span className="text-gray-600 font-semibold">Item Currently Unavailable</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShopVrs;
