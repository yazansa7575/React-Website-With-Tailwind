import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { AiOutlineShoppingCart, AiFillFire } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { FaTruckMoving, FaWallet } from "react-icons/fa6";
import { MdFavorite, MdDiscount } from "react-icons/md";
import { TbHelpSquareFilled } from "react-icons/tb";
import { FaUserFriends } from "react-icons/fa";

const NavBar = () => {
  const [naveBar, setNaveBar] = useState(false);
  const [isscrollY, setIsScrollY] = useState(false);
  addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      setIsScrollY(true);
    } else setIsScrollY(false);
  });
  return (
    <div
      className={`flex items-center  gap-6 w-[100%] z-50 sticky top-0 duration-300  bg-white  ${
        isscrollY ? " p-3" : " p-5"
      } `}
    >
      {/* left side  */}
      <div className="flex items-center lg:text-3xl md:text-xl gap-1">
        <IoMdMenu
          size={30}
          className=" cursor-pointer"
          onClick={() => setNaveBar(!naveBar)}
        />
        <h1 className=" ">
          <span className=" duration-200 hover:text-red-600">B</span>
          <span className=" duration-200 hover:text-red-600">e</span>
          <span className=" duration-200 hover:text-red-600">s</span>
          <span className=" duration-200 hover:text-red-600">t</span>{" "}
          <span className="font-bold">Eats</span>
        </h1>
      </div>
      {/* middel */}
      <div className="hidden lg:flex items-center  bg-gray-400 text-white  rounded-full">
        <p className=" bg-black text-white rounded-full  p-2">Delivery</p>
        <p className=" p-2  ">Pickup</p>
      </div>
      {/* search */}
      <div className=" p-3 bg-gray-200 rounded-full flex gap-2 flex-1 items-center ">
        <FaSearch size={17} />
        <input
          className=" bg-gray-200 text-black placeholder:text-black focus: outline-none w-[100%]  text-sm md:text-lg"
          type="text"
          placeholder="Search..."
        />
      </div>
      {/* card button  */}
      <div className="mx-2  ">
        <button className="flex flex-col gap-1 duration-300 hover:font-bold">
          <AiOutlineShoppingCart size={20} />
          <span>Cart</span>
        </button>
      </div>
      {/* overlay  */}
      {naveBar ? (
        <div className="  bg-black/50 h-screen w-full fixed top-0 left-0 "></div>
      ) : (
        ""
      )}
      {/* sideBar */}
      <div
        className={`   h-screen md:w-[280px] w-[100%]  fixed top-0 left-0 duration-300  bg-white overflow-y-auto ${
          naveBar ? "left-0" : "left-[-100%]"
        }`}
      >
        <IoCloseSharp
          size={28}
          onClick={() => setNaveBar(!naveBar)}
          className=" absolute right-4 top-4 cursor-pointer"
        />
        <h3 className=" lg:text-3xl m-5  ">
          Best
          <span className="font-bold text-red-600">
            <u>Eats</u>
          </span>
        </h3>
        <nav className="p-4 pr-0">
          <ul className="flex gap-3 flex-col">
            <li className="flex items-center gap-2 cursor-pointer duration-150 w-[100%] rounded-sm p-2 hover:bg-slate-200 ">
              <FaTruckMoving size={21} />
              <p className="text-xl">Orders</p>
            </li>
            <li className="flex items-center gap-2 cursor-pointer duration-150 w-[100%] rounded-sm p-2 hover:bg-slate-200 ">
              <MdFavorite size={21} />
              <p className="text-xl">Favorites</p>
            </li>
            <li className="flex items-center gap-2 cursor-pointer duration-150 w-[100%] rounded-sm p-2 hover:bg-slate-200 ">
              <FaWallet size={21} />
              <p className="text-xl">Wallet</p>
            </li>
            <li className="flex items-center gap-2 cursor-pointer duration-150 w-[100%] rounded-sm p-2 hover:bg-slate-200 ">
              <TbHelpSquareFilled size={21} />
              <p className="text-xl">Help</p>
            </li>
            <li className="flex items-center gap-2 cursor-pointer duration-150 w-[100%] rounded-sm p-2 hover:bg-slate-200 ">
              <MdDiscount size={21} />
              <p className="text-xl">Promotions</p>
            </li>
            <li className="flex items-center gap-2 cursor-pointer duration-150 w-[100%] rounded-sm p-2 hover:bg-slate-200 ">
              <AiFillFire size={21} />
              <p className="text-xl">Best ones</p>
            </li>
            <li className="flex items-center gap-2 cursor-pointer duration-150 w-[100%] rounded-sm p-2 hover:bg-slate-200 ">
              <FaUserFriends size={21} />
              <p className="text-xl">Invite Friendes</p>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
