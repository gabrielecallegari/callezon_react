import { React ,  useRef,  useState }from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser , faLock , faXmark , faEye , faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import "./Login.css"
import Database from "../../Database/Database";

export default function Login(){

    const [ error , setError] = useState(false)

    const [ mystring , setMyString ] = useState("password")

    const [ icon , setIcon ] = useState(faEye)

    const db = new Database()
    const utenti = db.getUsers()
    const username = useRef(null)
    const password = useRef(null) 

    function changeString(){
        setMyString((old)=>{
            old = (old === "password" ? "text" : "password")
            return old
        })

        setIcon((old)=>{
            old = (old === faEye ? faEyeSlash : faEye)
            return old
        })
    }

    function checkUserPassword(){
        var user = username.current.value
        var passwd = password.current.value
        var find = false
        console.log(utenti);
        for(const utente in utenti){
            console.log("SONO QUI");
            if(utente.username === user && utente.password === passwd) {
                find = true
            }
        }
        
        if(find !== true){
            setError((value) => !value)
            password.current.value=""
            console.log("Accesso negato")
        }else{
            console.log("Fatto accesso");
        }
    }

    return (
        <div className="login">
            <label className="login--label">Login</label>
            <div className="login--username">
                <FontAwesomeIcon icon={faUser} />
                <input type="text" className="login--input" placeholder="Username" ref={username}></input>
            </div>
            <div className="login--password">
                <FontAwesomeIcon icon={faLock} />
                <input type={mystring} className="login--input" placeholder="Password" ref={password}></input>
                <FontAwesomeIcon icon={icon} onClick={changeString}/>
            </div>

            {error === true && <div className="login--error">
                <FontAwesomeIcon icon={faXmark} className="login--error-icon"/>
                <label className="login--error-label">L'usarname o la password non sono corretti</label>
            </div>}
            
            <button className="login--button" onClick={checkUserPassword}>Loggati</button>

            <label className="login--goto">Non sei registrato? clicca qui</label>
        </div>
    )
}