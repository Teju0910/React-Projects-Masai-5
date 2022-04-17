import{useState} from "react";
import './App.css';
import { Todo } from "./components/Todo";

function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

//parent-> child
//child -> parent
// sibling -> sibling

// function App() {

//   const [counter, setCounter] = useState(0);

//   function addData(value){
//     setCounter(value)
//     console.log(value);
//   }
//   return (
//     <div className="App">
//       <Child fn={addData}/>
//       <RightChild data={counter}/>
//     </div>
//   );
// }

// function Child({fn}){
//   const data = 10;
//   fn(data)
//   return <div>leftChild:</div>
// }

// function RightChild({data}){
//   return <div>rightChild:{data}</div>
// }

export default App;
