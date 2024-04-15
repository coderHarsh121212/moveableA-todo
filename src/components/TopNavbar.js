import React from "react";
import { Outlet } from "react-router-dom";
import HomePage from "../pages/HomePage";

const TopNavbar = () => {
  return (
    <div className="w-full h-fit bg-white  flex flex-col py-3 ">
      <div className="flex justify-between pl-72 pr-10 items-center border-b-2 py-2">
        <input
          type="search"
          placeholder="Search"
          className="p-2 outline-none border-gray-400 border-2 rounded"
        ></input>
        <div className="flex gap-3">
          <p>Help center</p>
          <p>UserNAme</p>
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
