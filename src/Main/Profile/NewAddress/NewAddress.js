import React from "react";
import './NewAddress.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


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

            <div className="newAddress--search">
                <label className="newAddress--label">Indirizzo</label>
                <div className="newAddress--main">
                    <input type="text" placeholder="Es: via roma 16, Milano" className="newAddress--input"></input>
                    <FontAwesomeIcon icon={faMagnifyingGlass}  className="newAddress--icon"/>
                </div>
            </div>
        </div>
    )
}