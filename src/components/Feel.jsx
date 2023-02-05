import FeelBannerMobile from "../assets/feel-banner-mobile.webp";
import FeelBannerXl from "../assets/feel-banner-xl.webp";
import YellowBannerMobile from "../assets/yellow-banner-mobile.webp";
import YellowBannerXl from "../assets/yellow-banner-xl.webp";
import "../styles/feel.css";
const Feel = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="feel-banner relative">
        <img src={FeelBannerMobile} alt="" className="w-[100%] absolute md:hidden" />
        <img src={FeelBannerXl} alt="" className="w-[100%] md:absolute md:min-h-[30em]" />
      </div>
      <div className="flex flex-col items-center z-10 gap-5 mt-[4em] max-w-[90%]">
        <h2 className="text-2xl text-white text-center">Feel a New Real</h2>
        <p className="text-white text-center">
          Immerse yourself in epic worlds that go beyond reality, with the groundbreaking PlayStation VR2 headset and PlayStation VR2 Sense controller
        </p>
        <div className="flex items-center gap-3">
          <button className="font-semibold bg-white rounded-full w-[7.5em] py-1 px-1 hover:outline outline-white outline-offset-2 transition-all duration-75">Find out more</button>
          <button className="font-semibold text-white bg-main-orange rounded-full w-[7.5em] py-1 px-1 hover:outline outline-main-orange outline-offset-2 transition-all duration-75">Pre-order now</button>
        </div>
      </div>
    </div>
  );
};
export default Feel;
