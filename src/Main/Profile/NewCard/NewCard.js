import React, { useRef, useState } from "react";
import './NewCard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPerson, faEnvelope, faCalendarDays, faKey, faCreditCard, faXmark } from "@fortawesome/free-solid-svg-icons";
import Database from "../../../Database/Database";

export default function NewCard(props){

    const [ error , setError ] = useState(false)
    const [ message , setMessage ] = useState("Errore")

    const intestatario = useRef(null)
    const email = useRef(null)
    const carta = useRef(null)
    const data = useRef(null)
    const cvv = useRef(null)


    function back(){
        props.callback(0)
    }

    function submit(){
        if(intestatario.current.value === null || intestatario.current.value === ""){
            setError(true)
            setMessage("Compilare il campo intestatario")
            setTimeout(()=>{
                setError(false)
            },3000)
            return
        }

        if(email.current.value === null || email.current.value === ""){
            setError(true)
            setMessage("Compilare il campo email")
            setTimeout(()=>{
                setError(false)
            },3000)
            return
        }

        if(carta.current.value === null || carta.current.value === ""){
            setError(true)
            setMessage("Compilare il campo Numero carta")
            setTimeout(()=>{
                setError(false)
            },3000)
            return
        }
        if(data.current.value === null || data.current.value === ""){
            setError(true)
            setMessage("Compilare il campo Scadenza")
            setTimeout(()=>{
                setError(false)
            },3000)
            return
        }

        if(cvv.current.value === null || cvv.current.value === ""){
            setError(true)
            setMessage("Compilare il campo Cvv")
            setTimeout(()=>{
                setError(false)
            },3000)
            return
        }

        
        new Database().updateCreditCard()
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
                    <input type="text" placeholder="Es: Mario Rossi" ref={intestatario} className="intestatario--input"></input>
                </div>
                <label className="intestatario2" >Email</label>
                <div className="newCard--input">
                    <FontAwesomeIcon icon={faEnvelope} className="input--icon"/>
                    <input type="email" placeholder="mariorossi@gmail.com" ref={email} className="intestatario--input"></input>
                </div>
            </div>

            <label className="dati--personali">Carta di credito</label>
            <div className="newCard--intestatario">
                <label className="intestatario">Numero carta</label>
                <div className="newCard--input">
                    <FontAwesomeIcon icon={faCreditCard} className="input--icon"/>
                    <input type="number" ref={carta} placeholder="Es: 1111 1111 1111 1111" className="intestatario--input"></input>
                </div>
                
                <div className="newCard--data">
                    <div>
                        <label className="intestatario2" >Scadenza</label>
                        <div className="newCard--input">
                            <FontAwesomeIcon icon={faCalendarDays} className="input--icon"/>
                            <input type="number" ref={data} placeholder="Es: 10/22"  className="intestatario--input"></input>
                        </div>
                    </div>
                    <div className="newCard--cvv">
                        <label className="intestatario2" ref={cvv}>Cvv</label>
                        <div className="newCard--input">
                            <FontAwesomeIcon icon={faKey} className="input--icon"/>
                            <input type="number" placeholder="Es: 183" ref={cvv} className="intestatario--input"></input>
                        </div>
                    </div>
                </div>
            </div>
            {error === true &&
                <div className="newCard--errore">
                    <FontAwesomeIcon icon={faXmark} />
                    <label className="newCard--errore-label">{message}</label>
                </div>
            }
            <label className="newCard--registration" onClick={submit}>Registra la nuova carta</label>
        </div>
    )
}