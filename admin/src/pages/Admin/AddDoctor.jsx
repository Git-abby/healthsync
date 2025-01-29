import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";

const AddDoctor = () => {
  const addobj = {
    address_line_1: "",
    address_line_2: "",
  };
  const [img, setImg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [password, setPassword] = useState("");
  const [degree, setDegree] = useState("");
  const [experience, setExperience] = useState("");
  const [address, setAddress] = useState(addobj);
  const [about, setAbout] = useState("");
  const [fees, setFees] = useState(0);

  // get the token from admin context
  const { aToken, baseURL } = useContext(AdminContext);

  // HandleSubmit for Adding doctor
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any field is empty
    try {
      if (!img) {
        return toast.error("Image not selected!");
      }
      if (
        !name.trim() ||
        !email.trim() ||
        !speciality.trim() ||
        !degree.trim() ||
        !experience.trim() ||
        !address ||
        !about.trim() ||
        !fees ||
        !password
      ) {
        return toast.error("All fields must be filled");
      }
      // Create a new FormData object
      const formData = new FormData();

      // Append all fields to FormData
      formData.append("image", img); // File
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("speciality", speciality);
      formData.append("degree", degree);
      formData.append("experience", experience);
      formData.append("address", JSON.stringify(address));
      formData.append("about", about);
      formData.append("fees", fees);

      const { data } = await axios.post(
        baseURL + "/api/admin/add-doctor",
        formData,
        {
          headers: { aToken },
        }
      );
      console.log(data);
      if (data.success) {
        toast.success(data.message);
        setName("");
        setEmail("");
        setDegree("");
        setPassword("");
        setImg(false);
        setAddress(addobj);
        setAbout("");
        setSpeciality("");
        setExperience("");
        setFees("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center pb-4 border-b">
        <h3 className="text-2xl font-semibold text-gray-800">Add Doctor</h3>
      </div>

      {/* Form */}
      <form className="space-y-6 mt-4" onSubmit={handleSubmit}>
        {/* Image Upload */}
        <div>
          <label
            htmlFor="doctor-img"
            className="block text-sm font-medium text-gray-700 mb-2">
            Upload Doctor's Picture
          </label>
          <input
            onChange={(e) => setImg(e.target.files[0])}
            type="file"
            id="doctor-img"
            style={{ display: "none" }}
            // required
            name="doctor-img"
          />
          <label
            htmlFor="doctor-img"
            className={`flex items-center justify-center w-32 h-32 ${
              img ? "bg-primary-light" : "bg-gray-100 hover:bg-gray-300"
            }  border border-dashed border-gray-300 rounded-full p-[2px] cursor-pointer`}>
            <img
              src={img ? URL.createObjectURL(img) : assets.upload_area}
              alt="Upload icon"
              className="w-[100%] h-[100%] object-contain rounded-full"
              name="doctor-img"
            />
          </label>
          <p className="text-sm text-gray-500 mt-2">
            Click to upload a picture
          </p>
        </div>

        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-cyan-500 focus:border-cyan-500"
            placeholder="Doctor's Name"
          />
        </div>

        {/* Speciality */}
        <div>
          <label
            htmlFor="speciality"
            className="block text-sm font-medium text-gray-700 mb-2">
            Speciality
          </label>
          <select
            onChange={(e) => setSpeciality(e.target.value)}
            value={speciality}
            id="speciality"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-cyan-500 focus:border-cyan-500">
            <option value={""}>Select Speciality</option>
            <option value={"General Physician"}>General Physician</option>
            <option value={"Dermatologist"}>Dermatologist</option>
            <option value={"Cardiologist"}>Cardiologist</option>
            <option value={"Pediatrician"}>Pediatrician</option>
            <option value={"Gynecologist"}>Gynecologist</option>
            <option value={"Neurologist"}>Neurologist</option>
          </select>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-cyan-500 focus:border-cyan-500"
            placeholder="doctor@example.com"
          />
        </div>

        {/* degree */}
        <div>
          <label
            htmlFor="degree"
            className="block text-sm font-medium text-gray-700 mb-2">
            Degree
          </label>
          <input
            type="text"
            id="degree"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-cyan-500 focus:border-cyan-500"
            placeholder="e.g., MBBS, MD"
          />
        </div>

        {/* Experience */}
        <div>
          <label
            htmlFor="experience"
            className="block text-sm font-medium text-gray-700 mb-2">
            Experience
          </label>
          <select
            onChange={(e) => setExperience(e.target.value)}
            value={experience}
            id="experience"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-cyan-500 focus:border-cyan-500">
            <option value={""}>Select Experience Level</option>
            {Array.from({ length: 10 }, (_, i) => (
              <option key={i + 1} value={`${i + 1} Year${i > 0 ? "s" : ""}`}>
                {i + 1} Year{i > 0 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-2">
            Create Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            id="password"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-cyan-500 focus:border-cyan-500"
            placeholder="Password"
          />
        </div>

        {/* Address */}
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700 mb-2">
            Address
          </label>
          <input
            onChange={(e) =>
              setAddress((prev) => ({
                ...prev,
                address_line_1: e.target.value,
              }))
            }
            value={address.address_line_1}
            id="address1"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-cyan-500 focus:border-cyan-500"
            rows="1"
            placeholder="Address line 1"
          />
          <input
            onChange={(e) =>
              setAddress((prev) => ({
                ...prev,
                address_line_2: e.target.value,
              }))
            }
            value={address.address_line_2}
            id="address2"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-cyan-500 focus:border-cyan-500"
            rows="1"
            placeholder="Address line 2"
          />
        </div>
        {/* Fees */}
        <div>
          <label
            htmlFor="fees"
            className="block text-sm font-medium text-gray-700 mb-2">
            Doctor's Fees
          </label>
          <input
            onChange={(e) => setFees(e.target.value)}
            value={fees}
            type="number"
            id="fees"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-cyan-500 focus:border-cyan-500"
            placeholder="Consultation fees"
          />
        </div>

        {/* About */}
        <div>
          <label
            htmlFor="about"
            className="block text-sm font-medium text-gray-700 mb-2">
            About
          </label>
          <textarea
            onChange={(e) => setAbout(e.target.value)}
            value={about}
            id="about"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-cyan-500 focus:border-cyan-500"
            rows="4"
            placeholder="Write about the doctor"></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-cyan-600 text-white font-medium py-2.5 rounded-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400">
          Add Doctor
        </button>
      </form>
    </div>
  );
};

export default AddDoctor;
