import React, { useEffect, useState } from "react";
import './Cart.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Cart(props){

    const [ carrello , setCarrello ] = useState(window.cart===undefined ? 0 : window.cart)

    const router = useNavigate()
    useEffect(()=>{
        console.log("Carrello "+window.cart);
        setCarrello(props.valore===undefined ? window.cart : props.valore)
    },[props.valore])
    
  


    return (
        <div className="carrello" onClick={()=>router("/cart")}>
        <div className="carrello--div">
            <FontAwesomeIcon icon={faCartShopping} className="shoppingcart"/>
            {carrello>0 &&  <label className="carrello--size">{carrello}</label>}
        </div>
      </div>
    )
}