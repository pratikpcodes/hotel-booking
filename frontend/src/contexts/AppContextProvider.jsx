import React, { useContext } from "react";
import { AppContext } from "./appContext";
import { useState } from "react";
const AppContextProvider = ({ children }) => {
  const [toastMsg, setToastMsg] = useState({
    message: "",
    type : "",
    isloggedIn:""
  });

  const showToast = ({message,type,isloggedIn}) => {
    setToastMsg({message ,type,isloggedIn});

    // setTimeout(() => setToastMsg({message: "MESSAGE", type:"TYPE"}), 3000); // Auto-hide after 3s

    setTimeout(() => setToastMsg(prev => ({ message: "", type: "",isloggedIn:prev.isloggedIn })), 3000); 
    //   setToastMsg((prev) => ({ ...prev, message: "" })); // 
  };

  return (
    <AppContext.Provider value={{ showToast, toastMsg }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

export const useAppContext = () => {
  return useContext(AppContext);
};
