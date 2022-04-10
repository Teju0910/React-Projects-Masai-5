import { name } from "./calc"
import "./index.css"

let root = document.getElementById("testcolor");
let h1 = document.createElement("h1")
h1.innerText="Heelo TEju";
h1.setAttribute("class","redtext")

root.append(h1)


console.log(name(1,2))
