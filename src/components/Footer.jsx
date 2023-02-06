import React from "react";
import {SonyBigFooterIcon, SonyFooterIcon } from "../assets/icons";
import { TbWorld } from "react-icons/tb";
import Esrb from "../assets/esrb.svg"
const Footer = () => {
  return (
    <div className=" bg-main-blue flex flex-col py-[3rem] md:px-10 xl:px-0 gap-10 md:py-[5rem] transition-all duration-75 md:items-center xl:items-center">
      <div className="flex flex-col items-start pl-10 md:pl-0 gap-5 md:flex-row xl:items-start xl:w-full xl:justify-around transition-all duration-75">
        <div className="flex flex-col gap-7 xl:hidden">
          <SonyFooterIcon className="" />
          <div className="flex items-center text-white">
            <TbWorld className="text-xl text-white" />
            <span>Country / Region: United States</span>
          </div>
        </div>
        <div className="hidden flex-col gap-7 xl:flex">
          <SonyBigFooterIcon className="" />
          <div className="flex items-center text-white">
            <TbWorld className="text-xl text-white" />
            <span>Country / Region: United States</span>
          </div>
        </div>
        <div className="flex flex-col gap-7 md:flex-row xl:gap-10">
          <div className="flex flex-col text-start gap-1 xl:gap-2 text-white">
            <a href="">Support</a>
            <a href="">Privacy Policy</a>
            <a href="">Website terms of use</a>
            <a href="">PlayStation Studios</a>
            <a href="">Legal</a>
            <a href="">About SIE</a>
          </div>
          <div className="flex flex-col text-start gap-1 xl:gap-2 text-white">
            <a href="">PSN terms of service</a>
            <a href="">PS Store cancellation policy</a>
            <a href="">Health warning</a>
            <a href="">About ratings</a>
            <a href="">Press release</a>
            <a href="">Careers</a>
            <a href="">Developers</a>
            <a href="">Site map</a>
          </div>
          <div className="flex flex-col text-start gap-1 xl:gap-2 text-white">
            <a href="">Facebook</a>
            <a href="">Twitter</a>
            <a href="">Youtube</a>
            <a href="">Instagram</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center text-white md:flex-row xl:w-[60%] xl:justify-between">
        <span>©2023 Sony Interactive Entertainment LLC</span>
        <img src={Esrb} className="w-[3em]" />
      </div>
    </div>
  );
};

export default Footer;
