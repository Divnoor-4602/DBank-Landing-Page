import React, { useState } from "react";
import bankLogo from "../assets/logo.svg";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import { navLinks } from "../constants/index.js";

const navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="py-6 flex justify-between items-center">
        {/* <img src={bankLogo} alt="bank logo" className="w-[124px] h-[32px]" /> */}
        <div className="font-semibold text-2xl flex gap-1">
          <div className="bg-blue-gradient h-8 w-8 rounded-full"></div>
          <div>
            Div<span className="text-gradient">Bank</span>
          </div>
        </div>
        {/* menu item links */}
        <div className="hidden sm:flex gap-10 items-center">
          {navLinks.map((link) => (
            <div key={link.id} className="cursor-pointer text-gradient">
              {link.title}
            </div>
          ))}
        </div>
        {/* sidebar mobile responsiveness */}
        <div className="sm:hidden flex items-center">
          {/* sidebar icon */}
          <img
            src={toggle ? close : menu}
            className="object-contain w-6 h-6"
            alt="menu-button"
            onClick={() => setToggle((prevValue) => !prevValue)}
          />
        </div>
      </div>
      {/* sidebar menu */}

      <div
        className={`${
          toggle ? "flex" : "hidden"
        } p-6 bg-black-gradient absolute right-0 mx-4 py-4 min-w-[140px] rounded-lg sidebar`}
      >
        <div className="flex flex-col gap-4 items-center">
          {navLinks.map((links) => (
            <div key={links.id} className="font-poppins cursor-pointer">
              {links.title}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default navbar;
