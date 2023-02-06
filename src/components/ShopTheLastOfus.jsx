import TheLastOfUsBanner from "../assets/thelastofusbanner.webp";

const ShopTheLastOfUs = () => {
  return (
    <div className="flex flex-col md:gap-5 transition-all duration-75 py-11">
      <div className="flex flex-col gap-5 xl:flex-row-reverse xl:justify-center xl:gap-11 transition-all duration-75">
        <img src={TheLastOfUsBanner} alt="" className="" />
        <div className="flex flex-col xl:justify-center xl:max-w-[20%] xl:gap-3 transition-all duration-75">
          <p className="text-main-blue">Now on PS5</p>
          <h2 className="text-3xl font-light xl:text-4xl">The Last of Us Part I - PS5</h2>
          <p className="xl:text-lg">
            Experience the emotional storytelling and unforgettable characters of Joel and Ellie in The Last of Us, winner of over 200 Game of the
            Year awards and now rebuilt for PlayStation®5.
          </p>
          <button className="bg-white border border-main-blue max-w-[5em] text-main-blue py-2">Shop</button>
        </div>
      </div>
    </div>
  );
};

export default ShopTheLastOfUs;
