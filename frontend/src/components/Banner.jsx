import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();

  return (
    <div className="flex bg-gradient-to-r from-primary to-[#9F5FFF] font-sans px-6 sm:px-10 md:px-14 lg:px-14 py-12 my-20">
      <div className="flex-1 container mx-auto flex flex-col justify-center items-start text-center">
        <h2 className="text-white sm:text-4xl text-3xl font-bold md:text-2xl">
          Book an Appointment
        </h2>
        <p className="text-white text-2xl font-bold text-center mb-8 md:text-xl">
          With 100+ Trusted Doctors
        </p>

        <button
          onClick={() => {
            navigate("/login");
            scrollTo(0, 0);
          }}
          type="button"
          className="bg-white text-sm text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-slate-100">
          Get Started
        </button>
      </div>
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
        <img
          src={assets.appointment_img}
          alt="appointment_newsletter_img"
          className="w-full absolute lg:bottom-[-32%] md:bottom-[-35%] right-0 max-w-md"
        />
      </div>
    </div>
  );
}

export default Banner;
