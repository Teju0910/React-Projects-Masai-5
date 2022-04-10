
import './App.css';

let os = ["Service","Project","About"]

const Nvbar = () => (
      <div id="navnar">
      <h4 id="left">LOGOBAKERY</h4>
      <div id="mid">
        {os.map((e) => {
            return <p>{e}</p>;
          })}
      </div> 
      <button id="Connect">Connect</button>
      </div>
)

function App() {
  return (
    <div className="App">
       <Nvbar /><br />
      <h2>Welcome to home Page</h2>
    
      </div>
  );
}


export default App;
