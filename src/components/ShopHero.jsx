import PS5Hero from "../assets/ps5-shop-hero-xl.webp";

const ShopHero = () => {
  return (
    <div className="flex flex-col md:gap-5 transition-all duration-75">
      <div className="flex flex-col gap-2 xl:pl-[5em] py-5 transition-all duration-75">
        <h2 className="text-4xl font-light">Shop Directly From PlayStation</h2>
        <p className="text-main-blue font-semibold">Exclusives, Bundles, and more</p>
      </div>
      <div className="flex flex-col gap-5 xl:flex-row xl:justify-center xl:gap-11 transition-all duration-75">
        <img src={PS5Hero} alt="" className=""/>
        <div className="flex flex-col xl:justify-center xl:max-w-[20%] xl:gap-3 transition-all duration-75">
          <p className="text-main-blue">News Just In</p>
          <h2 className="text-3xl font-light xl:text-4xl">PS5 Available Now</h2>
          <p className="xl:text-lg">The PS5™ console unleashes new gaming possibilities that you never anticipated.</p>
          <button className="bg-white border border-main-blue max-w-[5em] text-main-blue py-2">Shop</button>
        </div>
      </div>
    </div>
  );
};

export default ShopHero;
