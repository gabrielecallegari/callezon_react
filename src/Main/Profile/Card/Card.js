import React from "react";
import './Card.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";


export default function Card(props){
    return (
        <div className="credit">
            <div className="credit--data">
                <div className="credit--number">
                    XXXX XXXX XXXX {props.number}
                </div>
                <div className="credit--top">
                    <FontAwesomeIcon icon={faCreditCard} className="credit--icon"/>
                    <label>La Tua Carta</label>
                </div>
                <div className="credit--bottom">
                    <div className="credit--date">
                        <FontAwesomeIcon icon={faCalendarDay} className="credit--icon"/>
                        <label className="credit--label">{props.date}</label>
                    </div>
                    
                    <div className="credit--cvv">
                        <FontAwesomeIcon icon={faKey} className="credit--icon"/>
                        <label className="credit--label">***</label>
                    </div>
                    
                </div> 
            </div>
        </div>
    )
}