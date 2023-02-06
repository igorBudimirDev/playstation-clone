import ShopDualsenseBanner from "../assets/shopdualsense-banner.webp"

const ShopDualsense = () => {
  return (
    <div className="flex flex-col md:gap-5 transition-all duration-75 py-11">
      <div className="flex flex-col gap-5 xl:flex-row-reverse xl:justify-center xl:gap-11 transition-all duration-75">
        <img src={ShopDualsenseBanner} alt="" className="" />
        <div className="flex flex-col xl:justify-center xl:max-w-[20%] xl:gap-3 transition-all duration-75">
          <p className="text-main-blue">Available Now</p>
          <h2 className="text-3xl font-light xl:text-4xl">Dualsense Edge Wireless Controller</h2>
          <p className="xl:text-lg">Get an edge in gameplay by creating your own custom controls to fit your playstyle.</p>
          <button className="bg-white border border-main-blue max-w-[5em] text-main-blue py-2">Shop</button>
        </div>
      </div>
    </div>
  );
};

export default ShopDualsense;
