
import './App.css';

// let os = ["Android","BlackBerry","iPhone","Windows Phone"]
// let manu = ["samsung","HTC","Micromax","Apple"]
function App() {
  const data = [
    {
      heading : "Operating System",
      items : ["Android","BlackBerry","iPhone","Windows Phone"]
    },
    {
      heading : "Manufacturer",
      items : ["samsung","HTC","Micromax","Apple"]
    }
  ]
  
  return (
    <div className="App">
      {data.map((e) =>
       <div>
        <h1>{e.heading}</h1>  
        <div>{e.items.map((e) => <li> {e} </li>)}</div>
        </div>
        )}
    </div>
  );
}

export default App
// function Title(props){
//   return <h1>Mobile {props.name}</h1>
// }


// function App() {
//   return (
//     <div className="App">
//      <Title name="Operating System" />
//      <div>
//         {os.map((e) => {
//             return <li>{e}</li>;
//           })}
//         </div> 
    
//      <Title name="Manufacturer" />
//      <div>
//         {manu.map((e) => {
//             return <li>{e}</li>;
//           })}
//         </div> 
//     </div>
//   );
// }


// function Title(props){
//   return <h1>Mobile {props.name}</h1>
// }
