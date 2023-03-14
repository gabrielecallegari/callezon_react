import React, { useState } from "react";
import './NewAddress.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


export default function NewAddress(props){
    const [ errore , setErrore ] = useState(false)
    const [ messaggio , setMessaggio ] = useState("Errore nel salvataggio")
    function back(){
        props.callback(0)
    }

    function addLocation(){
        setErrore(true)
        setMessaggio("Errore generico")
        setTimeout(()=>{
            setErrore(false)
        },3000)
    }

    return (
        <div className="newAddress">
            <label className="newAddress--title">Nuovo indirizzo</label>
            <div className="newAddress--back" onClick={back}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </div>

            <div className="newAddress--search">
                <label className="newAddress--label">Indirizzo</label>
                <div className="newAddress--main">
                    <input type="text" placeholder="Es: via roma 16, Milano" className="newAddress--input"></input>
                    <FontAwesomeIcon icon={faMagnifyingGlass}  className="newAddress--icon"/>
                </div>
            </div>
            {errore === true && 
                <div className="newAddress--error-div">
                    <FontAwesomeIcon icon={faXmark}  className="newAddress--error-icon"/>
                    <label className="newAddress--error-label">{messaggio}</label>
                </div>
            }

            <div className="newAddress--modify">
                <label className="newAddress--add" onClick={addLocation}>Aggiungi indirizzo</label>
            </div>
        </div>
    )
}