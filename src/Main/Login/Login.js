import { React ,  useEffect,  useRef,  useState }from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser , faLock , faXmark , faEye , faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import "./Login.css"
import Database from "../../Database/Database";
import { v4 as uuidv4 } from 'uuid';
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";

export default function Login(){

    const [ error , setError] = useState(false)

    const [ messageError , setMessageError ] = useState("L'usarname o la password non sono corretti")

    const [ mystring1 , setMyString1 ] = useState("password")

    const [ mystring2 , setMyString2 ] = useState("password")

    const [ icon1 , setIcon1 ] = useState(faEye)

    const [ icon2 , setIcon2 ] = useState(faEye)

    // eslint-disable-next-line
    const [ cookies , setCookies ] = useCookies(["name"])
    
    const [ utenti , setUtenti ] = useState(window.myData)

    const nextYear = new Date();

    const current = new Date();

    const router = useNavigate()

    nextYear.setFullYear(current.getFullYear() + 5);

    const [ reg , setReg ] = useState(false)   
    const username = useRef(null)
    const password = useRef(null) 
    const confUsername = useRef(null)
    const confPassword = useRef(null)

    useEffect(()=>{
        if(utenti === undefined){
            getUsers()
        }
        // eslint-disable-next-line 
    },[])


    function getUsers(){
        new Database().getUsers(setMieiUtenti)
        
    }

    function setMieiUtenti(valore){
        setUtenti(valore)
        window.myData=utenti
    }
    //function to make password visible
    function changeString1(){
    
        setMyString1((old)=>{
            old = (old === "password" ? "text" : "password")
            return old
        })

        setIcon1((old)=>{
            old = (old === faEye ? faEyeSlash : faEye)
            return old
        })
    }

    function changeString2(){
    
        setMyString2((old)=>{
            old = (old === "password" ? "text" : "password")
            return old
        })

        setIcon2((old)=>{
            old = (old === faEye ? faEyeSlash : faEye)
            return old
        })
    }

    function checkUserPassword(){
        const user = username.current.value
        const passwd = password.current.value
        if(reg===false){
            //login check
            if(user==="" || passwd==="" || user===null || passwd==null){
                setMessageError("Devi compilare tutti i campi")
                setError(true)
                return
            }

            if(utenti === undefined){
                getUsers()
            }
            var find = false
            for(const utente in utenti){
                if(utenti[utente].username === user && utenti[utente].password === passwd) {
                    find = true
                    window.user=""
                    window.user=utenti[utente]
                }
            }
            
            if(find !== true){
                setError(true)
                setMessageError("L'usarname o la password non sono corretti")
                password.current.value=""
                console.log("Accesso negato")
            }else{
                setError(false)
                setCookies("name", user, {expires: nextYear})
                setCookies("id",window.user.id_documento, {expires: nextYear})
                window.isLogged = true
                console.log("Fatto accesso");
                router("/")
            }
        }else{
            
            const confUser = confUsername.current.value
            const confPasswd = confPassword.current.value
            if(user !== confUser){
                setError(true)
                setMessageError("I due username non coincidono")
                return 
            }

            if(passwd !== confPasswd){
                setError(true)
                setMessageError("Le due password non coincidono")
                return 
            }
            var find2 = false
            
            for(const utente in utenti){
                if(utenti[utente].username === user) {
                    find2 = true
                }
            }
            if(find2 === true ){
                setError(true)
                setMessageError("L'username già usato")
                return 
            }

            const mioUtente = {
                username : confUser,
                password : confPasswd,
                carta : "",
                cvv : "",
                id : uuidv4(),
                indirizzo : "",
                islogged : false,
                scadenza : ""
            }

            setCookies("name", confUser, {expires: nextYear})
            new Database().addNewUser(mioUtente)
            setError(false)
            window.user = mioUtente
            window.isLogged = true
            console.log("Fatto accesso");
            setUtenti(undefined)
            router("/")
        }
    }
    function setRegistration(){  
        setReg(old => !old)
        password.current.value=""
    }

    return (
        <div className="login">
            <label className="login--label">{reg===false? "Login" : "Registrazione"}</label>
            <div className="login--username">
                <FontAwesomeIcon icon={faUser} />
                <input type="text" className="login--input" placeholder="Username" ref={username}></input>
            </div>
            {reg === true && 
            <div className="login--username">
                <FontAwesomeIcon icon={faUser} />
                <input type="text" className="login--input" placeholder="Conferma Username" ref={confUsername}></input>
            </div>
            }
            <div className="login--password">
                <FontAwesomeIcon icon={faLock} />
                <input type={mystring1} className="login--input" placeholder="Password" ref={password}></input>
                <FontAwesomeIcon icon={icon1} onClick={changeString1}/>
            </div>

            {reg === true &&
                <div className="login--password">
                    <FontAwesomeIcon icon={faLock} />
                    <input type={mystring2} className="login--input" placeholder="Conferma Password" ref={confPassword}></input>
                    <FontAwesomeIcon icon={icon2} onClick={changeString2}/>
                </div>
            }

            {error === true && <div className="login--error">
                <FontAwesomeIcon icon={faXmark} className="login--error-icon"/>
                <label className="login--error-label">{messageError}</label>
            </div>
            }
            
            <button className="login--button" onClick={checkUserPassword}>Loggati</button>

            <label className="login--goto" onClick={setRegistration}>{reg===false? "Non sei registrato? clicca qui" : "Sei già registrato? clicca qui"}</label>
        </div>
    )
}