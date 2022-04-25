import { useContext, useEffect, useState } from "react";
import React from 'react';
import axios from "axios"
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const ActiveUser = styled.div`
position: absolute;
left: 8.54%;
right: 60.07%;
top: 20%;
bottom: 39.65%;
/* box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2); */
box-shadow:${props => props.theme=="Dark" ?  " 0px 1px 4px rgba(0, 0, 0, 0.2)" :"0px 1px 4px #50535b"};
border-radius: 5px;
height: 450px;
color: ${props => props.theme=="Dark" ?  "white" :" #292E33"}; 
background-color: ${props => props.theme=="Dark" ? " #292E33" : "white"};
`
const User = () => {
    const  {theme} = useContext(ThemeContext); 
    const [users,setuser] = useState([])  ;
    useEffect(() =>{
      axios.get("https://reqres.in/api/users").then(({data}) =>{
        setuser(data.data)
      })
    },[])
    return (   
      <ActiveUser theme={theme} className="Home">      
     {users.map((user) => (
        <div style={{display:"flex",margin:"15px"}}>  
       <img src={user.avatar} alt="" style={{marginLeft:"30px" ,width:"50px",borderRadius:"25px"}} />     
       <p style={{marginLeft:"30px"}} >{user.first_name} {user.last_name}</p>
          </div>
           ) )}   
      </ActiveUser>   
    )             
     }
  export default User;
  //<p  key={user.id}> 
  //  <Link  to={`/users/${user.id}`}>
  // {user.id} - {user.first_name}
  //  </Link></p>