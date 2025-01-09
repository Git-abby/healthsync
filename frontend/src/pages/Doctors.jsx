import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";

import FilterListIcon from "@mui/icons-material/FilterList";

function Doctors() {
  const { speciality } = useParams();
  const { doctors, specialityData } = useContext(AppContext);
  const [filterDoctors, setFilterDoctors] = useState([]);
  const navigate = useNavigate();
  const [showFilter, setShowFilter] = useState(false);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoctors(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoctors(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div className="flex flex-col items-center md:items-start w-full px-4 md:px-8">
      <p className="my-5 text-md text-center md:text-left">
        Browse through the doctors Specialist
      </p>
      <div className="flex items-center gap-2 mb-5 cursor-pointer sm:!hidden">
        <h3
          className={`text-xl font-semibold ${
            showFilter ? "text-primary" : "black"
          }`}>
          Filter
        </h3>
        <FilterListIcon
          onClick={() => setShowFilter((prev) => !prev)}
          className="cursor-pointer"
          sx={{ fontSize: 40, color: `${showFilter ? "#1f7c98" : "black"}` }}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-8 w-full">
        <nav
          className={`bg-white shadow-lg px-4 py-4 md:px-6 md:py-6 font-sans w-full md:w-1/4 ${
            showFilter ? "block" : "hidden sm:block"
          }`}>
          <ul>
            {specialityData.map((item, index) => (
              <li
                key={index}
                onClick={() =>
                  speciality === item.speciality
                    ? navigate("/doctors")
                    : navigate(`/doctors/${item.speciality}`)
                }>
                <a
                  href="#"
                  className={`text-black hover:text-blue-600 text-sm block hover:bg-blue-50 rounded px-4 py-2 transition-all ${
                    speciality === item.speciality
                      ? "text-blue-600 bg-blue-50"
                      : ""
                  }`}>
                  {item.speciality}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {filterDoctors.slice(0, 10).map((doctor, index) => (
            <div
              key={index}
              onClick={() => navigate(`/appointment/${doctor._id}`)}
              className="border rounded-md overflow-hidden hover:scale-105 transition-all cursor-pointer">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-60 object-cover bg-gray-200"
              />
              <div className="flex flex-col gap-1.5 p-4">
                <div className="flex items-center gap-1">
                  <span className="h-3 w-3 rounded-full border border-white bg-green-500 block"></span>
                  <p className="text-green-500 font-medium">Available</p>
                </div>
                <h4 className="text-gray-800 text-base font-bold">
                  {doctor.name}
                </h4>
                <p className="text-gray-600 text-xs mt-1">
                  {doctor.speciality}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Doctors;
