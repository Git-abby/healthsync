import { createContext } from "react";
import { assets } from "../assets/assets";
export const AppContext = createContext();

const AppContextProvider = (props) => {
  const value = { assets };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
