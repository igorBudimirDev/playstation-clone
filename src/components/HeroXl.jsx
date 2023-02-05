import { useState, useEffect, createElement, useRef } from "react";
import DualSensePhone from "../assets/dualsense-xl.webp";
import LiveFromPS5Mobile from "../assets/live-from-ps5-xl.webp";
import LiveFromPS5HeadImg from "../assets/live-from-ps5-head-img.webp";
import MLBMobile from "../assets/mlb-xl.webp";
import MLBHeadImg from "../assets/mlb-head-img.webp";
import DeadSpaceMobile from "../assets/dead-space-xl.webp";
import DeadSpaceHeadImg from "../assets/dead-space-head-img.webp";
import ForSpokenMobile from "../assets/forspoken-xl.jpeg";
import ForSpokenHeadImg from "../assets/forspoken-head-img.webp";

import DualsenseSlider from "../assets/dulsense-slider.webp";
import LiveFromPS5Slider from "../assets/live-from-ps5-slider.webp";
import MLBSlider from "../assets/mlb-slider.webp";
import DeadSpaceSlider from "../assets/dead-space-slider.webp";
import ForSpokenSlider from "../assets/forspoken-slider.webp";

import "../styles/hero.css";

const DualSenseHero = () => {
  return (
    <div
      style={{
        backgroundImage: `URL(${DualSensePhone})`,
      }}
      className=" dualsense-main h-[40em] bg-cover bg-center flex flex-col items-center justify-center relative animate-[appear_1s_ease]"
    >
      <div className="dualsense__overlay bg-blend-overlay w-[55%] min-h-[100%] left-0 absolute bottom-0">
        <div className="flex flex-col ml-[12rem] items-start justify-center gap-5 mt-[18rem] z-[10] opacity-0 animate-[appearFromBottom_1s_ease] animation-forwards">
          <div className="flex flex-col">
            <h1 className="text-white text-6xl font-bold ">DUALSENSE EDGE</h1>
            <h2 className="text-white text-[2.86rem] mt-[-0.5rem] font-semibold">WIRELESS CONTROLLER</h2>
          </div>
          <span className="text-left text-white animate-[appearFromBottom_1s_ease] opacity-0 animation-forwards animation-delay-300 max-w-[65%]">
            Play your way with the new customizable high-performance PS5 controller, available now.
          </span>
          <button className="info-btn bg-white max-w-[40%] text-black rounded-full px-4 py-2 font-semibold animate-[appearFromBottom_1s_ease] opacity-0 animation-forwards animation-delay-600">
            Find out more
          </button>
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
      className="dualsense-main h-[42em] bg-cover bg-center flex flex-col items-center justify-center relative animate-[appear_1s_ease]"
    >
      <div className=" dualsense__overlay bg-blend-overlay w-[55%] min-h-[100%] left-0 absolute bottom-0">
        <div className="flex flex-col ml-[12rem] items-start justify-center gap-5 mt-[18rem] z-[10] opacity-0 animate-[appearFromBottom_1s_ease] animation-forwards">
          <img src={LiveFromPS5HeadImg} alt="" className="max-w-[35%] max-h-[15%] opacity-0 animate-[appearFromBottom_1s_ease] animation-forwards" />
          <h2 className="text-center text-white text-2xl opacity-0 animate-[appearFromBottom_1s_ease] animation-forwards animation-delay-300">
            Bringing you the extraodrinary
          </h2>
          <span className="text-center text-white animate-[appearFromBottom_1s_ease] opacity-0 animation-delay-300 animation-forwards">
            Explore incredible worlds and experience the unexpected. Start your story today.
          </span>
          <button className="info-btn bg-white max-w-[40%] text-black rounded-full px-4 py-2 opacity-0 animation-delay-600 font-semibold animate-[appearFromBottom_1s_ease] animation-forwards">
            Find out more
          </button>
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
      className="dualsense-main h-[42em] bg-cover bg-center flex flex-col items-center justify-center relative animate-[appear_1s_ease]"
    >
      <div className=" dualsense__overlay bg-blend-overlay w-[55%] min-h-[100%] left-0 absolute bottom-0">
        <div className="flex flex-col ml-[12rem] items-start justify-center gap-5 mt-[18rem] z-[10] opacity-0 animate-[appearFromBottom_1s_ease] animation-forwards">
          <img src={MLBHeadImg} alt="" className="max-w-[55%] max-h-[15%] opacity-0 animate-[appearFromBottom_1s_ease] animation-forwards" />
          <h2 className="text-center text-white text-5xl font-light opacity-0 animate-[appearFromBottom_1s_ease] animation-forwards animation-delay-300">
            Show The Game & Own The Show
          </h2>
          <span className="text-center text-white animate-[appearFromBottom_1s_ease] opacity-0 animation-delay-300 animation-forwards">
            MLB The Show 23 gets you closer than ever to living your baseball dreams.
          </span>
          <button className="info-btn bg-white max-w-[40%] text-black rounded-full px-4 py-2 opacity-0 animation-delay-600 font-semibold animate-[appearFromBottom_1s_ease] animation-forwards">
            Find out more
          </button>
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
      className="dualsense-main h-[42em] bg-cover bg-center flex flex-col items-center justify-center relative animate-[appear_1s_ease]"
    >
      <div className=" dualsense__overlay bg-blend-overlay w-[55%] min-h-[100%] left-0 absolute bottom-0">
        <div className="flex flex-col ml-[12rem] items-start justify-center gap-5 mt-[16rem] z-[10] opacity-0 animate-[appearFromBottom_1s_ease] animation-forwards">
          <img src={DeadSpaceHeadImg} alt="" className="max-w-[55%] max-h-[15%] opacity-0 animate-[appearFromBottom_1s_ease] animation-forwards" />
          <h2 className="text-center text-white text-5xl font-light opacity-0 animate-[appearFromBottom_1s_ease] animation-forwards animation-delay-300">
            Humanity ends here
          </h2>
          <span className="text-center text-white animate-[appearFromBottom_1s_ease] opacity-0 animation-delay-300 animation-forwards">
            The Sci-Fi horror classic returns, out now on PS5.
          </span>
          <button className="info-btn bg-white max-w-[40%] text-black rounded-full px-4 py-2 opacity-0 animation-delay-600 font-semibold animate-[appearFromBottom_1s_ease] animation-forwards">
            Find out more
          </button>
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
      className="dualsense-main h-[42em] bg-cover bg-center flex flex-col items-center justify-center relative animate-[appear_1s_ease]"
    >
      <div className=" dualsense__overlay bg-blend-overlay w-[55%] min-h-[100%] left-0 absolute bottom-0">
        <div className="flex flex-col ml-[12rem] items-start justify-center gap-5 mt-[16rem] z-[10] opacity-0 animate-[appearFromBottom_1s_ease] animation-forwards">
          <img src={ForSpokenHeadImg} alt="" className="max-w-[55%] max-h-[15%] opacity-0 animate-[appearFromBottom_1s_ease] animation-forwards" />
          <h2 className="text-center text-white text-5xl font-light opacity-0 animate-[appearFromBottom_1s_ease] animation-forwards animation-delay-300">
            Find your fight
          </h2>
          <span className="text-left text-xl text-white animate-[appearFromBottom_1s_ease] opacity-0 animation-delay-300 animation-forwards max-w-[70%]">
            Traverse sprawling landscapes and battle monstruous creatures with a massive variety of magic abilities, out now on PS5.
          </span>
          <button className="info-btn bg-white max-w-[40%] text-black rounded-full px-4 py-2 opacity-0 animation-delay-600 font-semibold animate-[appearFromBottom_1s_ease] animation-forwards">
            Play now
          </button>
        </div>
      </div>
    </div>
  );
};


const Hero = () => {
  const heroVariants = [
    {
      active: true,
      id: 1,
      name: "DualSenseHero",
      img: DualsenseSlider,
    },
    {
      active: false,
      id: 2,
      name: "LiveFromPS5Hero",
      img: LiveFromPS5Slider,
    },
    {
      active: false,
      id: 3,
      name: "MLBHero",
      img: MLBSlider,
    },
    {
      active: false,
      id: 4,
      name: "DeadSpaceHero",
      img: DeadSpaceSlider,
    },
    {
      active: false,
      id: 5,
      name: "ForSpokenHero",
      img: ForSpokenSlider,
    },
  ];
  const [heroState, setHeroState] = useState("DualSenseHero");
  const [heroVariantsState, setHeroVariantsState] = useState(heroVariants);
  const [slider, setSlider] = useState(false);
  const heroInterval = useRef();
    // useEffect(() => {
    //   const setActiveComponent = () => {
    //     let id = 1;
    //     heroInterval.current = setInterval(() => {
    //       id === 5 ? (id = 1) : id++;
    //       const newState = heroVariantsState.map((variant) => ({
    //         ...variant,
    //         active: variant.id === id ? true : false,
    //       }));
    //       setHeroVariantsState(newState);
    //     }, 10000);
    //   };
    //   setActiveComponent();
    //   return () => {
    //     if (slider) clearInterval(heroInterval.current);
    //   };
    // }, [slider]);

    useEffect(() => {
      heroVariantsState.map((variant) => {
        if (variant.active) setHeroState(variant.name);
      });
    }, [heroVariantsState]);

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

  const handleSliderButton = (item) => {
    const id = item.id;
    console.log(id);
    setSlider(true);
    const newState = heroVariantsState.map((state) => {
      if (state.id === item.id) {
        return { ...state, active: true };
      } else
        return {
          ...state,
          active: false,
        };
    });

    setHeroVariantsState(newState);
    setHeroState(item.name);
    console.log(heroVariantsState);
  };

  return (
    <div className="hidden xl:flex flex-col justify-center overflow-hidden bg-gray-700">
      {returnHero()}
      <div
        className={` bg-white w-full flex justify-center gap-2 min-h-[10em]
      ${
        heroState === "DualSenseHero"
          ? "pt-[1em]"
          : heroState === "LiveFromPS5Hero"
          ? "pt-[1em]"
          : heroState === "MLBHero"
          ? "pt-[1em]"
          : heroState === "DeadSpaceHero"
          ? "pt-[1em]"
          : heroState === "ForSpokenHero" && "pt-[1em]"
      }
      `}
      >
        {heroVariantsState.map((item) => {
          return (
            <button
              onClick={() => handleSliderButton(item)}
              key={item.id}
              className={`slider-button w-[13em] mt-4 h-[7em] rounded-[10px] mx-3 shrink-0 inline-block relative ${item.active && "outline outline-offset-4 outline-[#0070CC]"}`}
            >
              <div className="slider-button-overlay w-[100%] h-[100%] rounded-[10px] bg-gray-500 opacity-50 absolute hover:opacity-0"></div>
              <img src={item.img} className="w-[100%] h-[100%] rounded-[10px]" />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
