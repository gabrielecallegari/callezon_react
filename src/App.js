import './App.css';
import React, { useEffect, useState } from "react";
import Login from './Main/Login/Login'
import Home from './Main/Home/Home';
import Profile from "./Main/Profile/Profile"
import { useCookies } from 'react-cookie';
import { faCircleUser , faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Database from './Database/Database';

function App() {
  const [ value , setValue ] = useState(window.isLogged)
  const [ status , setStatus ] = useState("Accedi") 
  // eslint-disable-next-line
  const [ cookies , setCookies ] = useCookies(["name"])

  const [ carrello , setCarrello ] = useState(0)

  function carrelloClick(){
      setCarrello(old=> old+1)
  }

  useEffect(()=>{
    if( cookies.name !== undefined){
      new Database().getUserData(cookies.id)
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
            <label className="header--label" onClick={()=>setValue(false)}>Callezon</label>
            <div className='header--log' onClick={changeValue}>
              <label  className="header--status" >{status}</label> 
              <FontAwesomeIcon icon={faCircleUser} className="header--icon"/>
            </div>
        </div>
        <GetBody />
        {value === false &&
          <div className="carrello" onClick={carrelloClick}>
            <div className="carrello--div">
                <FontAwesomeIcon icon={faCartShopping} className="shoppingcart"/>
                {carrello>0 &&  <label className="carrello--size">{carrello}</label>}
            </div>
          </div>
        }
    </div>
  );
}

export default App;
