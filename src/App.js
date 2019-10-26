import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
 const [isOn, setIsOn] = useState("on");

  function toogleLight(){
  if(isOn === "on"){
  setIsOn("off")

}else{
  setIsOn("on")
  
}
}
  return (
    <div>
    <h2>Smart Remote </h2> 
    <div style={{background: "#f3f3f3", padding: "20px"}}>
    <button onClick={toogleLight}>Turn {isOn ? "on" : "off"} the light</button>
    </div>
    </div>
  );
}

export default App;
