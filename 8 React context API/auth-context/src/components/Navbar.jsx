
import { useContext } from "react";
import React from 'react';

import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const  {login,isAuth} = useContext(AuthContext);
 
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "end",
        padding: "15px",
        fontSize: "28px",
        border: "1px solid red",
        margin: "10px"
      }}
    >
      <button onClick={()=>{
       isAuth()
      }}>{login === "" ? "Login" : "Signup"}</button>
      {/* Cart : {cart}{" "} */}
    </nav>
  );
}

export default Navbar;