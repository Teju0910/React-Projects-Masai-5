import { useContext } from "react";
import React from "react";
import { Link } from "react-router-dom";

import { ThemeContext } from "../context/ThemeContext";
import styled from "styled-components";

const Navbars = styled.div`
  position: absolute;
  left: 0%;
  right: 89%;
  top: 0%;
  bottom: 0%;
  justify-content: center;
  text-align:center;
  text-decoration:"none";
  box-shadow: ${(props) =>
    props.theme == "Dark"
      ? " 0px 1px 4px rgba(0, 0, 0, 0.2)"
      : "0px 1px 4px #104eca"};
  /* color: ${(props) => (props.theme == "Dark" ? "#dd2323" : "#16191C")}; */
  background-color: ${(props) =>
    props.theme == "Dark" ? "#16191C" : "#FFFFFF"};
`;

const StyledLink = styled(Link)`
color: ${(props) => (props.theme == "Dark" ? "#f7f7f7" : "#16191C")};
text-decoration: "none";
`
const Navbar = () => {
  const { theme } = useContext(ThemeContext);
const nav =[
  { title : "Home" , to : "/"},
  { title : "About" , to : "/about"}
]
  return (
    <div>
          
       {/* <p style={{marginLeft:"30px"}} >{nav[0].first_name} {nav[0].last_name}</p> */}
    <Navbars theme={theme}>
    <img src="https://media-exp1.licdn.com/dms/image/C5603AQHsLdWkvzrvCA/profile-displayphoto-shrink_400_400/0/1648467462269?e=1655942400&v=beta&t=M0W2YT1KnwEVMZ6KtHXMRpdcR6VZAxX-cIz9Ws9HKfQ" alt="" 
    style={{margin:"30px" ,width:"100px",borderRadius:"50px",border:"1px solid gray"}}/> 
    <h3 style={{color:"turquoise"}}>Tejasvini</h3>
      {nav.map((e,i) => (
        <h3>
          <StyledLink theme={theme} key={i} to={e.to}> {e.title}</StyledLink></h3>
      ))}   
       
   </Navbars>
    </div>

      
  )
};

export default Navbar;
