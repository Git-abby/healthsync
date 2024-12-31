import React from "react";
import { assets } from "../assets/assets";
import { EastOutlined } from "@mui/icons-material";

import { Link } from "react-scroll";

export const Header = () => {
  return (
    <div className="grid lg:grid-cols-2 items-center lg:gap-y-6 bg-primary">
      <div className="flex flex-col lg:items-start items-center gap-y-4 max-lg:order-1 max-lg:text-center sm:p-12 p-4">
        <h2 className="text-white lg:text-5xl text-3xl font-bold lg:!leading-[56px]">
          Creating a healthier tomorrow through primary care
        </h2>
        <p className="flex items-center justify-center lg:gap-3 gap-0 text-gray-300 mt-6 text-base leading-relaxed">
          <img src={assets.group_profiles} className="w-24" alt="group-users" />
          Skip the Waiting Room is the best way to find walk in clinics in your
          area.
        </p>

        <button className="px-4 py-2.5 flex items-center justify-center shrink-0 cursor-pointer text-sm font-semibold text-gray-800 bg-gray-50 hover:scale-105 transition-all rounded-full gap-3">
         <Link to="speciality" smooth={true} duration={500}>
          Book Appointment
          <EastOutlined className="pt-0.5" />
         </Link>
        </button>
      </div>

      <div className="lg:h-[480px] flex items-center">
        <img
          src={assets.header_img}
          className="w-full h-full object-cover"
          alt="Dining Experience"
        />
      </div>
    </div>
  );
};
