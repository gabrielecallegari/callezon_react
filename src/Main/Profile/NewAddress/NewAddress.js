import React from "react";
import './NewAddress.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";


export default function NewAddress(props){

    function back(){
        props.callback(0)
    }

    return (
        <div className="newAddress">
            <label className="newAddress--title">Nuovo indirizzo</label>
            <div className="newAddress--back" onClick={back}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </div>
        </div>
    )
}