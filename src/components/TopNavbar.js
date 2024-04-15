import React from "react";
import { Outlet } from "react-router-dom";
import { QuestionMArk, Search } from "../icons/icons";
import HomePage from "../pages/HomePage";

const TopNavbar = () => {
  return (
    <div className="w-full h-fit bg-white  flex flex-col py-3 ">
      <div className="flex justify-between pl-12  items-center border-b-2 py-2 gap-4 flex-col sm:flex-row  mx-5 sm:mr-10">
        <input
          type="search"
          placeholder="Search"
          className="p-2 outline-none border-gray-400 border-2 rounded w-72"
        ></input>
        <div className="absolute sm:left-[130px] top-8 sm:top-8 left-[260px]">
<Search/>
        </div>
        <div className="flex gap-10 items-center text-xs md:gap-7 gap-5">
          <p className="font-normal text-gray-500 flex gap-1 items-center"><QuestionMArk/> Help center</p>
          <p className="bg-gray-500 text-white p-1 rounded-full h-6 w-6 text-center">H</p>
        </div>
      </div>
      <div>
        <HomePage />
      </div>
      <Outlet/>
    </div>
  );
};

export default TopNavbar;
