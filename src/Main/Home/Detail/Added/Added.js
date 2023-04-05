import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './Added.css'

export default function Added(){
    return (
        <div className="added">
            <div className="added--card">
                <FontAwesomeIcon icon={faCheck} className="added--check" />
                <p className="added--p">Il prodotto è stato aggiunto al carrello</p>
             </div>
        </div>
    )
}