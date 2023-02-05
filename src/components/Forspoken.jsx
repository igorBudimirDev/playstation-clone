import "../styles/forspoken.css";
import PreviewKeyart from "../assets/preview-keyart.webp";
import UltimateKeyart from "../assets/ultimate-keyart.webp";
import CozyKeyart from "../assets/cosy-keyart.webp";
const Forspoken = () => {
  return (
    <div className="flex flex-col items-center transition-all duration-75">
      <div className="forspoken-2 bg-cover bg-center min-h-[40em] w-full" transition-all duration-75>
        <div className="flex flex-col transition-all duration-75">
          <div className="flex flex-col mt-[20em] text-white items-center text-center gap-7 md:mt-[12.5em] md:pl-[4em] md:items-start md:text-start md:max-w-[70%] transition-all duration-75 xl:pl-[14em]">
            <div className="flex flex-col items-center md:items-start md:gap-3">
              <h2 className="text-4xl font-light md:text-5xl">THIS MONTH</h2>
              <h2 className="text-4xl font-bold md:text-5xl">ON PLAYSTATION</h2>
            </div>
            <p className="text-xl text-gray-400 max-w-[92%]">
              Check out this month's biggest releases along with dedicated features, guides and more.
            </p>
            <button className="w-[8rem] py-1 rounded-full bg-white font-semibold text-black hover:outline outline-white outline-offset-2 xl:py-3 xl:w-[10em] transition-all duration-75">
              Find out more
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-7 items-center text-white text-center bg-[#26254f] md:flex-row md:px-7 xl:px-[15em] transition-all duration-75 hover:cursor-pointer pb-10">
        <div className="max-w-[90%] flex flex-col items-center gap-5 hover:cursor-pointer transition-all duration-[0.3s] ease-out hover:translate-y-[-20px]">
          <img src={PreviewKeyart} className="rounded-[15px] shadow-lg shadow-black  " />
          <span className="font-semibold text-xl">23 great games to look forward to in 2023</span>
        </div>
        <div className="max-w-[90%] flex flex-col items-center gap-5 hover:cursor-pointer transition-all duration-[0.3s] ease-out hover:translate-y-[-20px]">
          <img src={UltimateKeyart} className="rounded-[15px] shadow-lg shadow-black  " />
          <span className="font-semibold text-xl">The ultimate PlayStation review</span>
        </div>
        <div className="max-w-[90%] flex flex-col items-center gap-5 transition-all duration-[0.3s] hover:cursor-pointer ease-out hover:translate-y-[-20px]">
          <img src={CozyKeyart} className="rounded-[15px] shadow-lg shadow-black " />
          <span className="font-semibold text-xl">Best cozy games on PS4 & PS5</span>
        </div>
      </div>
    </div>
  );
};

export default Forspoken;
