import { useContext, useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { useParams } from "react-router-dom";

const ActiveUserDetail = styled.div`
  position: absolute;
  left: 8.54%;
  right: 60.07%;
  top: 20%;
  bottom: 39.65%;
  /* box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2); */
  box-shadow: ${(props) =>
    props.theme == "Dark"
      ? " 0px 1px 4px rgba(0, 0, 0, 0.2)"
      : "0px 1px 4px #50535b"};
  border-radius: 5px;
  height: 400px;
  color: ${(props) => (props.theme == "Dark" ? "white" : " #292E33")};
  background-color: ${(props) =>
    props.theme == "Dark" ? " #292E33" : "white"};
`;
const UserDetail = () => {
  const { theme } = useContext(ThemeContext);
  const { id } = useParams();
  console.log(id, "id");
  const [user, setuser] = useState({});
  useEffect (() => {
      console.log("a")
      axios.get(`http://reqres.in/api/users/${id}`).then((data) => {
        setuser(data.data.data);
        console.log(data, "user");
      });
    },
    []);
 
  return (
    <ActiveUserDetail theme={theme} className="Home">
      <div style={{ margin: "15px" }}>
        <img
          src={user.avatar}
          alt=""
          style={{ marginLeft: "100px", width: "100px", borderRadius: "25px" }}
        />
        <p style={{ marginLeft: "30px" }}>
          {user.first_name} {user.last_name}
        </p>
      </div>
    </ActiveUserDetail>
  );
};
export default UserDetail;
