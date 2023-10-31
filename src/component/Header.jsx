import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";

import { BURGER_PNG_IMG } from "../utils";
import { useEffect } from "react";

const Header = () => {
  return (
    <div className="p-4 px-10 bg-red-500 flex items-center justify-between">
      <div className="flex items-center gap-10">
        <div className="w-32 flex">
          <img src={BURGER_PNG_IMG} alt="logo" />{" "}
        </div>
        <div className="h-9 text-white font-bold bg-yellow-500 p-2 rounded flex gap-3 items-center">
          <p className="whitespace-nowrap ">Network Status:</p>
          <span>{"🟢"}</span>
        </div>
      </div>

      <div className="">
        <ul className="flex gap-6 text-white font-bold">
          <NavLink to={"/"} activeClassName>
            <li>Home</li>
          </NavLink>
          <NavLink to={"/about"} activeClassName>
            <li>About</li>
          </NavLink>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
