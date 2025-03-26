import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import HeaderItems from "./HeaderItems";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const menu = [
    { name: "HOME", icon: HiHome },

    { name: "SEARCH", icon: HiMagnifyingGlass },

    { name: "WATCH LIST", icon: HiPlus },

    { name: "ORIGNALS", icon: HiStar },

    { name: "MOVIES", icon: HiPlayCircle },

    { name: "SERIES", icon: HiTv },
  ];
  return (
    <div className="flex items-center justify-between py-4 pr-4">
      <div className="flex gap-7 items-center">
        <img
          src={logo}
          className="w-[150px] object-cover md:w-[200px] lg:w-[210px]"
        />
        <div className="hidden lg:flex gap-7 items-center">
          {menu.map((items) => (
            <HeaderItems name={items.name} Icon={items.icon} />
          ))}
        </div>
        <div className="flex gap-5 lg:hidden items-center">
          {menu.map(
            (items, index) =>
              index < 3 && <HeaderItems name={""} Icon={items.icon} />
          )}
        </div>
        <div className="lg:hidden " onClick={()=>setToggle(!toggle)}>
          <HeaderItems name={""} Icon={HiDotsVertical}></HeaderItems>
          {toggle?<div className="absolute mt-10 bg-[#121212] border-[1px] border-gray-700 p-3 gap-5">
            {menu.map(
              (items, index) =>
                index > 2 && <HeaderItems name={items.name} Icon={items.icon} />
            )}
          </div>:null}
        </div>
      </div>
      <div className="bg-white  h-[40px] w-[40px] rounded-full">.</div>
    </div>
  );
};

export default Header;
