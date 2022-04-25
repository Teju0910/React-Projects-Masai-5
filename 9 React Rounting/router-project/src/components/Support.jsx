import { useContext, useEffect, useState } from "react";
import React from 'react';
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { useParams } from "react-router-dom";
import Commencss from "./Commencss"

const Support = () => {
    const  {theme} = useContext(ThemeContext); 

    return (   
      <Commencss theme={theme} className="Home"> 
      <h1>Welcome to Support Page</h1>
      </Commencss>         
) 
     }
  export default Support;