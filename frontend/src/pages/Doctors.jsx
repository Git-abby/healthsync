import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";

function Doctors() {
  const { speciality } = useParams();
  const { doctors, specialityData } = useContext(AppContext);
  const [filterDoctors, setFilterDoctors] = useState([]);
  const navigate = useNavigate();

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
    <div className="flex flex-col justify-center items-start">
      <p className="my-5 px-8 text-md">Browse through the doctors Specialist</p>
      <div className="flex gap-x-3">
        <nav className="bg-white shadow-lg min-w-[240px] px-4 font-[sans-serif]">
          {/* <div className=""> */}
            <ul className="">
              {specialityData.map((item, index) => (
                <li
                  key={index}
                  onClick={() =>
                    speciality === item.speciality
                      ? navigate("/doctors")
                      : navigate(`/doctors/${item.speciality}`)
                  }>
                  <a
                    href="javascript:void(0)"
                    className={`text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all ${
                      speciality === item.speciality
                        ? "text-blue-600 bg-blue-50"
                        : ""
                    }`}>
                    {item.speciality}
                  </a>
                </li>
              ))}
              <li></li>
            </ul>
          {/* </div> */}
        </nav>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-md:justify-center">
          {filterDoctors.slice(0, 10).map((doctor, index) => (
            <div
              key={index}
              onClick={() => navigate(`/appointment/${doctor._id}`)}
              className="border rounded-md overflow-hidden max-md:max-w-[300px] hover:scale-105 transition-all">
              <img
                src={doctor.image}
                className="w-full h-60 object-contain object-top bg-gray-200"
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
