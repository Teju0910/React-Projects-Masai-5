
import { useState } from 'react';
import './App.css';

function App() {
  const [counter,setCounter] = useState(0)

const handelchange = (value) => {

  if (counter >= 10 && value== 1) {
    alert("Counter reached maximum value");
  }
  if (counter <= 0 && value== -1) {
    alert("Counter reached minimum value");
    return;
  }
     setCounter(counter+value)
  }
const handelDouble = (value) =>{
  setCounter(counter*value)
} 

  return (
    <div className="App">
    <h1 className={counter%2===0 ?  "red" : "blue"}>Counter : {counter}</h1>
    <h3>Number is {counter%2===0 ? "Even" : "Odd"}</h3>

    <button onClick={() => handelchange(1)}>Add</button>
    <button  onClick={() => handelchange(-1)}>Sub</button>
    <button onClick={() => handelDouble(2)}>Double</button>
    </div> 
  );
}

export default App;
