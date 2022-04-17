// import { useState } from "react";

export const TodoItem =({todo,getData,tododone, deletetodo}) => {


    return(
        <div id="incomptodo">
        <div className="Singletodo" key={todo.id}>
        <div className ={todo.status ? "tododone" : "todonotdone"}>                 
        <h4> {todo.id} - {todo.title} 
        <input type="checkbox"  className="checkbox" onChange={() =>{
        tododone(todo.id) 
        }}>           
        </input>
         <button onClick={()=>{
             deletetodo(todo.id)
         }}>Delete</button>   
       </h4> 
        </div>
            
        {/* <button onClick={() =>{
            toggle(todo.id)    
        }}>{todo.status ? "Done" : "Not Done"}</button> */}
        </div>
        </div>
    )
}
