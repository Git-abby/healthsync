import React, { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../context/AdminContext";

const DoctorList = () => {
  const { aToken, doctors, getAllDoctors, changeAvailability } =
    useContext(AdminContext);

  useEffect(() => {
    if (aToken) {
      getAllDoctors();
    }
  }, [aToken]);

  return (
    <div className="m-5 max-h-[90vh] overflow-y-scroll">
      <h1 className="text-lg font-medium">All Doctors</h1>
      <div className="w-full flex flex-wrap gap-4 pt-5 gap-y-6">
        {doctors.map((doc, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl max-w-56 overflow-hidden cursor-pointer group">
            <img
              src={doc.image}
              className="bg-gray-200 group-hover:bg-primary transition-all duration-500"
              alt={doc.name}
            />
            <div className="p-4">
              <p className="text-neutral-800 text-lg font-medium">{doc.name}</p>
              <p className="text-zinc-600 text-sm">{doc.speciality}</p>
              <div className="flex items-center gap-1 mt-2 text-sm">
                <input
                  type="checkbox"
                  onChange={() => changeAvailability(doc._id)}
                  checked={doc.available}
                />
                <p>Available</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
