
import Hoodie from "../assets/hoodie.webp"
import Shirt from "../assets/shirt.webp"
import Hat from "../assets/hat.webp"
import Cup from "../assets/cup.webp"

import "../styles/merchandise.css"
const Merchandise = () => {
  return (
    <div className="merchandise mt-7 flex flex-col bg-cover xl:items-center relative pb-10">
        <div className="hidden w-full h-full absolute xl:block bg-black opacity-50"></div>
      <div className="flex pt-7 flex-col gap-5 text-white max-w-[85%] pl-7 pb-7 xl:pl-0 z-10">
        <h2 className="text-3xl leading-10 xl:text-center" >PlayStation official licensed apparel and merchandise</h2>
        <p className="text-gray-400 xl:text-center">Browse the PlayStation Gear Store for official accessories, collectibles, clothing and more.</p>
      </div>
      <div className="flex flex-col gap-5 items-center xl:flex-row xl:max-w-[80%] transition-all duration-75 z-10">
        <div className="flex flex-col gap-3 md:gap-5 max-w-[90%] items-center bg-black bg-opacity-40 pb-5 transition-all duration-75">
            <img src={Hoodie} alt="" />
            <span className="text-white md:text-2xl">PlayStation Logo Tee</span>
            <button className="bg-main-orange font-semibold text-white py-1 md:py-2 w-[6em] md:w-[8em] rounded-full hover:outline outline-main-orange outline-offset-2">Shop now</button>
        </div>
        <div className="flex flex-col gap-3 md:gap-5 max-w-[90%] items-center bg-black bg-opacity-40 pb-5 transition-all duration-75 z-10">
            <img src={Shirt} alt="" />
            <span className="text-white md:text-2xl">PlayStation Brand Hat</span>
            <button className="bg-main-orange font-semibold text-white py-1 md:py-2 w-[6em] md:w-[8em] rounded-full hover:outline outline-main-orange outline-offset-2">Shop now</button>
        </div>
        <div className="flex flex-col gap-3 md:gap-5 max-w-[90%] items-center bg-black bg-opacity-40 pb-5 transition-all duration-75 z-10">
            <img src={Hat} alt="" />
            <span className="text-white md:text-2xl">PlayStation Brand Hat</span>
            <button className="bg-main-orange font-semibold text-white py-1 md:py-2 w-[6em] md:w-[8em] rounded-full hover:outline outline-main-orange outline-offset-2">Shop now</button>
        </div>
        <div className="flex flex-col gap-3 md:gap-5 max-w-[90%] items-center bg-black bg-opacity-40 pb-5 transition-all duration-75 z-10">
            <img src={Cup} alt="" />
            <span className="text-white md:text-2xl">PlayStation Herritage Mug</span>
            <button className="bg-main-orange font-semibold text-white py-1 md:py-2 w-[6em] md:w-[8em] rounded-full hover:outline outline-main-orange outline-offset-2">Shop now</button>
        </div>
      </div>
    </div>
  );
};

export default Merchandise;
