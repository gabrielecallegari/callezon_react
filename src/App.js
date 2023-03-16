import './App.css';
import React, { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Database from './Database/Database';
import { useNavigate } from 'react-router-dom';


function App() {
  const [ status , setStatus ] = useState("Accedi") 
  // eslint-disable-next-line
  const [ cookies , setCookies ] = useCookies(["name"])
  const router = useNavigate()
  

  useEffect(()=>{
    
    if( cookies.name !== undefined){
      new Database().getUserData(cookies.id)
      setStatus(cookies.name)
    }else{
      setStatus("Accedi")
    }
    // eslint-disable-next-line
  },[])

  
  
  function getBody(){
    if(cookies.name === undefined){
      router("/login")
    }else{
      if(cookies.name !== undefined){
        router("/profile")
      }
    }
  }

  return (
    <div className="App">
      
      <div className="header">
            <label className="header--label" onClick={()=>router("/")}>Callezon</label>
            <div className='header--log' onClick={getBody}>
              <label  className="header--status" >{status}</label> 
              <FontAwesomeIcon icon={faCircleUser} className="header--icon"/>
            </div>
        </div>
        
      

        
    </div>
  );
}

export default App;
