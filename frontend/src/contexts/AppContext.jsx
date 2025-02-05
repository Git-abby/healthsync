import { createContext } from "react";
import { doctors, specialityData } from "../assets/assets";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";
export const AppContext = createContext();

const AppContextProvider = (props) => {
  const baseURL = import.meta.env.VITE_BACKEND_URL;
  const currencySymbol = "$";
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : false
  );
  const [doctors, setDoctors] = useState([]);

  const getAllDoctors = async () => {
    try {
      const { data } = await axios.get(baseURL + "/api/doctor/list");
      if (data.success) {
        setDoctors(data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getAllDoctors();
  }, []);

  const value = {
    doctors,
    specialityData,
    currencySymbol,
    token,
    setToken,
    baseURL,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
