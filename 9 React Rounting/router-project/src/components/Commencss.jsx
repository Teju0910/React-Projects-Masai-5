import styled from "styled-components";

const Commencss = styled.div`
  position: absolute;
  left: 10.9%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  /* height: 500px; */
  box-shadow: ${(props) =>
    props.theme == "Dark"
      ? " 0px 1px 4px rgba(0, 0, 0, 0.2)"
      : "0px 1px 4px #104eca"};
  color: ${(props) => (props.theme == "Dark" ? "white" : "#1F2327")};
  background-color: ${(props) => (props.theme == "Dark" ? "#1F2327" : "white")};
  /* background: #1F2327; */
`;

const footer = styled.div`
  display: block;
`
export default Commencss;
