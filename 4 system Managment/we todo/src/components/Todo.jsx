import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoItems } from "./TodoItems";

export const Todo = () => {
  const [todo, setTodo] = useState([]);

  const addTodo = (data) => {
    setTodo([...todo, data]);
  };

  return (
    <div>
      <TodoInput fn={addTodo} />
      {todo.map((e) => {
        return <TodoItems todo={e} />;
      })}
    </div>
  );
};
