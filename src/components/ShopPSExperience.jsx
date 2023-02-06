import PSExperienceBanner from "../assets/playstation-experience-banner.webp";

const ShopPSExperience = () => {
  return (
    <div className="flex flex-col md:gap-5 transition-all duration-75 py-11">
      <div className="flex flex-col gap-5 xl:flex-row xl:justify-center xl:gap-11 transition-all duration-75">
        <img src={PSExperienceBanner} alt="" className="" />
        <div className="flex flex-col xl:justify-center xl:max-w-[20%] xl:gap-3 transition-all duration-75">
          <p className="text-main-blue">Even more reasons to shop with us</p>
          <h2 className="text-3xl font-light xl:text-4xl">The PlayStation Experience</h2>
          <p className="xl:text-lg">
            When you order direct from PlayStation, you get more than just spectacular games and innovative hardware. From launch-day delivery on
            pre-orders and free 30-day returns, to delivery at no extra cost for PlayStation Plus members, get your goods straight from the source.
          </p>
          <button className="bg-white border border-main-blue max-w-[5em] text-main-blue py-2">Explore</button>
        </div>
      </div>
    </div>
  );
};

export default ShopPSExperience;
