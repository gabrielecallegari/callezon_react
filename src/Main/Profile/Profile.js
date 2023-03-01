import React, { useEffect, useState } from "react";
import './Profile.css'
import Database from "../../Database/Database";
import Loading from '../Loading/Loading'
import { useCookies } from 'react-cookie';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card/Card";



export default function Profile(props){
    const [ user , setUser ] = useState()
    // eslint-disable-next-line
    const [ cookies , setCookies , removeCookies] = useCookies(["name"])

    const [ visible , setVisible ] = useState(false)

    const [ date , setDate ] = useState()

    const [ card4 , setCard4] = useState()
    const [ indirizzo, setIndirizzo ] = useState()

    useEffect(()=>{
        if(user===undefined){
            getUsers()
        }  
    })

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
            props.callback(false,"Login")
        }
    }

    function setMieiUtenti(valore){
        for(const utente in valore){
            if(valore[utente].username+"" === cookies.name+""){
                setUser(valore[utente])
                setVisible(true)
                const ultimo = valore[utente].carta.split(" ")
                setCard4(ultimo[ultimo.length-1])
                setIndirizzo(valore[utente].indirizzo)
                setDate(valore[utente].scadenza)
            } 
        }   
    }

    function MyReg(){
        return(
            <div className="profile">
                <label>Bentornato {user.username}</label>
                <div className="line"></div>
                <label className="profile--title">Carta di credito</label>
                <div className="profile--card">
                    <Card number={card4} date={date}/> 
                </div>
                <div className="line"></div>
                <label className="profile--title">Indirizzo</label>
                <div className="profile--indirizzo">
                    <FontAwesomeIcon icon={faLocationDot}/>
                    <label className="profile--location">{indirizzo}</label>
                </div>
                <div className="line"></div>

                <button className="profile--modify">Modifica i dati</button>

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