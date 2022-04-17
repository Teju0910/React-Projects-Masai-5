import { useState } from "react";
import Todoinput from "./Todoinput";
import  TodoItem  from "./TodoItem";

function Todo() {
  const [todolist, setlist] = useState([
    { id:1,title: "Learn React", status: false },
    { id:2, title: "Learn Lists", status: false },
    { id:3,title: "Learn State", status: false },
  ]);
  
const getData = (todo) => {
    const payload = {
      title: todo,
      status: "Not Done",
    };
    setlist([...todolist, payload]);
    // const getData = (todo) =>{
    // setlist([...tolist,todo]);
  };

function toggle(id){
  todolist.map((e) => {
    if(e.id === id ){
      e.status = !e.status
    }
    setlist([...todolist])
  });
}

  return (
    <div>
      <Todoinput getData={getData} />
      {todolist.map((e) => (
         <TodoItem 
         todo = {e}
         key = {e}
         getData= {getData}
         toggle={toggle}/>
      ))}
    </div>
  );
}

export default Todo;
