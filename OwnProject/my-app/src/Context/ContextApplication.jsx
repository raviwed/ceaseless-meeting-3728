import React, { useState } from "react";

export const AppContext = React.createContext();

function AppContextProvider({ children }) {
  const [isAuth,setAuth] = useState(false);
 const ToggleStatus=()=>{
  setAuth(!isAuth)
 }
  
  return (
    <AppContext.Provider value={{isAuth,ToggleStatus}}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
