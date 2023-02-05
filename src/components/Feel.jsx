import FeelBannerMobile from "../assets/feel-banner-mobile.webp";
import FeelBannerXl from "../assets/feel-banner-xl.webp";
import YellowBannerMobile from "../assets/yellow-banner-mobile.webp";
import YellowBannerXl from "../assets/yellow-banner-xl.webp";
import PsPlusJan from "../assets/ps-plus-jan.webp";
import PlayStationPlus from "../assets/playstation-plus.webp";
import "../styles/feel.css";
const Feel = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center relative">
        <div className="feel-banner flex justify-center min-h-[30em]">
          <div className="absolute w-full h-full bg-black opacity-60 xl:hidden"></div>
          <img src={FeelBannerMobile} alt="" className="md:hidden" />
          <img src={FeelBannerXl} alt="" className="hidden md:block" />
          <div className="flex flex-col items-center xl:items-start gap-7 mt-[4em] max-w-[90%] xl:max-w-[35%] absolute bottom-5 md:bottom-[15%] xl:bottom-[35%] xl:right-[51.7%]">
            <h2 className="text-2xl md:text-3xl xl:text-5xl font-light text-white text-center">Feel a New Real</h2>
            <p className="text-white text-center md:text-lg xl:text-start xl:text-lg">
              Immerse yourself in epic worlds that go beyond reality, with the groundbreaking PlayStation VR2 headset and PlayStation VR2 Sense
              controller
            </p>
            <div className="flex items-center gap-3">
              <button className="font-semibold bg-white rounded-full w-[7.5em] py-1 px-1 hover:outline outline-white outline-offset-2 transition-all duration-75 xl:py-3 xl:w-[8.5em]">
                Find out more
              </button>
              <button className="font-semibold text-white bg-main-orange rounded-full w-[7.5em] py-1 px-1 hover:outline outline-main-orange outline-offset-2 transition-all duration-75 xl:py-3 xl:w-[8.5em]">
                Pre-order now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="ps-plus-monthly min-h-[40em] xl:min-h-[45em] w-full bg-center bg-cover xl:flex justify-center">
          <div className="flex flex-col items-center pt-10 gap-7 xl:flex-row-reverse xl:justify-evenly xl:max-w-[75%]">
            <img src={PsPlusJan} className="max-w-[17em] md:max-w-[19em] transition-all duration-75 xl:max-w-[45%]" />
            <div className="flex flex-col items-center gap-7 xl:items-start">
              <img src={PlayStationPlus} className="max-w-[17em] md:max-w-[19em] xl:max-w-[25em] transition-all duration-75" />
              <p className="text-lg text-center max-w-[17em] md:max-w-[85%] xl:text-start xl:">
                Enhance your PlayStation experience with access to online multiplayer, monthly games, exclusive discounts and more.
              </p>
              <button className="font-semibold text-white bg-main-blue py-2 w-[14em] rounded-full hover:outline outline-main-blue outline-offset-2 xl:py-3">
                Explore Playstation Plus
              </button>
            </div>
          </div>
        </div>
      </div>
      <img src="" alt="" />
    </div>
  );
};
export default Feel;
