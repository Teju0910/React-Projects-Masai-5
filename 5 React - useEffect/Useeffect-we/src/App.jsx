
import { useEffect, useState } from 'react';
import './App.css';
import { Counter } from './components/Counter';
import { Todos } from './components/Todos';

function App() {
  const [show,setshow] = useState(true)
  return ( 
      
   <div className="App">
     <h1>My To Do List</h1>
    <Counter/>
    {show? <Todos/> : null}
      <button onClick={() =>{
        setshow(!show)
      }}>
        {show ? "Hide" : "Show"} Todos
      </button>

    </div> 
  );
}

export default App;
