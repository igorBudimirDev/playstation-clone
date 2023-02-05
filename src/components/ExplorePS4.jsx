import ExplorePS4Img from "../assets/explore-ps4.webp";
import ExplorePSVR from "../assets/explore-psvr.webp";
import ExploreDualshock from "../assets/explore-dualshock.webp";

const ExplorePS4 = () => {
  return (
    <div className="flex flex-col items-center mt-7 gap-5 transition-all duration-75">
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-3xl xl:text-5xl font-light">Explore PlayStation 4</h2>
        <p className="max-w-[80%] text-center text-gray-600 xl:max-w-[100%] xl:text-2xl">
          Incredible games, non-stop entertainment. There's never been a better time to enjoy PS4.
        </p>
      </div>
      <div className="flex items-center gap-2 w-full overflow-x-scroll whitespace-nonwrap scrollbar-hide pb-5">
        <div className="flex flex-col items-center min-w-[20em] min-h-[20em] gap-3">
          <img src={ExplorePS4Img} alt="" className="max-w-[80%]"/>
          <h2 className="text-2xl xl:text-3xl">PlayStation 4</h2>
          <p className="max-w-[70%] text-center text-gray-600">Incredible games live on PS4, with 1TB storage.</p>
          <button className="w-[6em] xl:w-[8em] bg-main-blue py-1 xl:py-2 hover:outline outline-main-blue outline-offset-2 rounded-full text-white font-semibold transition-all duration-75">Shop now</button>
        </div>
        <div className="flex flex-col items-center min-w-[20em] min-h-[20em] gap-3">
          <img src={ExplorePSVR} alt="" className="max-w-[67%]"/>
          <h2 className="text-2xl xl:text-3xl">PlayStation VR</h2>
          <p className="text-gray-600 text-center">Over 500 games and experiences and counting. See them all.</p>
          <button className="w-[6em] xl:w-[8em] bg-main-blue py-1 xl:py-2 hover:outline outline-main-blue outline-offset-2 rounded-full text-white font-semibold transition-all duration-75">Shop now</button>
        </div>
        <div className="flex flex-col items-center min-w-[20em] min-h-[20em] gap-3">
          <img src={ExploreDualshock} alt="" className="max-w-[80%]"/>
          <h2 className="text-2xl xl:text-3xl">Accessories</h2>
          <p className="text-gray-600 text-center">Enhance your PS4 experience with a range of official accessories.</p>
          <button className="w-[6em] xl:w-[8em] bg-main-blue py-1 xl:py-2 hover:outline outline-main-blue outline-offset-2 rounded-full text-white font-semibold transition-all duration-75">Shop now</button>
        </div>
      </div>
    </div>
  );
};

export default ExplorePS4;
