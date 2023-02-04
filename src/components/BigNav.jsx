import { useState, useRef } from "react";
import { SmallHeaderSonyIcon } from "../assets/icons";
import { navData } from "../assets/navData";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import SonyLogo from "../assets/sony-logo.svg";

const BigNav = () => {
  //useStates
  const [sideMenuState, setSideMenuState] = useState(navData);
  //functions
  const handleSubmenuButton = (item) => {
    if (subChildrenRef.current) subChildrenRef.current.classList.add("animate-[appear_0.7s_ease]", "animation-forwards");
    setTimeout(() => {
      if (subChildrenRef.current) subChildrenRef.current.classList.remove("animate-[appear_0.7s_ease]", "animation-forwards");
    }, 500);
    const newState = sideMenuState.map((state) => {
      if (item.active) return { ...state, active: false };
      if (item.id === state.id)
        return {
          ...state,
          active: true,
        };
      else
        return {
          ...state,
          active: false,
        };
    });
    setSideMenuState(newState);
  };
  const subChildrenRef = useRef();

  return (
    <div className="hidden md:block">
      <div className="flex justify-end bg-black py-1 pr-3">
        <img src={SonyLogo} alt="SONY" />
      </div>
      <div className="flex justify-between px-5">
        <div className="flex items-center">
          <SmallHeaderSonyIcon />
          <div className="flex items-center gap-5">
            {sideMenuState.map((item) => {
              return (
                <button onClick={() => handleSubmenuButton(item)} key={item.id} className="flex items-center">
                  <span className="font-medium">{item.name}</span>
                  {item.active ? <FiChevronUp className="mt-[0.125rem] text-gray-500" /> : <FiChevronDown className="mt-[0.125rem] text-gray-500" />}
                </button>
              );
            })}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="rounded-[15px] bg-main-blue text-white px-3 py-[1px] font-semibold">Sign in</button>
          <AiOutlineSearch className="text-3xl" />
        </div>
      </div>
      {!sideMenuState.every((btn) => btn.active === false) && (
        <div className="flex flex-col">
          <div ref={subChildrenRef} className="flex h-[10em]">
            {sideMenuState.map((item, index) => {
              return (
                item.active && (
                  <div key={index} className="flex gap-10 justify-center w-[100%] py-10 border-b border-b-gray-300">
                    {item.subChildren.map((child, index) => {
                      return (
                        <div key={index} className="flex flex-col">
                          <img loading="lazy" width="70" src={child.imgURL} alt="" />
                          <span className="font-medium">{child.name}</span>
                        </div>
                      );
                    })}
                  </div>
                )
              );
            })}
          </div>
          <div className="flex justify-center gap-7 py-5">
            {sideMenuState.map((item, index) => {
              return (
                item.active &&
                item.additionalChildren.map((child, index) => {
                  return (
                    <div key={index} className="flex items-center max-w-[20%]">
                      <div className="w-2 h-2 mr-2 p-1 bg-main-blue rounded-[100%]"></div>
                      <span className="font-semibold text-center">{child}</span>
                    </div>
                  );
                })
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default BigNav;
