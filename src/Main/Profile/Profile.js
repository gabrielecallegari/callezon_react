import React, { useEffect, useState } from "react";
import './Profile.css'
import Database from "../../Database/Database";
import Loading from '../Loading/Loading'
import { useCookies } from 'react-cookie';

export default function Profile(){
    const [ user , setUser ] = useState()
    const [ cookies , setCookies ] = useCookies(["name"])

    const [ visible , setVisible ] = useState(false)

    useEffect(()=>{
        if(user===undefined){
            getUsers()
        }  
    },[])

    function setUA(){
        for(const utente in window.myData){
            if(window.myData[utente].username+"" === cookies.name+""){
                console.log("Sono qui");
                console.log(window.myData[utente]);
                setUser(window.myData[utente])
                setVisible(true)
            } 
        }
    }

    function getUser(){
        if(window.myData===undefined){
            new Database().getUsers()
            setUA()
        }else{
            setUA()
        }
        
    }

    function getUsers(){
        if(window.myData===undefined){
            new Database().getUsers(setMieiUtenti)
        }else{
            setMieiUtenti(window.myData)
        }
    }

    function setMieiUtenti(valore){
        for(const utente in valore){
            if(valore[utente].username+"" === cookies.name+""){
                console.log("Sono qui");
                console.log(valore[utente]);
                setUser(valore[utente])
                setVisible(true)
            } 
        }
    }

    function MyReg(){
        return(
            <div className="profile">
                <label>Bentornato {user.username}</label>
            </div>
        )
    }
    


    return (
        <div>
            { visible === false ? <Loading/> : <MyReg/> }
        </div>
    )
}