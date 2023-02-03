import { useState, useEffect, createElement } from "react";
import DualSensePhone from "../assets/dualsense-mobile.webp";
import LiveFromPS5Mobile from "../assets/live-from-ps5-mobile.webp";
import LiveFromPS5HeadImg from "../assets/live-from-ps5-head-img.webp";
import MLBMobile from "../assets/mlb-mobile.webp";
import MLBHeadImg from "../assets/mlb-head-img.webp";
import DeadSpaceMobile from "../assets/dead-space-mobile.webp";
import DeadSpaceHeadImg from "../assets/dead-space-head-img.webp";
import ForSpokenMobile from "../assets/forespoken-mobile.webp";
import ForSpokenHeadImg from "../assets/forspoken-head-img.webp";
import "../styles/hero.css";

const DualSenseHero = () => {
  return (
    <div
      style={{
        backgroundImage: `URL(${DualSensePhone})`,
      }}
      className=" h-[70vh] bg-cover bg-center flex flex-col items-center justify-center relative"
    >
      <div className="flex flex-col items-center justify-center mt-[12rem] z-[10]">
        <h1 className="text-white text-3xl font-bold">DUALSENSE EDGE</h1>
        <h2 className="text-white text-[1.430rem] mt-[-0.5rem] font-semibold">WIRELESS CONTROLLER</h2>
      </div>
      <div className="dualsense__overlay bg-blend-overlay w-[100%] min-h-[45%] absolute bottom-[-4.5rem]">
        <div className="flex flex-col text-white items-center justify-center gap-7 mt-[3.5rem]">
          <span className="text-center">Play your way with the new customizable high-performance PS5 controller, available now.</span>
          <button className="bg-white max-w-[40%] text-black rounded-full px-4 py-2 font-semibold">Find out more</button>
        </div>
      </div>
    </div>
  );
};
const LiveFromPS5Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `URL(${LiveFromPS5Mobile})`,
      }}
      className="h-[65vh] bg-cover bg-center relative"
    >
      <div className="bg-[#0A0E2F] absolute bottom-[-7rem] w-[100%] min-h-[40%]">
        <div className="flex flex-col items-center absolute bottom-10 gap-5">
          <img src={LiveFromPS5HeadImg} alt="" className="max-w-[35%] max-h-[15%]" />
          <h2 className="text-center text-white text-2xl">Bringing you the extraodrinary</h2>
          <span className="text-center text-white">Explore incredible worlds and experience the unexpected. Start your story today.</span>
          <button className="bg-white max-w-[40%] text-black rounded-full px-4 py-2 font-semibold">Find out more</button>
        </div>
      </div>
    </div>
  );
};
const MLBHero = () => {
  return (
    <div
      style={{
        backgroundImage: `URL(${MLBMobile})`,
      }}
      className="h-[60vh] bg-cover bg-center relative"
    >
      <div className="mlb__overlay absolute bottom-[-8rem] w-[100%] min-h-[55%]">
        <div className="flex flex-col items-center absolute bottom-10 gap-2 px-3">
          <img src={MLBHeadImg} alt="" className="max-w-[70%]" />
          <h2 className="text-center text-white text-2xl">Show The Game & Own The Show</h2>
          <span className="text-center text-white">
            MLB The Show 23 gets you closer than ever to living your baseball dreams. Coming soon to PS4 & PS5
          </span>
          <button className="bg-white max-w-[40%] text-black rounded-full px-4 mt-2 py-2 font-semibold">Find out more</button>
        </div>
      </div>
    </div>
  );
};
const DeadSpaceHero = () => {
  return (
    <div
      style={{
        backgroundImage: `URL(${DeadSpaceMobile})`,
      }}
      className="h-[60vh] bg-cover bg-center relative"
    >
      <div className="dead-space__overlay absolute bottom-[-8rem] w-[100%] min-h-[55%]">
        <div className="flex flex-col items-center absolute bottom-10 gap-3 px-3">
          <img src={DeadSpaceHeadImg} alt="" className="max-w-[75%]" />
          <h2 className="text-center text-white text-2xl">Humanity ends here</h2>
          <span className="text-center text-white">
            The sci-fi survival horror classic returns, rebuilt to offer a deeper and more immersive experience, out now on PS5
          </span>
          <button className="bg-white max-w-[40%] text-black rounded-full px-4 mt-2 py-2 font-semibold">Find out more</button>
        </div>
      </div>
    </div>
  );
};
const ForSpokenHero = () => {
  return (
    <div
      style={{
        backgroundImage: `URL(${ForSpokenMobile})`,
      }}
      className="h-[90vh] bg-cover bg-center relative"
    >
      <div className="forspoken__overlay absolute bottom-[-8rem] w-[100%] min-h-[80%]">
        <div className="flex flex-col items-center justify-start absolute bottom-7 gap-3 px-3 mb-[10em]">
          <img src={ForSpokenHeadImg} alt="" className="max-w-[75%]" />
          <h2 className="text-center text-white text-2xl">Humanity ends here</h2>
          <span className="text-center text-white">
            The sci-fi survival horror classic returns, rebuilt to offer a deeper and more immersive experience, out now on PS5
          </span>
          <button className="bg-white min-w-[20%] text-black rounded-full px-4 mt-2 py-2 font-semibold">Play now</button>
        </div>
      </div>
    </div>
  );
};
const Hero = () => {
  const [heroState, setHeroState] = useState("LiveFromPS5Hero");

  const HeroVariants = [
    {
      id: 1,
      name: "DualSenseHero"
    },
    {
      id: 1,
      name: "LiveFromPS5Hero"
    },
    {
      id: 1,
      name: "MLBHero"
    },
    {
      id: 1,
      name: "DeadSpaceHero"
    },
    {
      id: 1,
      name: "ForSpokenHero"
    }
  ]

  const returnHero = () => {
    switch (heroState) {
      case "DualSenseHero":
        return <DualSenseHero />;
      case "LiveFromPS5Hero":
        return <LiveFromPS5Hero />;
      case "MLBHero":
        return <MLBHero />;
      case "DeadSpaceHero":
        return <DeadSpaceHero />;
      case "ForSpokenHero":
        return <ForSpokenHero />;
    }
  };

  return <div>{returnHero()}</div>;
};

export default Hero;
