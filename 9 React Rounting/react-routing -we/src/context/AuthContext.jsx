import { createContext, useState } from "react";
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
    const [isAuth,setisAuth] = useState(false);
 
  const  handelAuth = (state) =>{
      setisAuth(!isAuth)
    }
  return (
    <AuthContext.Provider value={{ isAuth,handelAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
