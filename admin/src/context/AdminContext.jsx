import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  const baseURL = import.meta.env.VITE_BACKEND_URL;

  const [aToken, setAToken] = useState(
    localStorage.getItem("aToken") ? localStorage.getItem("aToken") : ""
  );

  const [doctors, setDoctors] = useState([]);

  const getAllDoctors = async () => {
    try {
      const { data } = await axios.post(
        baseURL + "/api/admin/all-doctors",
        {},
        { headers: { aToken } }
      );
      if (data.success) {
        setDoctors(data.doctors);
        console.log(data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  //for changing availability
  const changeAvailability = async (docId) => {
    try {
      const { data } = await axios.post(
        baseURL + "/api/admin/change-availability",
        { docId },
        { headers: { aToken } }
      );
      if (data.success) {
        toast.success(data.message);
        getAllDoctors();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const value = {
    aToken,
    setAToken,
    baseURL,
    doctors,
    getAllDoctors,
    changeAvailability,   
  };

  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
