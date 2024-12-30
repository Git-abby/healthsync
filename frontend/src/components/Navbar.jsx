import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

// ICONS
import { ArrowDropDown, ArrowDropDownCircle } from "@mui/icons-material";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  const handleLogout = () => {
    setToken(false);
    navigate("/");
  };
  return (
    <div className="flex items-center justify-between text-sm mb-5 py-4 border-b border-b-gray-200">
      <img className="w-44 cursor-pointer" src={assets.logo} alt="logo" />
      <ul className="hidden md:flex items-center gap-5 font-medium">
        <NavLink to={"/"}>
          <li className="py-1">Home</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/4 m-auto hidden " />
        </NavLink>
        <NavLink to={"/doctors"}>
          <li>All Doctors</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/4 m-auto hidden" />
        </NavLink>
        <NavLink to={"/about"}>
          <li>About</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/4 m-auto hidden" />
        </NavLink>
        <NavLink to={"/contact"}>
          <li>Contact</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/4 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img
              className="w-8 rounded-full"
              src={assets.profile_pic}
              alt="profile pic"
            />
            <ArrowDropDownCircle className="w-2.5" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-500 z-20 hidden group-hover:block">
              <ul className="min-w-36 bg-stone-50 flex flex-col justify-center items-start gap-y-2 p-4">
                <li
                  onClick={() => navigate("profile")}
                  className="hover:text-primary cursor-pointer">
                  Profile
                </li>
                <li
                  onClick={() => navigate("my-appointments")}
                  className="hover:text-primary cursor-pointer">
                  Appointments
                </li>
                <li
                  onClick={handleLogout}
                  className="hover:text-primary cursor-pointer">
                  Logout
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <button
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block "
            onClick={() => navigate("/login")}>
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
