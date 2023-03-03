import React from "react";
import './NewCard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft,  } from "@fortawesome/free-solid-svg-icons";


export default function NewCard(props){

    function back(){
        props.callback(0)
    }

    return(
        <div className="newCard">
            <div className="newCard--back" onClick={back}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            Nuova Carta
        </div>
    )
}