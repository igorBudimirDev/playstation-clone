import PS5Hero from "../assets/ps5-shop-hero-xl.webp";

const ShopHero = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-5">
        <h2 className="text-4xl font-light">Shop Directly From PlayStation</h2>
        <p className="text-main-blue font-semibold">Exclusives, Bundles, and more</p>
      </div>
      <div className="flex flex-col gap-5">
        <img src={PS5Hero} alt="" />
        <p className="text-main-blue">News Just In</p>
        <h2 className="text-3xl font-light">PS5 Available Now</h2>
        <p>The PS5™ console unleashes new gaming possibilities that you never anticipated.</p>
        <button className="bg-white border border-main-blue max-w-[5em] text-main-blue py-2">Shop</button>
      </div>
    </div>
  );
};

export default ShopHero;
