import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";

const RelatedDoctors = ({ id, speciality }) => {
  const { doctors } = useContext(AppContext);
  const [relatedDoc, setRelatedDoc] = useState();

  const navigate = useNavigate();
  const getRelatedDocs = async () => {
    if (speciality) {
      const getDocs = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id != id
      );
      // console.log(getDocs)
      setRelatedDoc(getDocs);
    }
  };
  useEffect(() => {
    getRelatedDocs();
  }, [id, speciality]);
  return (
    <div>
      <h3 className="text-center text-2xl">Related Doctors</h3>
      <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8 max-md:justify-center mt-12">
        {relatedDoc?.slice(0,5).map((doctor, index) => (
        <div
        key={index}
        onClick={() => {navigate(`/appointment/${doctor._id}`); scrollTo(0,0)}}
        className="border rounded-md overflow-hidden max-md:max-w-[300px] hover:scale-105 transition-all cursor-pointer">
        <img
          src={doctor.image}
          className="w-full object-contain object-top bg-gray-200"
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
  );
};

export default RelatedDoctors;
