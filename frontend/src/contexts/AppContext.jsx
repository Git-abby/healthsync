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
  const [userData, setUserData] = useState(false);

  const getAllDoctors = async () => {
    try {
      const { data } = await axios.get(baseURL + "/api/doctor/list");
      if (data.success) {
        setDoctors(data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const loadUserProfile = async () => {
    try {
      const { data } = await axios.get(baseURL + "/api/user/profile", {
        headers: { token },
      });
      if (data.success) {
        setUserData(data.userData);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getAllDoctors();
  }, []);

  useEffect(() => {
    if (token) {
      loadUserProfile();
    }
  }, [token]);

  const value = {
    doctors,
    specialityData,
    currencySymbol,
    token,
    setToken,
    baseURL,
    loadUserProfile,
    userData,
    setUserData,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
