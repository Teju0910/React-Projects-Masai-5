import { useEffect, useState } from "react";
import Todoinput from "./Todoinput";
import { TodoItem } from "./Todoitem";


export const Todos = () => {
    const [todos,setodos] = useState([]);
    // const [text,setText] = useState("");
    const [page,setpage] = useState(1);
    const [show,setshow] = useState(true)
 
    useEffect(() => {
        console.log("Mounted tODOSs")
        getData() ;
        return function cleanup(){
            console.log("UnMounted TODOS")
        }
    } ,[page])

        const getData = async () =>{
            const data = await fetch(`http://localhost:8520/todos?_page=${page}&_limit=4`)
            .then((d)=>d.json()
         );
         setodos(data);
        }

function deletetodo(id){
    todos.map((e) =>{
        if(e.id === id ){
            fetch(`http://localhost:8520/todos/${id}`,{
                method : "DELETE",
                headers :{
                    "content-type":"application/json"
                },
            }).then(()=>{
                getData()
            });
        }
    })
}

function tododone(id){
    todos.map((e) => {
      if(e.id === id ){
        e.status = !e.status   
      fetch(`http://localhost:8520/todos/${id}`,{
            method : "PUT",
            headers :{
                "content-type":"application/json"
            },
            body :JSON.stringify(e)
        }).then(()=>{
            getData()
        });   
    }; 
    }); 
  }

return (
<div>
    <Todoinput getData={getData} />
    <div> 
    {todos.map((t) =>(       
    //    t.status ? null :
     <TodoItem
     todo={t}
     key = {t.id}
     getData={getData}
     tododone = {tododone}
     deletetodo = {deletetodo}/> 
    ))} 
  </div>
       
    <button  onClick={() =>{
        
         {todos.map((t) =>(             
        <TodoItem
        todo={t}
        key = {t.id}
        getData={getData}
        tododone = {tododone}
        deletetodo = {deletetodo}/> 
       ))} 
 
    }}>Show Complete Todos</button><br />


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
    