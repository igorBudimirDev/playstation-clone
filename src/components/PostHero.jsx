import { useState, useEffect } from "react";

import PS5ConsoleMobile from "../assets/ps5-console-mobile.webp";
import PS5ConsoleMd from "../assets/ps5-console-md.webp";
import ControllersMobile from "../assets/controllers-mobile.webp";
import ControllersMd from "../assets/controllers-md.webp";
import PulseMobile from "../assets/pulse-mobile.webp";
import PulseMd from "../assets/pulse-md.webp";
import DualsenseEdgeMobile from "../assets/dualsense-edge-mobile.webp";
import DualsenseEdgeMd from "../assets/dualsense-edge-md.webp";
import MediaRemoteMobile from "../assets/media-remote-mobile.webp";
import MediaRemoteMd from "../assets/media-remote-md.webp";
import HdCameraMobile from "../assets/hd-camera-mobile.webp";
import HdCameraMd from "../assets/hd-camera-md.webp";
import ConsoleCoversMobile from "../assets/console-hovers-mobile.webp";
import ConsoleCoversMd from "../assets/console-hovers-md.webp";

const PostHero = () => {
  const starterSliderData = [
    {
      id: 1,
      active: true,
      head_name: "PlayStation 5 console",
      name: "PS5 Console",
      description: "Experience an all-new generation of incredible PlayStation games. PS5 consoles are currently in stock.",
      mobile_url: PS5ConsoleMobile,
      md_url: PS5ConsoleMd,
    },
    {
      id: 2,
      active: false,
      head_name: "Dualsense Wireless Controller",
      name: "Dualsense Wireless Controller",
      description: "Immerse yourself in the gaming experience with a controller the supports responsive haptic feedback and dynamic trigger effects.",
      mobile_url: ControllersMobile,
      md_url: ControllersMd,
    },
    {
      id: 3,
      active: false,
      head_name: "Pulse 3D Wireless Headset",
      name: "Pulse 3D Wireless Headset",
      description: "Enjoy a seamless wireless experience with a headset fine-tuned for 3D Audio on PS5 consoles.",
      mobile_url: PulseMobile,
      md_url: PulseMd,
    },
    {
      id: 4,
      active: false,
      name: "Dualsense Edge",
      description: "Get an edge in gameplay with remappable buttons, tunable triggers and sticks, changeable stick caps, back buttons, and more.",
      head_name: "Dualsense Edge",
      mobile_url: DualsenseEdgeMobile,
      md_url: DualsenseEdgeMd,
    },
    {
      id: 5,
      active: false,
      head_name: "Media Remote",
      name: "Media Remote",
      description: "Conveniently control movies, streaming services and more on your PS5 console with an intuitive layout.",
      mobile_url: MediaRemoteMobile,
      md_url: MediaRemoteMd,
    },
    {
      id: 6,
      active: false,
      head_name: "HD Camera",
      name: "HD Camera",
      description: "Add yourself to your gameplay videos and broadcasts with smooth, sharp, full-HD capture.",
      mobile_url: HdCameraMobile,
      md_url: HdCameraMd,
    },
    {
      id: 7,
      active: false,
      head_name: "PS5 Console Covers",
      name: "PS5 Console Covers",
      description: "Personalise your PlayStation 5 or PlayStation 5 Digital Edition console with a vibrant array of new colour options.",
      mobile_url: ConsoleCoversMobile,
      md_url: ConsoleCoversMd,
    },
  ];
  const [sliderData, setSliderData] = useState(starterSliderData);
  const handleSliderButton = (btn) => {
    const newState = sliderData.map((item) => {
      if (btn.id === item.id)
        return {
          ...item,
          active: true,
        };
      else
        return {
          ...item,
          active: false,
        };
    });
    setSliderData(newState);
  };
  return (
    <div className="mt-3">
      <div className="flex flex-col items-center justify-center">
        {sliderData.map((item) => {
          return (
            item.active && (
              <div key={item.id} className="flex flex-col lg:flex-row-reverse justify-center min-h-[30em] xl:min-h-[40em] items-center">
                <div className="animate-[appear_0.4s_ease-in]">
                  <picture className="flex justify-center">
                    <source srcSet={item.mobile_url} media="(min-width: 320px)" sizes="768px" />
                    <source srcSet={item.md_url} media="(min-width: 768px)" sizes="1280px" />
                    <img src={item.mobile_url} alt="" className="max-w-[70%]" />
                  </picture>
                </div>
                <div className="flex flex-col items-center px-10 gap-5 lg:justify-center lg:items-start lg:max-w-[30%]">
                  <h2 className="text-3xl font-light text-center md:text-4xl">{item.head_name}</h2>
                  <p className=" text-lg text-gray-700 text-center md:text-2xl lg:text-start">{item.description}</p>
                  <div className="flex items-center gap-3">
                    <button className="bg-main-blue text-white font-semibold w-[7em] py-1 rounded-full px-2 lg:py-2 lg:text-lg hover:outline outline-main-blue outline-offset-2 transition-all duration-75">
                      Learn more
                    </button>
                    <button className="bg-main-orange text-white font-semibold w-[7em] py-1 rounded-full px-2 lg:py-2 lg:text-lg hover:outline outline-main-orange outline-offset-2 transition-all duration-75">
                      Bye now
                    </button>
                  </div>
                </div>
              </div>
            )
          );
        })}
        <div className="flex items-center w-full gap-3 overflow-x-scroll scroll whitespace-nowrap py-7 scrollbar-hide md:justify-center md:scrollbar-default 2xl:max-w-[80%]">
          {sliderData.map((item) => {
            return (
              <button
                key={item.id}
                onClick={() => handleSliderButton(item)}
                className={`min-w-[10em] md:min-w-[7em] 2xl:min-w-[10em] h-[7em] md:h-[4em] 2xl:h-[7em] rounded-[15px] transition-all duration-[0.2s] hover:translate-y-[-10px] ${
                  item.active ? "outline outline-main-blue outline-offset-2 opacity-1" : "opacity-70 hover:opacity-90"
                }`}
              >
                <img src={item.mobile_url} className="w-full h-full rounded-[15px]" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PostHero;
