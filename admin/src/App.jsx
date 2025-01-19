import React, { useContext } from "react";
import Login from "./pages/Login";
import { Button } from "./components/ui/button";
import { AdminContext } from "./context/AdminContext";

const App = () => {
  const { aToken } = useContext(AdminContext);
  console.log(aToken)
  return aToken ? (
    <div>
      <Login />
    </div>
  ) : (
    <>Admin BOLTE</>
  );
};

export default App;
