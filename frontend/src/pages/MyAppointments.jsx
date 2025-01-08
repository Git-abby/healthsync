import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);
  console.log(doctors);
  return (
    <div className="border-2 border-gray-200 rounded-lg p-5 bg-gray-50 shadow-md flex flex-col gap-y-5">
      <h3 className="text-lg font-semibold text-gray-800">My Appointments</h3>
      <div className="flex flex-col gap-y-4">
        {doctors.slice(0, 2).map((doctor, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-4 flex items-center gap-x-4 bg-white shadow-sm">
            <div>
              <img
                src={doctor.image}
                alt={`Doctor ${doctor.name}`}
                className="w-32 bg-primary-light object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium text-gray-700">
                {doctor.name}
              </h3>
              <p className="text-sm text-gray-500">{doctor.speciality}</p>

              <p className="mt-2 text-sm text-gray-400">Address:</p>
              <p className="text-sm text-gray-600">{doctor.address.line1}</p>
              <p className="text-sm text-gray-600">{doctor.address.line2}</p>

              <p className="mt-2 text-sm text-gray-600">
                Date & Time: 25, july, 2025 | 8:30 PM
              </p>
            </div>
            <div className="flex flex-col gap-y-2">
              <button className="bg-primary-light text-white text-sm font-medium py-2 px-4 rounded hover:bg-primary transition-all">
                Pay Online
              </button>
              <button className="border text-black text-sm font-medium py-2 px-4 rounded hover:bg-red-400 transition-all">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
