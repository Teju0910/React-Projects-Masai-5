
import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Form } from './components/Form';

function App() {
  const [counter,setcounter] = useState(0);
  const counterRef = useRef(null);
  const divRef = useRef(null)
 
  useEffect(() =>{   
    counterRef.current = setInterval(()=>{
      setcounter((p) => p+1);
    },500)
  },[])

  return (      
 <div>
   <Form />
   <div ref={divRef}>
   <div className='red'></div>
    <div className='blue'></div>
    <div className='red'></div>
    <div className='blue'></div>
    <button onClick={()=>{
    divRef.current.scrollIntoView({
     behavior : "smooth"
    })
    }}>go to top</button>
   </div>

   <h3>Counter : {counter}</h3>
   <button onClick={() =>{
      setInterval(()=>{
        setcounter((p) => p+1);
      },500)   
   }}>Start</button>

   <button onClick={() =>{
     clearInterval(counterRef.current)
   }}>Pause</button>

   <button onClick={() =>{
      setcounter();
   }}>Reset</button>
 </div>
  );
}

export default App;
