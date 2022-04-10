
import './App.css';
import React from 'react';
let os = ["Service","Project","About"]

function Nvbar() {
  return (
    <div className="App">
      <div id="navnar">
      <h4 id="left">LOGOBAKERY</h4>
     <div id="mid">
        {os.map((e) => {
            return <p>{e}</p>;
          })}
      </div> 
      <button id="Connect">Connect</button>
      </div>
      </div>
  );
}

export default Nvbar;
