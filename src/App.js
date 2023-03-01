import './App.css';
import React, { useEffect, useState } from "react";
import Login from './Main/Login/Login'
import Home from './Main/Home/Home';
import Profile from "./Main/Profile/Profile"
import Card from './Main/Profile/Card/Card';
import { useCookies } from 'react-cookie';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function App() {
  const [ value , setValue ] = useState(window.isLogged)
  const [ status , setStatus ] = useState("Accedi") 
  // eslint-disable-next-line
  const [ cookies , setCookies ] = useCookies(["name"])

  useEffect(()=>{
    if( cookies.name !== undefined){
      setStatus(cookies.name)
    }
    // eslint-disable-next-line
  },[])
    
  function changeValue(){
    setValue((current) => !current)
  }

  function loginFromChild(val, name){
    setValue(val)
    setStatus(name)
  }
  
  function GetBody(){
    if(value === true && cookies.name === undefined){
      return <Login callback={loginFromChild}/>
    }else{
      if(value === true && cookies.name !== undefined){
        return <Profile callback={loginFromChild}/>
      }else{
        return <Home />
      }
    }
  }

  return (
    <div className="App">
      <div className="header">
            <label className="header--label">Callezon</label>
            <div className='header--log' onClick={changeValue}>
              <label  className="header--status" >{status}</label> 
              <FontAwesomeIcon icon={faCircleUser} className="header--icon"/>
            </div>
        </div>
        <GetBody />
    </div>
  );
}

export default App;
