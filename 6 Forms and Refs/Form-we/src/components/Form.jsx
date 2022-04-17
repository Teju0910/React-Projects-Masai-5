import { useEffect, useState } from "react";

export const Form =() =>{
    const [formData,setformData] = useState({
        username : "",
        age: "",
        email :""
    });

    const hndelchange = (e)=>{
        const {id, value} = e.target;

        setformData({
            ...formData,
            [id]:value
        })
    }

    const hndelsubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:8000/todos",{
            method : "POST",
            headers :{
                "content-type":"application/json"
            },
            body :JSON.stringify(formData)
        })
    }

//without useeffect setinterval runs infinite time
    return(
<div>
    <form onSubmit={hndelsubmit}>
    <input onChange={hndelchange} id="username" type="text" placeholder="Enter Name"/>
    <input onChange={hndelchange} id="age" type="Number" placeholder="Enter age"/>
    <input  id="email" type="text" placeholder="Enter email"/>


<input onChange={hndelsubmit} type="submit"  id="submit" />
</form>
    </div>
    )
}