import React, { useEffect, useRef, useState } from "react";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { FaCircleUser } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";

const NavBar = ({ search, setSearch }) => {
  const router = useRouter();
  const ref = useRef(null);
  const location = usePathname();

  useEffect(() => {
    if (location === "/search") ref.current.focus();
  }, []);

  return (
    <div className="bg-white flex items-center justify-between gap-6 px-6 py-3 shadow-sm rounded-lg">
      <div className="flex gap-3 items-center">
        <span
          className="text-gray-500 hover:text-blue-600 cursor-pointer transition-colors font-medium"
          onClick={() => router.push("/")}
        >
          Home
        </span>
        <span className="text-gray-300">/</span>
        <span className="font-semibold text-gray-700 cursor-pointer">
          {location === "/search" ? "Search" : "Dashboard"}
        </span>
      </div>
      <div
        className="w-[350px] bg-slate-100 flex items-center px-3 py-2 rounded-lg shadow-inner hover:bg-slate-200 transition-colors cursor-pointer"
        onClick={() => router.push("/search")}
      >
        <IoSearchOutline className="text-gray-500" />
        <input
          ref={ref}
          placeholder="Search anything..."
          value={search && search}
          onChange={(e) => (setSearch ? setSearch(e.target.value) : "")}
          type="search"
          className="outline-none pl-2 w-full bg-transparent text-gray-700 placeholder-gray-400"
        />
      </div>
      <div className="w-[120px] md:block hidden">
        <ul className="flex gap-6 [&>li]:cursor-pointer">
          <li className="hover:text-blue-600 transition-colors">
            <HiOutlineBellAlert size={22} />
          </li>
          <li className="hover:text-blue-600 transition-colors">
            <FaCircleUser size={22} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;