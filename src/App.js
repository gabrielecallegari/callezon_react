import './App.css';
import React, { useState } from "react";
import Login from './Main/Login/Login'
import Database from './Database/Database';
import Home from './Main/Home/Home';




function App() {
  const [ value , setValue ] = useState(window.isLogged)
  const [ status , setStatus ] = useState("Accedi") 
  // eslint-disable-next-line
  const db = new Database()
  db.getUsers()
  
  function changeValue(){
    setValue((current) => !current)
  }

  function loginFromChild(val, name){
    setValue(val)
    setStatus("Ciao "+name)
  }
  
  return (
    <div className="App">
      <div className="header">
            <label className="header--label">Callezon</label>
            <label  className="header--status" onClick={changeValue}>{status}</label> 
        </div>
        {value===true ? <Login callback={loginFromChild}/> : 
        <div>
         <Home/>   
        </div>}
    </div>
  );
}

export default App;
