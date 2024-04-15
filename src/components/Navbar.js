import React, { useState } from "react";
import { GoPerson } from "react-icons/go";
import { FiHome, FiArrowUpRight } from "react-icons/fi";
import { GrNotes } from "react-icons/gr";
import { MdOutlineHome } from "react-icons/md";
import { IoMdUnlock } from "react-icons/io";
import { BsFillSendFill } from "react-icons/bs";
import { FaSuitcaseRolling } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
    <div
      className={`h-screen fixed top-0 left-0 flex flex-col gap-3 rounded0 py-1 cursor-pointer  text-black bg-[#D8D8D8]`}
    >
      <>
        <div className="flex flex-col font-sans px-3 ">
          <div className="w-56 h-16 flex justify-center items-center">
        
            <span className="font-bold text-xl font-sans">Venture</span>
          </div>
          <div className="flex gap-3 items-center mt-[-10px] hover:bg-[#fff] p-2 rounded">
            <FiHome />
            <h1>Dashboard</h1>
          </div>
          <div className="flex gap-3 items-center hover:bg-[#fff] p-2 rounded">
            <FiArrowUpRight />
            <h1>Notification</h1>
          </div>
          <div className="flex gap-3 items-center hover:bg-[#fff] p-2 rounded">
            <GrNotes />
            <h1>Notes</h1>
          </div>
          <div className="flex gap-3 items-center hover:bg-[#fff] p-2 rounded">
            <GoPerson />
            <h1>Tasks</h1>
          </div>
          <div className="flex gap-3 items-center hover:bg-[#fff] p-2 rounded">
            <GoPerson />
            <h1>Emails</h1>
          </div>
          <div className="flex gap-3 items-center hover:bg-[#fff] p-2 rounded">
            <GoPerson />
            <h1>Calender</h1>
          </div>
        </div>
        <hr />
        <div className="flex flex-col  px-3">
          <div className="flex gap-3 items-center hover:bg-[#fff] p-2 rounded">
            <MdOutlineHome />
            <h1>Analytics</h1>
          </div>
          <div className="flex gap-3 items-center hover:bg-[#fff] p-2 rounded">
            <IoMdUnlock />
            <h1>Contacts</h1>
          </div>
          <div className="flex gap-3 items-center hover:bg-[#fff] p-2 rounded">
            <BsFillSendFill />
            <h1>Companies</h1>
          </div>
        </div>
        <hr />
        <div className="flex flex-col  px-3">
          <div className="flex gap-3 items-center hover:bg-[#fff] p-2 rounded">
            <FaSuitcaseRolling />
            <h1>Integrations</h1>
          </div>
          <div className="flex gap-3 items-center hover:bg-[#fff] p-2 rounded">
            <TbReportSearch />
            <h1>Settings</h1>
          </div>
        </div>
      </>
    </div>
      <Outlet/>
      </>
  );
};

export default Sidebar;
