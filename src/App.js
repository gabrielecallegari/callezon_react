import './App.css';
import React, { useEffect, useState } from "react";
import Login from './Main/Login/Login'




function App() {
  const [ value , setValue ] = useState(window.isLogged)
  const [ status , setStatus ] = useState("Accedi") 

  
  function changeValue(){
    console.log(value);
    setValue((current) => !current)
  }

  //{value===true && <Login/>}
  return (
    <div className="App">
      <div className="header">
            <label className="header--label">Callezon</label>
            <label  className="header--status" onClick={changeValue}>{status}</label> 
        </div>
      <Login/>
    </div>
  );
}

export default App;
