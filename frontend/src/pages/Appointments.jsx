import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import { assets } from "../assets/assets";
import { Button } from "react-scroll";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointments = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const [doctorInfo, setDoctorInfo] = useState([]);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("10:00 am");

  const getAllDoctorSLots = async () => {
    //   Getting today's date
    const today = new Date();

    let collectedSlots = []; // Temporary array for all slots

    //   console.log(c);

    for (let i = 0; i < 7; i++) {
      // Date with Index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // seetinf end time of the date
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      // console.log(currentDate, endTime);

      // Setting up Hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlot = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        timeSlot.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        //increamenting time by 30 mins
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      collectedSlots.push(timeSlot);
    }
    // Update state once with all slots
    setDocSlots(collectedSlots);
  };

  const fetchDoctorInfo = async () => {
    const getDocInfo = doctors.find((doc) => doc._id === docId);
    setDoctorInfo(getDocInfo);

    console.log(doctorInfo);
  };

  useEffect(() => {
    fetchDoctorInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAllDoctorSLots();
  }, [doctorInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);
  return (
    <div className="flex flex-col gap-8 font-[sans-serif] max-w-5xl max-sm:max-w-sm mx-auto p-4">
      <div className="flex gap-8 font-[sans-serif] max-w-5xl max-sm:max-w-sm mx-auto p-4">
        <div className="">
          <img
            src={doctorInfo.image}
            className="bg-primary rounded-lg sm:max-w-72"
          />
        </div>

        <div className="border py-2 px-4 rounded-lg border-gray-200">
          <div className="flex flex-1 flex-col gap-2">
            <h3 className=" flex gap-1 text-xl font-extrabold text-gray-800">
              {doctorInfo.name}{" "}
              <img src={assets.verified_icon} alt="verified doc" />
            </h3>
            <div className="flex gap-x-3">
              <p>
                {doctorInfo.degree} - {doctorInfo.speciality}
              </p>
              <span className="border rounded-full px-2 bg-gray-50">
                {doctorInfo.experience}
              </span>
            </div>
            <div>
              <p className="flex items-center gap-x-2 text-lg text-gray-700">
                About <img src={assets.info_icon} alt="about icon" />
              </p>
              <p className="text-sm text-gray-800">{doctorInfo.about}</p>
            </div>
          </div>

          <div className="mt-8 text-left">
            <h4 className="text-base font-bold">
              Appointment Fee: {currencySymbol}
              {doctorInfo.fees}
            </h4>
          </div>

          <div className="space-x-3 mt-8">
            <a
              href=""
              className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14px"
                fill="#fff"
                viewBox="0 0 155.139 155.139">
                <path
                  d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                  data-original="#010002"
                />
              </svg>
            </a>
            <a
              href=""
              className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4] active:bg-[#03a9f4]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14px"
                fill="#fff"
                viewBox="0 0 512 512">
                <path
                  d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                  data-original="#03a9f4"
                />
              </svg>
            </a>
            <a
              href=""
              className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5] active:bg-[#0077b5]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14px"
                fill="#fff"
                viewBox="0 0 24 24">
                <path
                  d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                  data-original="#0077b5"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-5 font-medium text-gray-700">
        <h1 className="mb-4 font-bold text-lg">Doctor Appointment Slots</h1>
        <div className="border p-5 rounded-lg">
          <div className="flex gap-3 items-center w-full overflow-x-scroll">
            {docSlots.map((daySlots, dayIndex) => (
              <div
                onClick={() => setSlotIndex(dayIndex)}
                key={dayIndex}
                className={`text-center py-4 min-w-16 rounded-full cursor-pointer ${
                  slotIndex === dayIndex ? "bg-primary text-white" : ""
                }`}>
                <h2>
                  {daySlots[0].datetime.toLocaleDateString("en-US", {
                    weekday: "short",
                  })}
                </h2>
                <h2>
                  {daySlots[0].datetime.getDate().toString().padStart(2, "0")}
                </h2>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3 overflow-x-scroll mt-4">
            {docSlots.length &&
              docSlots[slotIndex].map((item, Timeindex) => (
                <p
                  onClick={() => setSlotTime(item.time)}
                  key={Timeindex}
                  className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                    item.time === slotTime
                      ? "bg-primary text-white"
                      : "text-gray-400 border border-gray-300"
                  }`}>
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>
        </div>
        <div>
          <Button className="bg-primary text-white py-2 px-6 rounded-full  transition-all outline-none hover:scale-105">Book Appointment</Button>
        </div>
      </div>
      <RelatedDoctors id={docId} speciality={doctorInfo.speciality}/>
    </div>
  );
};

export default Appointments;
