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

    const [ cartaLabel , setCartaLabel ] = useState("Modifica i dati")

    const [ indirizzoLabel , setIndirizzoLabel ] = useState("Modifica l'indirizzo")

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
                if(valore[utente].carta === ""){
                    setCartaLabel("Inserisci una nuova carta")
                }

                if(valore[utente].indirizzo === ""){
                    setIndirizzoLabel("Inserisci un uovo indirizzo")
                }
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
                    {user.carta==="" ? <label>Nessuna carta registrata</label> : <Card number={card4} date={date}/>}
                     
                </div>
                <button className="profile--modify">{cartaLabel}</button>
                <div className="line"></div>
                <label className="profile--title">Indirizzo di spedizione</label>
                <div className="profile--indirizzo">
                    {user.indirizzo === ""? <label>Nessun indirizzo registrato</label> :
                    <div>
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <label className="profile--location">{indirizzo}</label>
                    </div>
                }
                </div>
                <button className="profile--modify">{indirizzoLabel}</button>
                <div className="line"></div>

                

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