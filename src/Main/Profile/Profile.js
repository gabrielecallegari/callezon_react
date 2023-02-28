import React, { useEffect, useState } from "react";
import './Profile.css'
import Database from "../../Database/Database";
import Loading from '../Loading/Loading'
import { useCookies } from 'react-cookie';
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




export default function Profile(props){
    const [ user , setUser ] = useState()
    const [ cookies , setCookies , removeCookies] = useCookies(["name"])

    const [ visible , setVisible ] = useState(false)

    const [ card4 , setCard4] = useState()

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
                setUser(valore[utente])
                setVisible(true)
                const ultimo = valore[utente].carta.split(" ")
                setCard4(ultimo[ultimo.length-1])
            } 
        }   
    }

    function MyReg(){
        return(
            <div className="profile">
                <label>Bentornato {user.username}</label>

                <div className="profile--card">
                    <div className="card--number">
                        <FontAwesomeIcon icon={faCreditCard}/>
                        <label className="card">Termina per {card4}</label>
                    </div>
                    <div className="card--info">
                        <FontAwesomeIcon icon={faCalendarDays}/>
                        <label className="card--date">{user.scadenza}</label>
                        <FontAwesomeIcon icon={faKey} className="card--key" />
                        <label className="card--cvv">***</label>
                    </div>
                </div>

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