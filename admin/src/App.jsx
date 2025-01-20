import React, { useContext } from "react";
import Login from "./pages/Login";
import { AdminContext } from "./context/AdminContext";

// React Toastify for POP_UPS
import { ToastContainer } from "react-toastify";
import Navbars from "./components/Navbars";

const App = () => {
  const { aToken } = useContext(AdminContext);
  console.log(aToken);
  return aToken ? (
    <div>
      <ToastContainer />
      <Navbars />
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
};

export default App;
