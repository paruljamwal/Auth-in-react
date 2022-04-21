

import { createContext , useState } from "react";

export  const AuthContext = createContext();

export const AuthContextProvider=({children})=>{
  const [auth,setAuth]=useState(false);
  const handelauth=(detail)=>{
  setAuth(!auth)
  }
  return (
      <AuthContext.Provider value={{auth,handelauth}}>
          {children}
      </AuthContext.Provider>
  )

}