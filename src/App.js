import './App.css';
import React, { useEffect, useState } from "react";
import Login from './Main/Login/Login'
import Home from './Main/Home/Home';
import Profile from "./Main/Profile/Profile"
import { useCookies } from 'react-cookie';

function App() {
  const [ value , setValue ] = useState(window.isLogged)
  const [ status , setStatus ] = useState("Accedi") 
  // eslint-disable-next-line
  const [ cookies , setCookies ] = useCookies(["name"])

  useEffect(()=>{
    if( cookies.name !== undefined){
      setStatus("Ciao "+cookies.name)
    }
    // eslint-disable-next-line
  },[])
    
  function changeValue(){
    setValue((current) => !current)
  }

  function loginFromChild(val, name){
    setValue(val)
    setStatus("Ciao "+name)
  }
  
  function GetBody(){
    if(value === true && cookies.name === undefined){
      return <Login/>
    }else{
      if(value === true && cookies.name !== undefined){
        return <Profile/>
      }else{
        return <Home />
      }
    }
  }

  return (
    <div className="App">
      <div className="header">
            <label className="header--label">Callezon</label>
            <label  className="header--status" onClick={changeValue}>{status}</label> 
        </div>
        <GetBody />
    </div>
  );
}

export default App;
