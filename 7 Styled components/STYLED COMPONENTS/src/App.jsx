import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Flex from "./components/Flex";

function App() {
  const [theme,settheme] = useState()
  return (
    <div className="App">
      <h1>Buttons</h1>
      <Button bg={"primary"}
      theme={theme}
        onClick={() => {
          alert("Clicked");
        }}
      >
        Primrty Button
      </Button>
      {/* <Button 
      theme={theme}
      onClick={() => {
      settheme(theme === "light" ? "dark" : "light")
      }}>Default Button</Button> */}
      <Button bg={"default"}>Default Button</Button>
      <Button bg={"dashed"}>Dashed Button</Button>
      <br />
      <Button bg={"text"}>Text Button</Button>
      <Button bg={"link"} as="a" href="#">Link Button</Button>

{/* <Flex>
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</Flex>
   */}
    </div>
  );
}

export default App;
