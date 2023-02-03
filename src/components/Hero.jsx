import { useState, useEffect } from "react";
import DualSensePhone from "../assets/dualsense-mobile.webp";
import LiveFromPS5 from "../assets/live-from-ps5-mobile.webp";
import LiveFromPS5HeadImg from "../assets/live-from-ps5-head-img.webp";
import MLBMobile from "../assets/mlb-mobile.webp";
import MLBHeadImg from "../assets/mlb-head-img.webp";
import DeadSpaceMobile from "../assets/dead-space-mobile.webp";
import DeadSpaceHeadImg from "../assets/dead-space-head-img.webp";
import PSVRGamesMobile from "../assets/psvrgames-small.webp";
import ForSpokenMobile from "../assets/forespoken-mobile.webp";
import ForSpokenHeadImg from "../assets/forspoken-head-img.webp";
import "../styles/hero.css";
import { data } from "autoprefixer";
const Hero = () => {
  const heroStarterData = [
    {
      id: 1,
      active: false,
      bgURL: DualSensePhone,
      heading: "DUALSENSE EDGE",
      description: "Play your way with the new customizable high-performance PS5 controller, avaliable now.",
    },
    {
      id: 2,
      active: true,
      bgURL: LiveFromPS5,
      head_img: LiveFromPS5HeadImg,
      subHeading: "Bringing you the extraordinary",
      description: "Explore incredible worlds and experience the unexpected. Start your story today.",
    },
    {
      id: 3,
      active: false,
      bgURL: MLBMobile,
      head_img: MLBHeadImg,
      subHeading: "Show the Game & Own The Show",
      description: "MLB The Show 23 gets you closer than ever to living your baseball dreams on the diamond. Coming soon to PS4 & PS5",
    },
    {
      id: 4,
      active: false,
      bgURL: DeadSpaceMobile,
      head_img: DeadSpaceHeadImg,
      description: "The sci-fi survival horror classic returns, rebuilt to offer a deeper and more immpersive experience, out now on PS5",
    },
    {
      id: 5,
      active: false,
      bgURL: ForSpokenMobile,
      head_img: ForSpokenHeadImg,
      subHeading: "Find your fight",
      description: "Traverse sprawling landscapes and battle monstrous creatures with a massive variety of magic abilities, out now on PS5",
    },
  ];
  const [heroData, setHeroData] = useState(heroStarterData);

  //functions that return classnames

  const classNamesForHeroContent = (item) => {
    return `w-screen bg-center bg-cover flex
    ${item.id === 1 ? "h-[70vh]" : item.id === 2 ? "h-[80vh]" : item.id === 3 ? "h-[80vh]" : item.id === 4 ? "h-[80vh]" : item.id === 5 && "h-[90vh]"}
    `;
  };
  const classNamesForDescription = (item) => {
    return `description min-h-[35%] flex flex-col items-center gap-8 py-10 justify-center
    ${
      item.id === 1
        ? "bg-[#18181b]"
        : item.id === 2
        ? ""
        : item.id === 3
        ? "bg-[#18181b] px-5"
        : item.id === 4
        ? "bg-[#18181b] px-5"
        : item.id === 5 && "px-5 bg-[#18181b]"
    }
    `;
  };
  const classNamesForHeadImg = (item) => {
    return `
    ${item.id === 2 ? "max-w-[30%]" : item.id === 3 ? "max-w-[60%]" : item.id === 4 ? "max-w-[60%] pb-7" : item.id === 5 && "max-w-[80%]"}`;
  };

  useEffect(() => {
    // const newState = heroData.map((item) => {
    //   return item.active && {...item, active: false};
    // });
    // setHeroData(newState);
    heroData.forEach((data) => {
      
    })
  }, []);


  //useEffects
  useEffect(() => {
    setInterval(() => {
      heroData.forEach((item) => {});
    }, 10000);
  }, []);
  return (
    <div className="hero">
      {heroData.map((item) => {
        return (
          item.active && (
            <div key={item.id} style={{ backgroundImage: `URL(${item.bgURL})` }} className={classNamesForHeroContent(item)}>
              <div className="flex flex-col items-center justify-between min-h-[100%] w-[100vw]">
                {item.heading ? (
                  <h1 className="text-3xl text-white font-bold mt-[8em] ">{item.heading}</h1>
                ) : (
                  item.head_img && (
                    <div className="flex flex-col items-center mt-[15em]">
                      <img src={item.head_img} className={classNamesForHeadImg(item)} />
                      <h2 className="text-xl text-white font-normal">{item.subHeading}</h2>
                    </div>
                  )
                )}
                <div className={classNamesForDescription(item)}>
                  <h2 className="text-white text-center">{item.description}</h2>
                  <button className="px-3 py-1 rounded-full bg-white min-w-[35%] font-semibold">Find our more</button>
                </div>
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default Hero;
