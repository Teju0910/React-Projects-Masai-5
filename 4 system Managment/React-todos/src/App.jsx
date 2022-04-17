
import { useEffect, useState } from 'react';
import './App.css';
import { Todos } from './components/Todos';

function App() {
  const [show,setshow] = useState(true)
  return ( 
      
   <div className="App">
     {/* <h1>My To Do List</h1> */}
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
