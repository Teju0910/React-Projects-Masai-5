
 const TodoItem = ({todo,getData,toggle}) =>{
    return (
        <div className="todos">
        <div  key={todo.title}></div>
        <div  className="todo" key={todo.title}> {todo.title} </div>
        <button onClick={() =>{
          toggle(todo.id);
        }}>
        {todo.status ? "Done" : "Not Done"}</button>
        </div>
    )   
}

export default TodoItem;