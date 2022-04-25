import { useContext } from "react";
import React from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import Toggle from "./Toggle";
const Abouts = styled.div`
  position: absolute;
  left: 10.9%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  font-family: cursive;
  box-shadow: ${(props) =>
    props.theme == "Dark"
      ? " 0px 1px 4px rgba(0, 0, 0, 0.2)"
      : "0px 1px 4px #104eca"};
  color: ${(props) => (props.theme == "Dark" ? "white" : "#1F2327")};
  background-color: ${(props) => (props.theme == "Dark" ? "#1F2327" : "white")};
  /* background: #1F2327; */
`;

const About = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Abouts theme={theme}>
      <Toggle />
      <div style={{ width: "800px", marginLeft: "50px" }}>
        <h1> Tejasvini Patil </h1>
        <h3>
          Aspiring Full Stack Web Developer | <br />
          Learning MERN Stack at Masai School,Bengaluru,Karnataka
        </h3>
        <p>
          I love drawing, so after completing Mechanical Engineering I started
          my carrier in Design Industry. However, a few years in, I realized
          that whatever software I used, it is made from some code. That's how
          my interest in coding increased. <br />
          <br />
          In the tech industry, adaptability is most important, and I am having
          that skill. So to explore the new opportunity in the growing IT
          sector, I decided to shift my carrier in the IT industry and I joined
          MASAI as a Full Stack Developer. The Masai journey is for 6 months
          with a 9-9-6 curriculum. <br />
          <br />
          In Masai I learned technical skills as well as power skills. I learned
          HTML, CSS, JavaScript, MongoDB, Express and React. Also, I am a good
          team player and I have good experience in teamwork and team
          management. As I am an aspiring full-stack web developer looking for
          an opportunity that will help to grow the company as well as my
          knowledge
        </p>
      </div>
      <div className="tog"></div>
    </Abouts>
  );
};

export default About;
