
import styled from "styled-components";


const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.bg=="primary" ? "dodgerblue" : "white"};
  color: ${props => props.bg=="primary" ? "white" : "black"};
  color: ${props => props.bg=="link" ? "dodgerblue" : ""}; 
  font-size: 16px;
  margin: 16px; 
  padding: 16px 32px;
  /* border: ${props => props.primary ? "none" : "0.2px solid gray"}; */
  border: ${props => props.bg=="primary" ? "none" : "0.2px solid gray"};
  border: ${props => (props.bg=="text") || (props.bg=="link") ? "none" : "0.2px solid gray"};
  border: ${props => (props.bg=="dashed") ?  "0.2px dotted gray" : ""};
  border-radius: 3px;
  text-decoration : none;

  &:hover,
  &:focus {
       border: 1px solid dodgerblue;
       color: blue;
  }
`

export default Button;


// const Button = styled.button`
// position: relative;
//   background-color:${(prop) => (prop.theme === "light" ? "white" : "blue")};
//   color: ${(prop) => (prop.theme === "light" ? "white" : "black")};
//   font-size: 16px;
//   padding: 16px 30px;
//   border: none;
//   cursor: pointer;
//   border-radius: 5px;
//   text-align: center;

//   &:hover {
//   background-color: black;
//   color: white;
// }
// `;
