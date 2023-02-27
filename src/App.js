import './App.css';
import React, { useEffect, useState } from "react";
import Login from './Main/Login/Login'
import Home from './Main/Home/Home';
import { useCookies } from 'react-cookie';

function App() {
  const [ value , setValue ] = useState(window.isLogged)
  const [ status , setStatus ] = useState("Accedi") 
  // eslint-disable-next-line
  const [ cookies , setCookies ] = useCookies(["name"])

  useEffect(()=>{
    if( cookies.name !== undefined){
      loginFromChild(false,cookies.name)
    }
  })
    
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
