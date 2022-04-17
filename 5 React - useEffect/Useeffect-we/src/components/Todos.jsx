import { useEffect, useState } from "react";

export const Todos = () => {
    const [todos,setodos] = useState([]);
    const [text,setText] = useState("");
    const [page,setpage] = useState(1);
 
    useEffect(() => {
        console.log("Mounted tODOSs")
        getData() ;
        return function cleanup(){
            console.log("UnMounted tODOSs")
        }
    } ,[page])

        const getData = async () =>{
            const data = await fetch(`http://localhost:8000/todos?_page=${page}&_limit=4`).then((d)=>d.json()
         );
         setodos(data);
        }
//http://localhost:8000/todos?_page=1?_limit=5
return (
<div>
    <input type="text" 
    onChange={(e) => setText(e.target.value)}/>
    <button onClick={()=>{
        const payload = {
            title :text,
            status:false,
        };
        fetch("http://localhost:8000/todos",{
            method : "POST",
            headers :{
                "content-type":"application/json"
            },
            body :JSON.stringify(payload)
        }).then(()=>{
            getData()
        });
    }}>Add todo</button>
    {todos.map((t) =>(
        <div className="Singletodo" key={t.id}>{t.id}  -  {t.title}
          {console.log(t.status) } 
        <button onClick={() =>{
            let newlist = t.status
         setodos(!todos.e.status)      
        }}>{t.status ? "Done" : "Not Done"}</button>
        </div>
    ))}

    <button disabled={page<=0} onClick={() => {
    setpage(page-1)
    }}>Previous</button>

<button disabled={page>setpage} onClick={() => {
    setpage(page+1)
    }}>Next</button>
    <p>Page No. {page}</p>
    <br />
 
</div>
)
}
    