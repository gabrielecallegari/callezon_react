import React, { useRef, useState } from "react";
import './NewCard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPerson, faEnvelope, faCalendarDays, faKey, faCreditCard, faXmark } from "@fortawesome/free-solid-svg-icons";
// eslint-disable-next-line
import Database from "../../../Database/Database";

export default function NewCard(props){

    const [ error , setError ] = useState(false)
    const [ message , setMessage ] = useState("Errore")

    const intestatario = useRef(null)
    const email = useRef(null)
    const cvv = useRef(null)
    const [ data , setData ] =useState("")
    const [ carta, setCarta ] = useState("")

    function addSpace(event){
        if(carta.length - event.target.value.length > 0){
            setCarta("")
        }else{
            setCarta(event.target.value)
            if(carta.length === 3 || carta.length === 8 || carta.length === 13){
                setCarta(old => old+" ")
            }
        }
    }

    function dataChange(event){
        if(data.length - event.target.value.length > 0){
            setData("")
        }else{
            setData(event.target.value)
            if(data.length === 1){
                setData(old => old + "/")
            }
        }
    }


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

        if(!email.current.value.includes("@")){
            setError(true)
            setMessage("Email inserita non valida")
            setTimeout(()=>{
                setError(false)
            },3000)
            return
        }

        if(carta === null || carta === ""){
            setError(true)
            setMessage("Compilare il campo Numero carta")
            setTimeout(()=>{
                setError(false)
            },3000)
            return
        }
        if(carta.length !== 19){
            setError(true)
            setMessage("Numero carta non corretto")
            setTimeout(()=>{
                setError(false)
            },3000)
            return
        }
        const change = carta.split(" ")
        console.log(change);
        for (let index = 0; index < change.length; index++) {
            if(isNaN(change[index])){
                setError(true)
                setMessage("Numero carta contenente lettere")
                setTimeout(()=>{
                    setError(false)
                },3000)
                return
            }
            
        }

        if(data === null || data === ""){
            setError(true)
            setMessage("Compilare il campo Scadenza")
            setTimeout(()=>{
                setError(false)
            },3000)
            return
        }

        if(data.length !== 5){
            setError(true)
            setMessage("Data inserita non valida")
            setTimeout(()=>{
                setError(false)
            },3000)
            return
        }

        const newData = data.split("/")
        console.log(newData);
        for (let index = 0; index < newData.length; index++) {
            if(isNaN(newData[index])){
                setError(true)
                setMessage("Data contentente lettere")
                setTimeout(()=>{
                    setError(false)
                },3000)
                return
            }
            
        }

        if(cvv.current.value === null || cvv.current.value === ""){
            setError(true)
            setMessage("Compilare il campo Cvv")
            setTimeout(()=>{
                setError(false)
            },3000)
            return
        }

        if(cvv.current.value.length !== 3){
            setError(true)
            setMessage("Cvv non corretto")
            setTimeout(()=>{
                setError(false)
            },3000)
            return
        }

        if(isNaN(cvv.current.value)){
            setError(true)
            setMessage("Cvv contenente lettere")
            setTimeout(()=>{
                setError(false)
            },3000)
            return
        }

        window.user.carta=carta
        window.user.scadenza=data
        window.user.cvv=cvv.current.value
        const miaCarta = {
            carta: carta,
            cvv: cvv.current.value,
            scadenza: data
        }
        new Database().updateCreditCard(miaCarta)
        props.callback(4)
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
                    <input type="text" maxLength="19"  value={carta} onChange={addSpace} placeholder="Es: 1111 1111 1111 1111" className="intestatario--input"></input>
                </div>
                
                <div className="newCard--data">
                    <div>
                        <label className="intestatario2" >Scadenza</label>
                        <div className="newCard--input">
                            <FontAwesomeIcon icon={faCalendarDays} className="input--icon"/>
                            <input type="text" maxLength="5" value={data} onChange={dataChange} placeholder="Es: 10/22"  className="intestatario--input"></input>
                        </div>
                    </div>
                    <div className="newCard--cvv">
                        <label className="intestatario2" ref={cvv}>Cvv</label>
                        <div className="newCard--input">
                            <FontAwesomeIcon icon={faKey} className="input--icon"/>
                            <input type="text" maxLength="3" placeholder="Es: 183" ref={cvv}  className="intestatario--input"></input>
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