import React, { useContext } from "react";

// ICONS
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import ListAltIcon from "@mui/icons-material/ListAlt";
import TuneIcon from "@mui/icons-material/Tune";
import { AdminContext } from "../context/AdminContext";
import { NavLink, useNavigate } from "react-router-dom";

const SideBar = () => {
  const { aToken } = useContext(AdminContext);
  const navigate = useNavigate();

  return (
    <div className="flex h-[calc(100vh-64px)] bg-gray-100">
      {/* <!-- sidebar --> */}
      {aToken && (
        <div className="hidden md:flex flex-col w-64 bg-gray-800">
          <div className="flex flex-col flex-1 overflow-y-auto">
            <nav className="flex-1 py-4 bg-gray-800">
              <NavLink
                to={"dashboard"}
                // className="flex items-center gap-x-2 px-4 py-2 text-gray-100 hover:bg-gray-700 cursor-pointer"
                className={({ isActive }) =>
                  `flex items-center gap-x-2 px-4 py-2 text-gray-100 hover:bg-gray-700 hover:border-r-8 border-r-primary  cursor-pointer ${
                    isActive ? "border-r-8 border-r-primary bg-gray-700" : ""
                  }`
                }>
                <DashboardIcon />
                Dashboard
              </NavLink>
              <NavLink
                to={"all-appointments"}
                className={({ isActive }) =>
                  `flex items-center gap-x-2 px-4 py-2 text-gray-100 hover:bg-gray-700 hover:border-r-8 border-r-primary cursor-pointer ${
                    isActive ? "border-r-8 border-r-primary bg-gray-700" : ""
                  }`
                }>
                <CalendarMonthIcon />
                Appointments
              </NavLink>
              <NavLink
                to={"add-doctor"}
                className={({ isActive }) =>
                  `flex items-center gap-x-2 px-4 py-2 text-gray-100 hover:bg-gray-700 hover:border-r-8 border-r-primary cursor-pointer ${
                    isActive ? "border-r-8 border-r-primary bg-gray-700" : ""
                  }`
                }>
                <PersonAddAltIcon />
                Add Doctor
              </NavLink>

              <NavLink
                to={"doctor-list"}
                className={({ isActive }) =>
                  `flex items-center gap-x-2 px-4 py-2 text-gray-100 hover:bg-gray-700 cursor-pointer ${
                    isActive ? "border-r-8 border-r-primary bg-gray-700" : ""
                  }`
                }>
                <ListAltIcon />
                Doctor List
              </NavLink>

              <NavLink
                to={"settings"}
                className={({ isActive }) =>
                  `flex items-center gap-x-2 px-4 py-2 text-gray-100 hover:bg-gray-700 hover:border-r-8 border-r-primary cursor-pointer ${
                    isActive ? "border-r-8 border-r-primary bg-gray-700" : ""
                  }`
                }>
                <TuneIcon />
                Settings
              </NavLink>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
