import React, { useEffect, useState } from "react";
import './Profile.css'
import Database from "../../Database/Database";
import Loading from '../Loading/Loading'
import { useCookies } from 'react-cookie';

export default function Profile(props){
    const [ user , setUser ] = useState()
    const [ cookies , setCookies , removeCookies] = useCookies(["name"])

    const [ visible , setVisible ] = useState(false)

    useEffect(()=>{
        if(user===undefined){
            getUsers()
        }  
    },[])

    function getUsers(){
        if(window.myData===undefined){
            new Database().getUsers(setMieiUtenti)
        }else{
            setMieiUtenti(window.myData)
        }
    }

    function logout(){
        const message = "Sei Sicuro di voler eseguire il logout?"
        if(window.confirm(message) === true ){
            setUser(undefined)
            setVisible(false)
            window.isLogged=false
            removeCookies("name")
            props.callback(false,undefined)
        }
    }

    function setMieiUtenti(valore){
        for(const utente in valore){
            if(valore[utente].username+"" === cookies.name+""){
                console.log("Sono qui");
                console.log(valore[utente]);
                setUser(valore[utente])
                setVisible(true)
            } 
        }
    }

    function MyReg(){
        return(
            <div className="profile">
                <label>Bentornato {user.username}</label>
                <button className="profile--logout" onClick={logout}>Logout</button>
            </div>
        )
    }
    


    return (
        <div>
            { visible === false ? <Loading/> : <MyReg/> }
        </div>
    )
}