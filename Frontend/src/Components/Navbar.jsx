import React from "react";
import { RiArrowDropDownLine, RiGlobeFill, RiGlobeLine } from "react-icons/ri";
import { CiGlobe } from "react-icons/ci";
import RegPopUp from "./RegPopUp";

const Navbar = () => {
  return (
    <>
      <RegPopUp />

      <div className=" side_padding  flex justify-between mx-auto py-4">
        <img src="/Svgs/logo.svg" alt="logo" />
        <ul className="unstyled flex gap-5 ">
          <li className=" font-semibold text-[15px]  items-center  hidden   md:flex ">
            Fiverr Pro <RiArrowDropDownLine size={25} />{" "}
          </li>
          <li className=" font-semibold text-[15px] text-gray-500 items-center hidden  md:flex">
            Explore <RiArrowDropDownLine size={25} />{" "}
          </li>
          <li className=" font-semibold text-[15px] text-gray-500 items-center hidden md:flex ">
            <CiGlobe size={20} /> EN{" "}
          </li>
          <li className=" font-semibold text-[15px] text-gray-500 items-center hidden sm:flex ">
            Become a Seller
          </li>
          <li className="flex font-semibold text-[15px] text-gray-500 items-center">
            Sign in
          </li>
          <li className="flex hover:bg-black hover:text-white transition-all font-semibold text-[15px] text-gray-500 items-center">
            <button className="outline rounded-md px-3 py-1">Join</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
