import React, { useState } from "react";
import './NewCard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPerson, faEnvelope, faCalendarDays, faKey, faCreditCard, faXmark } from "@fortawesome/free-solid-svg-icons";


export default function NewCard(props){

    // eslint-disable-next-line
    const [ error , setError ] = useState(false)

    function back(){
        props.callback(0)
    }

    return(
        <div className="newCard">
            <div className="newCard--back" onClick={back}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <label className="newCard--title">Nuova Carta</label>
            <label className="dati--personali">Dati personali:</label>
            <div className="newCard--intestatario">
                <label className="intestatario">Intestatario</label>
                <div className="newCard--input">
                    <FontAwesomeIcon icon={faPerson} className="input--icon"/>
                    <input type="text" placeholder="Es: Mario Rossi" className="intestatario--input"></input>
                </div>
                <label className="intestatario2" >Email</label>
                <div className="newCard--input">
                    <FontAwesomeIcon icon={faEnvelope} className="input--icon"/>
                    <input type="email" placeholder="mariorossi@gmail.com" className="intestatario--input"></input>
                </div>
            </div>

            <label className="dati--personali">Carta di credito</label>
            <div className="newCard--intestatario">
                <label className="intestatario">Numero carta</label>
                <div className="newCard--input">
                    <FontAwesomeIcon icon={faCreditCard} className="input--icon"/>
                    <input type="number" placeholder="Es: 1111 1111 1111 1111" className="intestatario--input"></input>
                </div>
                
                <div className="newCard--data">
                    <div>
                        <label className="intestatario2" >Scadenza</label>
                        <div className="newCard--input">
                            <FontAwesomeIcon icon={faCalendarDays} className="input--icon"/>
                            <input type="number" placeholder="Es: 10/22"  className="intestatario--input"></input>
                        </div>
                    </div>
                    <div className="newCard--cvv">
                        <label className="intestatario2" >Cvv</label>
                        <div className="newCard--input">
                            <FontAwesomeIcon icon={faKey} className="input--icon"/>
                            <input type="number" placeholder="Es: 183" className="intestatario--input"></input>
                        </div>
                    </div>
                </div>
            </div>
            {error === true &&
                <div className="newCard--errore">
                    <FontAwesomeIcon icon={faXmark} />
                    <label className="newCard--errore-label">Errore</label>
                </div>
            }
            <label className="newCard--registration">Registra la nuova carta</label>
        </div>
    )
}