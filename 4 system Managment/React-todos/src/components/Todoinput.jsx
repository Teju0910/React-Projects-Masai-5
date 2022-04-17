import { useState } from "react";

const Todoinput =({getData}) => {
    const [text,setText] = useState("");
    return(
  <div>
  <input type="text" 
    onChange={(e) => setText(e.target.value)}/>
    <button onClick={()=>{
        const payload = {
            title :text,
            status:false,
        };
        fetch("http://localhost:8520/todos",{
            method : "POST",
            headers :{
                "content-type":"application/json"
            },
            body :JSON.stringify(payload)
        }).then(()=>{
            getData()
        });
    }}>Add todo</button>

</div>
    )
}
export default Todoinput;