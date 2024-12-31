import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <div
      id="speciality"
      className="font-[sans-serif] bg-gradient-to-r from-primary to-indigo-800 py-12 px-4 my-5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white sm:text-4xl text-2xl font-bold text-center mb-1">
          Find a Doctor By Specialty
        </h2>
        <p className="text-white sm:text-lg text-xl font-bold text-center mb-16">
          Choose a specialty below to find local providers, research their
          background, read patient reviews and schedule an appointment.
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 max-md:max-w-lg mx-auto">
          {specialityData.map(
            (item, index) => (
              <div key={index} className="flex flex-col items-center justify-center gap-2 rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
                <img src={item.image} alt="speciality" />
                <h3 className="text-xl font-semibold mb-3">
                 <Link to={`/doctors/${item.speciality}`}>
                 {item.speciality}
                 </Link> 
                </h3>
                <p className="text-gray-300 group-hover:text-gray-500 text-sm">
                  {item.description}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SpecialityMenu;
