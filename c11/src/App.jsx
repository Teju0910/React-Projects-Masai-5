
import './App.css';
import { useState } from 'react';

function App() {

  const[score,setscore] = useState(76);
  const[wicket,setwicket] = useState(2);
  const[ball,setball] = useState(50);
  const[win,setwin] = useState();

  function newscore(value){
    if(score>=100){
      // const x =win()
       return ;
    }
    setscore(score+value)
  }

  function newball(value){
    if(score>=100){  
       return 
    }
    setball(ball+value)
  }


  function newicket(value){
    if(score>=100){  
       return 
    }
    setwicket(wicket+value)
  }

  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}

          <h1 className="scoreCount">
            {
               score
              // show "score" here
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              wicket
              // show wicket here
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              ball
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={() => newscore(1)}>Add 1</button>
        <button className="addScore4"  onClick={() => newscore(4)}>Add 4</button>
        <button className="addScore6"  onClick={() => newscore(6)}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={() => newicket(1)}>Add 1 wicket</button>
        {/* <button onClick={() =>setwicket(wicket+1)}>Add 1 wicket</button> */}
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={() =>newball(0.1)}>Add 1</button>
        {/* <button onClick={() =>setball(ball+0.1)%10000000}>Add 1</button> */}
      </div>
      {function win(score) {
          <h1 className="status">
          {"India Won"}
         </h1 >          
      }}
{/* <h1 className="status">India Won */}
{/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
  );
}

export default App;