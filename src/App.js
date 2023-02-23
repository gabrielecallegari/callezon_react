import './App.css';
import React, { useState } from "react";
import Login from './Main/Login/Login'
import Database from './Database/Database';




function App() {
  const [ value , setValue ] = useState(window.isLogged)
  const [ status , setStatus ] = useState("Accedi") 
  const db = new Database()
  db.getUsers()
  
  function changeValue(){
    setValue((current) => !current)
  }

  
  return (
    <div className="App">
      <div className="header">
            <label className="header--label">Callezon</label>
            <label  className="header--status" onClick={changeValue}>{status}</label> 
        </div>
        {value===true && <Login/>}
    </div>
  );
}

export default App;
