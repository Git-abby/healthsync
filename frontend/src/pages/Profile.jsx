import React, { useState } from "react";
import { assets } from "../assets/assets";

const Profile = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [userData, setUserData] = useState({
    name: "John Doe",
    image: assets.profile_pic,
    email: "john.doe@example.com",
    phone: " +1 (555) 123-4567",
    address: {
      address_line_1: "125 West Park Dr",
      address_line_2: "San Francisco, CA",
    },
    genger: "Male",
    date_of_birth: "2025-01-05",
  });
  return (
    <div className="flex flex-col md:flex-row items-center ">
      <div className="md:w-1/3 text-center mb-8 md:mb-0">
        <img
          src={assets.profile_pic}
          alt="Profile Picture"
          className="rounded-full w-48 h-48 mx-auto mb-4 border-4 border-primary transition-transform duration-300 hover:scale-105 ring ring-gray-300"
        />
        {/* <button className="mt-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary transition-colors duration-300 ring ring-gray-300 hover:ring-indigo-300">
          Edit Profile
        </button> */}
      </div>
      <div className="md:w-2/3 md:pl-8">
        {isEditable ? (
          <input
            name="name"
            type="text"
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, name: e.target.value }))
            }
            value={userData.name}
            required
            className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3  mb-4 rounded-md outline-blue-600"
            placeholder={userData.name}
          />
        ) : (
          <>
            <h1 className="text-2xl font-bold text-primary mb-4">
              {userData.name}
            </h1>
            <hr className="mb-3 h-[1px] bg-primary-light"/>
          </>
        )}
        <h2 className="text-xl font-semibold text-primary mb-4">
          Contact Information
        </h2>
        <ul className="space-y-2 text-gray-700">
          {isEditable ? (
            <input
              name="email"
              type="email"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, email: e.target.value }))
              }
              value={userData.email}
              required
              className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3  mb-4 rounded-md outline-blue-600"
              placeholder={userData.email}
            />
          ) : (
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-primary "
                viewBox="0 0 20 20"
                fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              {userData.email}
            </li>
          )}

          {isEditable ? (
            <input
              name="phone"
              type="text"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
              value={userData.phone}
              required
              className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3  mb-4 rounded-md outline-blue-600"
              placeholder={userData.phone}
            />
          ) : (
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-primary"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {userData.phone}
            </li>
          )}
          {isEditable ? (
            <>
              <input
                name="address"
                type="text"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: {
                      ...prev.address,
                      address_line_1: e.target.value,
                    },
                  }))
                }
                value={userData.address.address_line_1}
                required
                className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3  mb-4 rounded-md outline-blue-600"
                placeholder={userData.address.address_line_1}
              />
              <input
                name="address"
                type="text"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: {
                      ...prev.address,
                      address_line_2: e.target.value,
                    },
                  }))
                }
                value={userData.address.address_line_2}
                required
                className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3  mb-4 rounded-md outline-blue-600"
                placeholder={userData.address.address_line_2}
              />
            </>
          ) : (
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-primary "
                viewBox="0 0 20 20"
                fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              {userData.address.address_line_1} <br />
              {userData.address.address_line_2}
            </li>
          )}
        </ul>

        {isEditable ? (
          <button
            onClick={() => {
              setIsEditable(false);
            }}
            className="mt-4 bg-primary-light text-white px-4 py-2 rounded-lg hover:bg-primary transition-colors duration-300">
            Save Profile
          </button>
        ) : (
          <button
            onClick={() => {
              setIsEditable(true);
            }}
            className="mt-4 bg-primary-light text-white px-4 py-2 rounded-lg hover:bg-primary transition-colors duration-300">
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
