import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './Detail.css'
import prodotti from '../../../Database/Prodotti'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Detail(){
    const { id } = useParams()
    const router = useNavigate()
    // eslint-disable-next-line
    const [ prodotto , setProdotto ] = useState(prodotti.products.filter(element => element.id===parseInt(id))) 
    
    useEffect(()=>{
        if(id>30) router("*")
        
    })
    return (
        <div className="detail">
            <div className="detail--header">
                <div className="detail--back" onClick={()=>router("/")}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </div>
                <h1 className="detail--title">{prodotto[0].title}</h1>
            </div>
        </div>
    )
}