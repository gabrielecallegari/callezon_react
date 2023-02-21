import React from "react";
import './Header.css'

export default function Header(){

    var flag = false

    function changeValue(){
        flag = !flag
    }


    var status = "accedi"
    return (
        <div className="header">
            <label className="header--label">Callezon</label>
            <label  className="header--status" onClick={changeValue}>{status}</label> 
        </div>
    )
}

