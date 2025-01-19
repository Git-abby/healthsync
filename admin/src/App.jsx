import React, { useContext } from "react";
import Login from "./pages/Login";
import { AdminContext } from "./context/AdminContext";

// React Toastify for POP_UPS
import { ToastContainer } from "react-toastify";

const App = () => {
  const { aToken } = useContext(AdminContext);
  console.log(aToken);
  return aToken ? (
    <div>
      <>Admin BOLTE</>
      <ToastContainer />
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
};

export default App;
