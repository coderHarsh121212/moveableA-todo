import React, { useState } from "react";
import { GoPerson, GoGraph } from "react-icons/go";
import { FiHome, FiArrowUpRight } from "react-icons/fi";
import { MdDashboard, MdOutlineHome, MdOutlineEmail } from "react-icons/md";
import { IoMdUnlock } from "react-icons/io";
import { GrNotes } from "react-icons/gr";
import { PiGridFourFill } from "react-icons/pi";
import { RiNotification3Line } from "react-icons/ri";
import { BsFillSendFill } from "react-icons/bs";
import { SlNotebook, SlCalender } from "react-icons/sl";
import { TiContacts } from "react-icons/ti";
import { CiSettings } from "react-icons/ci";
import { FaSuitcaseRolling, FaShoppingBag } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { NavIcon } from "../icons/icons";
import { Outlet } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={`h-screen fixed top-0 left-0 flex flex-col gap-4 rounded  cursor-pointer z-50 ${
          open ? "bg-[#D8D8D8]" : "bg-[#D8D8D8]"
        } text-[#000]`}
      >
        {open ? (
          <>
            <div className="flex flex-col gap-1 font-sans px-3">
              <div className="w-56 h-16 flex justify-self-start">
                {/* <img src={logo} className="ml-[-14px]"></img> */}
              </div>
              <div className="flex gap-3 items-center mt-[-10px] hover:bg-[#fff] p-1 rounded">
                <MdDashboard />
                <h1>Dashboard</h1>
              </div>
              <div className="flex gap-3 items-center hover:bg-[#fff] p-1 rounded">
                <RiNotification3Line />
                <h1>Notification</h1>
              </div>
              <div className="flex gap-3 items-center hover:bg-[#fff] p-1 rounded">
                <GrNotes />
                <h1>Notes</h1>
              </div>
              <div className="flex gap-3 items-center hover:bg-[#fff] p-1 rounded">
                <SlNotebook />
                <h1>Tasks</h1>
              </div>
              <div className="flex gap-3 items-center hover:bg-[#fff] p-1 rounded">
                <MdOutlineEmail />
                <h1>Emails</h1>
              </div>
              <div className="flex gap-3 items-center hover:bg-[#fff] p-1 rounded">
                <SlCalender />
                <h1>Calender</h1>
              </div>
            </div>
            <hr />
            <div className="flex flex-col  px-3">
              <div className="flex gap-3 items-center hover:bg-[#fff] p-1 rounded">
                <GoGraph />
                <h1>Analytics</h1>
              </div>
              <div className="flex gap-3 items-center hover:bg-[#fff] p-1 rounded">
                <TiContacts />
                <h1>Contacts</h1>
              </div>
              <div className="flex gap-3 items-center hover:bg-[#fff] p-1 rounded">
                <FaShoppingBag />
                <h1>Companies</h1>
              </div>
            </div>
            <hr />
            <div className="flex flex-col  px-3">
              <div className="flex gap-3 items-center hover:bg-[#fff] p-1 rounded">
                <PiGridFourFill />
                <h1>Integrations</h1>
              </div>
              <div className="flex gap-3 items-center hover:bg-[#fff] p-1 rounded">
                <CiSettings />
                <h1>Settings</h1>
              </div>
            </div>
            <div className="absolute flex bottom-2 items-center  gap-3 text-sm px-2  w-full justify-center">
              <p className="p-1 text-center text-black bg-white rounded px-2">
                M
              </p>
              <p className="text-center font-bold">Marketing Team</p>
            </div>
          </>
        ) : (
          <div className="flex flex-col gap-9 rounded0 items-center z-50">
            <div className="flex flex-col gap-3 items-center">
              <div className="w-10 h-10 bg-transparent">
                {/* <img src={logo1} alt="logo-half"></img> */}
              </div>
              <div className="flex gap-3 items-center hover:bg-[#fff] p-2 rounded">
                <MdDashboard />
              </div>
              <div className="flex gap-3 items-center hover:bg-[#fff] p-2 rounded">
                <RiNotification3Line />
              </div>
              <div className="flex gap-3 items-center hover:bg-[#fff] p-2 rounded">
                <GrNotes />
              </div>
              <div className="flex gap-3 items-center hover:bg-[#fff] p-2 rounded">
                <SlNotebook />
              </div>
              <div className="flex gap-3 items-center hover:bg-[#fff] p-2 rounded">
                <MdOutlineEmail />
              </div>
              <div className="flex gap-3 items-center hover:bg-[#fff] p-2 rounded">
                <SlCalender />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center hover:bg-[#fff] p-2 rounded">
                <GoGraph />
              </div>
              <div className="flex gap-3 items-center hover:bg-[#fff] p-2 rounded">
                <TiContacts />
              </div>
              <div className="flex gap-3 items-center hover:bg-[#fff] p-2 rounded">
                <FaShoppingBag />
              </div>
            </div>
            <div className="flex flex-col  px-3 gap-5">
              <div className="flex gap-3 items-center hover:bg-[#fff] p-1 rounded">
                <PiGridFourFill />
              </div>
              <div className="flex gap-3 items-center hover:bg-[#fff] p-1 rounded">
                <CiSettings />
              </div>
            </div>
          </div>
        )}
        <div
          className={`absolute  rounded-full bg-black text-white p-1 z-50 ${
            open ? "right-[-15px] top-12" : "left-8 top-12"
          }`}
          onClick={() => setOpen(!open)}
        >
          <NavIcon />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Sidebar;
