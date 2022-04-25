import { useContext } from "react";
import React from 'react';

import styled from "styled-components";
import Toggle from "./Toggle";
import "./Home.css"
import { ThemeContext } from "../context/ThemeContext";

const Homes = styled.div`
position: absolute;
left: 10.9%;
right: 0%;
top: 0%;
bottom: 0%;
font-family:cursive;
box-shadow:${props => props.theme=="Dark" ?  " 0px 1px 4px rgba(0, 0, 0, 0.2)" :"0px 1px 4px #104eca"};
color: ${props => props.theme=="Dark" ?  "white" :"#1F2327"}; ;
background-color: ${props => props.theme=="Dark" ? "#1F2327" : "white"};
/* background: #1F2327; */
`
const Home = () => {
  const  {theme} = useContext(ThemeContext);
    return (
      
      <Homes theme={theme}>
        <h1> My Dashbord</h1>
        <div className="tog"><Toggle/></div>        
      </Homes>
  
    );
  }
  
  export default Home;