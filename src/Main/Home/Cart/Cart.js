import React, { useEffect, useState } from "react";
import './Cart.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Cart(){

    const [ numeroCarrello , setNumeroCarrello ] = useState(window.cart===undefined ? 0 : window.cart)

    const router = useNavigate()
    useEffect(()=>{
        setNumeroCarrello(window.cart===undefined ? 0 : window.cart)
        // eslint-disable-next-line
    },[window.cart])
    
  


    return (
        <div className="carrello" onClick={()=>router("/cart")}>
        <div className="carrello--div">
            <FontAwesomeIcon icon={faCartShopping} className="shoppingcart"/>
            {numeroCarrello>0 &&  <label className="carrello--size">{numeroCarrello}</label>}
        </div>
      </div>
    )
}