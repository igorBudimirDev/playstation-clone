import React, { createElement, useState, useRef } from "react";
import { navData } from "../assets/navData";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

import { SmallHeaderSonyIcon } from "../assets/icons";
// uradi portfolio, stavi state da se menja sa intervalom hero sekcija
import { FiChevronRight } from "react-icons/fi";
const PhoneNav = () => {
  const subChildrenRef = useRef();
  const subMenuRef = useRef();
  //useStates
  const [sideMenu, setSideMenu] = useState({
    open: false,
  });
  const [sideMenuState, setSideMenuState] = useState(navData);
  //handlers
  const handleSideMenuButton = () => {
    setSideMenu({ ...sideMenu, open: !sideMenu.open });
  };
  const handleSubmenuButton = (btn) => {
    setSideMenu({ ...sideMenu, subMenu: !sideMenu.subMenu });
    subChildrenRef.current && subChildrenRef.current.classList.add("animate-[appear_0.7s_ease]", "animation-forwards");
    setTimeout(() => {
      subChildrenRef.current.classList.remove("animate-[appear_0.7s_ease]", "animation-forwards");
    }, 500);
    const newState = sideMenuState.map((state) => {
      if (btn.id === state.id)
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
  const handleSubmenuClose = () => {
    subMenuRef.current.classList.remove("animate-[sideMenuEnter_0.7s_cubic-bezier(0.08,0.82,0.17,1)]");
    subMenuRef.current && subMenuRef.current.classList.add("animate-[sideMenuLeave_0.3s_ease]");
    setTimeout(() => {
      const newState = sideMenuState.map((state) => ({
        ...state,
        active: false,
      }));
      setSideMenuState(newState);
    }, 500);
  };
  return (
    <div className="flex justify-between items-center px-3 py-2 md:hidden">
      <div className="flex items-center">
        <button onClick={handleSideMenuButton}>
          {!sideMenu.open ? <AiOutlineMenu className="text-2xl" /> : <AiOutlineClose className="text-3xl" />}
        </button>
        <AiOutlineSearch className="text-2xl ml-3" />
      </div>
      <SmallHeaderSonyIcon />
      <button className="rounded-[15px] bg-main-blue text-white px-3 py-[1px] font-semibold">Sign in</button>
      <div className={`side-menu h-[90vh] w-screen fixed bottom-0 left-0 border-t z-[999] flex flex-col bg-white pt-10 ${!sideMenu.open && "hidden"}`}>
        {sideMenuState.map((btn, index) => {
          return (
            <button
              onClick={() => handleSubmenuButton(btn)}
              key={index}
              className={`flex px-5 py-3 justify-between items-center focus:bg-none hover:bg-white ${
                btn.active && "bg-main-blue-ultra-light w-[17%] overflow-hidden"
              }`}
            >
              <div className="flex items-center">
                {createElement(btn.icon_name, {
                  className: "text-2xl text-gray-400",
                })}
                <span className="pl-7 text-base font-semibold">{btn.name}</span>
              </div>
              <FiChevronRight />
            </button>
          );
        })}
        {!sideMenuState.every((btn) => btn.active === false) && (
          <div
            ref={subMenuRef}
            className="sub-menu h-[90vh] w-[83%] top-2 absolute shadow-2xl right-0 overflow-auto bg-white translate-x-[100%] animate-[sideMenuEnter_0.7s_cubic-bezier(0.08,0.82,0.17,1)] animation-forwards"
          >
            <div ref={subChildrenRef}>
              {sideMenuState.map((button, index) => {
                return (
                  button.active && (
                    <div key={index} className="min-h-[70%] flex flex-col">
                      <div className="flex items-center py-10 pl-4">
                        <button onClick={() => handleSubmenuClose(button)}>
                          <AiOutlineClose className="text-3xl text-gray-500" />
                        </button>
                        <span className=" text-base text-gray-500 font-semibold">{button.name}</span>
                      </div>
                      <div className="flex flex-wrap border-b pb-10 border-b-gray-300 mx-4">
                        {button.subChildren.map((child, index) => {
                          return (
                            <div key={index} className="flex basis-[50%] flex-col items-center">
                              <img src={child.imgURL} className="max-w-[3em] pb-5" />
                              <span className=" font-medium text-gray-800">{child.name}</span>
                            </div>
                          );
                        })}
                      </div>
                      <div className="flex flex-col">
                        {button.additionalChildren.map((additionalChild, index) => {
                          return (
                            <span key={index} className="font-semibold py-[0.6rem] pl-4">
                              {additionalChild}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  )
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhoneNav;
