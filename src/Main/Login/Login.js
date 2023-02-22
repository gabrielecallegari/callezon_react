import { React , useState }from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser , faLock , faXmark } from '@fortawesome/free-solid-svg-icons'
import "./Login.css"

export default function Login(){

    const [ error , setError] = useState(false)

    function changeService(){
        setError((value) => !value)
    }




    return (
        <div className="login">
            <label className="login--label">Login</label>
            <div className="login--username">
                <FontAwesomeIcon icon={faUser} />
                <input type="text" className="login--input" placeholder="Username"></input>
            </div>
            <div className="login--password">
                <FontAwesomeIcon icon={faLock} />
                <input type="password" className="login--input" placeholder="Password"></input>
            </div>

            {error === true && <div className="login--error">
                <FontAwesomeIcon icon={faXmark} className="login--error-icon"/>
                <label className="login--error-label">L'usarname o la password non sono corretti</label>
            </div>}
            
            <button className="login--button" onClick={changeService}>Loggati</button>

            <label className="login--goto">Non sei registrato? clicca qui</label>
        </div>
    )
}