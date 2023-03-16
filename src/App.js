import './App.css';
import React, { useEffect } from "react";
import { useCookies } from 'react-cookie';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Database from './Database/Database';
import { useNavigate } from 'react-router-dom';


function App() {
  // eslint-disable-next-line
  const [ cookies , setCookies ] = useCookies(["name"])
  const router = useNavigate()
  

  useEffect(()=>{
    
    if( cookies.name !== undefined){
      new Database().getUserData(cookies.id)
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
              <FontAwesomeIcon icon={faCircleUser} className="header--icon"/>
            </div>
        </div>
        
      

        
    </div>
  );
}

export default App;
