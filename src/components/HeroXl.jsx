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
import "../styles/hero.css";

const DualSenseHero = () => {
  return (
    <div
      style={{
        backgroundImage: `URL(${DualSensePhone})`,
      }}
      className=" dualsense-main h-[29em] bg-cover bg-center flex flex-col items-center justify-center relative animate-[appear_1s_ease]"
    >
      <div className="flex flex-col items-center justify-center mt-[12rem] z-[10] opacity-0 animate-[appearFromBottom_1s_ease] animation-forwards">
        <h1 className="text-white text-4xl font-bold ">DUALSENSE EDGE</h1>
        <h2 className="text-white text-[1.73rem] mt-[-0.5rem] font-semibold">WIRELESS CONTROLLER</h2>
      </div>
      <div className="dualsense__overlay bg-blend-overlay w-[100%] min-h-[45%] absolute bottom-[-4.5rem]">
        <div className="flex flex-col text-white items-center justify-center gap-7 mt-[3.5rem] ">
          <span className="text-center animate-[appearFromBottom_1s_ease] opacity-0 animation-forwards animation-delay-300">
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
      className="h-[30em] bg-cover bg-center relative animate-[appear_1s_ease]"
    >
      <div className="bg-[#0A0E2F] absolute bottom-[-7rem] w-[100%] min-h-[40%]">
        <div className="flex flex-col items-center absolute bottom-10 gap-5">
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
      className="h-[27em] bg-cover bg-center relative animate-[appear_1s_ease]"
    >
      <div className="mlb__overlay absolute bottom-[-8rem] w-[100%] min-h-[55%]">
        <div className="flex flex-col items-center absolute bottom-10 gap-2 px-3">
          <img src={MLBHeadImg} alt="" className="max-w-[55%] opacity-0 animate-[appearFromBottom_1s_ease] animation-forwards" />
          <h2 className="text-center text-white text-2xl opacity-0 animate-[appearFromBottom_1s_ease] animation-forwards animation-delay-300">
            Show The Game & Own The Show
          </h2>
          <span className="text-center text-white opacity-0 animate-[appearFromBottom_1s_ease] animation-forwards animation-delay-300">
            MLB The Show 23 gets you closer than ever to living your baseball dreams. Coming soon to PS4 & PS5
          </span>
          <button className="info-btn bg-white max-w-[40%] text-black rounded-full px-4 mt-2 py-2 font-semibold animate-[appearFromBottom_1s_ease] animation-forwards opacity-0 animation-delay-600">
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
      className="h-[27em] bg-cover bg-center relative animate-[appear_1s_ease]"
    >
      <div className="dead-space__overlay absolute bottom-[-8rem] w-[100%] min-h-[55%]">
        <div className="flex flex-col items-center absolute bottom-10 gap-3 px-3">
          <img src={DeadSpaceHeadImg} alt="" className="max-w-[55%] opacity-0 animate-[appearFromBottom_1s_ease] animation-forwards" />
          <h2 className="text-center text-white text-2xl opacity-0 animate-[appearFromBottom_1s_ease] animation-forwards animation-delay-300">
            Humanity ends here
          </h2>
          <span className="text-center text-white opacity-0 animate-[appearFromBottom_1s_ease] animation-forwards animation-delay-300">
            The sci-fi survival horror classic returns, rebuilt to offer a deeper and more immersive experience, out now on PS5
          </span>
          <button className="info-btn bg-white max-w-[40%] text-black rounded-full px-4 mt-2 py-2 font-semibold opacity-0 animate-[appearFromBottom_1s_ease] animation-forwards animation-delay-600">
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
      className="h-[35em] bg-cover bg-center relative animate-[appear_1s_ease]"
    >
      <div className="forspoken__overlay absolute bottom-[-8rem] w-[100%] min-h-[60%] ">
        <div className="flex flex-col items-center justify-start absolute bottom-0 gap-3 px-3 mb-[3em]">
          <img src={ForSpokenHeadImg} alt="" className="max-w-[60%] opacity-0 animate-[appearFromBottom_1s_ease] animation-forwards" />
          <h2 className="text-center text-white text-2xl opacity-0 animate-[appearFromBottom_1s_ease] animation-forwards animation-delay-300">
            Humanity ends here
          </h2>
          <span className="text-center text-white opacity-0 animate-[appearFromBottom_1s_ease] animation-forwards animation-delay-300">
            The sci-fi survival horror classic returns, rebuilt to offer a deeper and more immersive experience, out now on PS5
          </span>
          <button className="info-btn bg-white min-w-[20%] text-black rounded-full px-4 mt-2 py-2 font-semibold opacity-0 animate-[appearFromBottom_1s_ease] animation-forwards animation-delay-600">
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
      img: DualSensePhone,
    },
    {
      active: false,
      id: 2,
      name: "LiveFromPS5Hero",
      img: LiveFromPS5Mobile,
    },
    {
      active: false,
      id: 3,
      name: "MLBHero",
      img: MLBMobile,
    },
    {
      active: false,
      id: 4,
      name: "DeadSpaceHero",
      img: DeadSpaceMobile,
    },
    {
      active: false,
      id: 5,
      name: "ForSpokenHero",
      img: ForSpokenMobile,
    },
  ];
  const [heroState, setHeroState] = useState("DualSenseHero");
  const [heroVariantsState, setHeroVariantsState] = useState(heroVariants);
  const [slider, setSlider] = useState(false);
  const heroInterval = useRef();
//   useEffect(() => {
//     const setActiveComponent = () => {
//       let id = 1;
//       heroInterval.current = setInterval(() => {
//         id === 5 ? (id = 1) : id++;
//         const newState = heroVariantsState.map((variant) => ({
//           ...variant,
//           active: variant.id === id ? true : false,
//         }));
//         setHeroVariantsState(newState);
//       }, 10000);
//     };
//     setActiveComponent();
//     return () => {
//       if (slider) clearInterval(heroInterval.current);
//     };
//   }, [slider]);

//   useEffect(() => {
//     heroVariantsState.map((variant) => {
//       if (variant.active) setHeroState(variant.name);
//     });
//   }, [heroVariantsState]);

//   const returnHero = () => {
//     switch (heroState) {
//       case "DualSenseHero":
//         return <DualSenseHero />;
//       case "LiveFromPS5Hero":
//         return <LiveFromPS5Hero />;
//       case "MLBHero":
//         return <MLBHero />;
//       case "DeadSpaceHero":
//         return <DeadSpaceHero />;
//       case "ForSpokenHero":
//         return <ForSpokenHero />;
//     }
//   };

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
    <div className="hidden xl:flex flex-col justify-center overflow-hidden">
      {returnHero()}
      <div
        className={` bg-white w-full flex justify-center
      ${
        heroState === "DualSenseHero"
          ? "mt-[4.5em]"
          : heroState === "LiveFromPS5Hero"
          ? "mt-[7em]"
          : heroState === "MLBHero"
          ? "mt-[8em]"
          : heroState === "DeadSpaceHero"
          ? "mt-[8em]"
          : heroState === "ForSpokenHero" && "mt-[8em]"
      }
      `}
      >
        {heroVariantsState.map((item) => {
          return (
            <button
              onClick={() => handleSliderButton(item)}
              key={item.id}
              className="w-[6em] mt-4 h-[3.5em] rounded-[10px] mx-3 shrink-0 inline-block"
            >
              <img src={item.img} className="w-[100%] h-[100%] rounded-[10px]" />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
