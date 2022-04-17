import { useState } from "react";
//  import  Todo  from "./TodoList";

const Todoinput = ({getData}) => {
    const[text,setText] = useState("")
    return (
        <div>
        <input type="text"
        onChange={(e) =>{
            setText (e.target.value)
        }}
         placeholder="list items" />
        
        <button
        onClick={()=>{
            // console.log("clicked")
             getData(text)
        }}>Add To Do</button>
        </div>
    )
}

export default Todoinput;