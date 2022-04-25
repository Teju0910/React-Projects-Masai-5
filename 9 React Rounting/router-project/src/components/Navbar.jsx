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
  padding-top: 50px;
  justify-content: center;
  text-align:center;
  box-shadow: ${(props) =>
    props.theme == "Dark"
      ? " 0px 1px 4px rgba(0, 0, 0, 0.2)"
      : "0px 1px 4px #104eca"};
  /* color: ${(props) => (props.theme == "Dark" ? "#dd2323" : "#16191C")}; */
  background-color: ${(props) =>
    props.theme == "Dark" ? "#16191C" : "#ffffff"};
`;

const StyledLink = styled(Link)`
color: ${(props) => (props.theme == "Dark" ? "#a89797" : "#515d6a")};
text-decoration: "underline Aqua";
line-height :"100px";
/* padding-top:"50px"; */
margin-top:"30px";

&:hover {
  color: ${(props) => (props.theme == "Dark" ? "#ffffff" : "#16191C")};
  text-decoration: "none";
  box-shadow:"box-shadow: rgba(203, 195, 195, 0.2) 0px 2px 8px 0px;"
}
`
const Navbar = () => {
  const { theme } = useContext(ThemeContext);
const nav =[
  { title : "Home" , to : "/"},
  { title : "Store" , to : "/store"},
  { title : "Mac" , to : "/mac"},
  { title : "iPad" , to : "/ipad"},
  { title : "Watch" , to : "/watch"},
  { title : "Cart" , to : "/cart"},
  { title : "Support" , to : "/support"},
]
  return (
    <div>          
       {/* <p style={{marginLeft:"30px"}} >{nav[0].first_name} {nav[0].last_name}</p> */}
    <Navbars theme={theme}>
    <img src="data:image/jpeg;base64,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" alt="" 
    style={{background:"white",height:"auto",width:"100px",borderRadius:"150px",border:"1px solid Aqua"}}/> 
    
    <h3 style={{color:"Aqua"}}>Apple</h3>
     
      {nav.map((e,i) => (
        <h3>
          <StyledLink theme={theme} key={i} to={e.to}> {e.title}</StyledLink>
          </h3>
      ))}   
       
   </Navbars>
    </div>

      
  )
};

export default Navbar;
