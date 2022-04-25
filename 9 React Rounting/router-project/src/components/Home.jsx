import { useContext } from "react";
import React from "react";
import Toggle from "./Toggle";
import "./Home.css";
import { ThemeContext } from "../context/ThemeContext";
import Commencss from "./Commencss";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Commencss theme={theme}>
      <h1> My Dashbord</h1>
      <div className="tog">
        <Toggle />
      </div>
    </Commencss>
  );
};

export default Home;
