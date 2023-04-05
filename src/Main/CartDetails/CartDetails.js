import {  faTrash, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import './CartDetails.css'

export default function CartDetails(){
    const [ prodotti , setProdotti ] = useState(window.cart_products)
    const [ prezzoTotale , setPrezzoTotale ] = useState(0)
   
    useEffect(()=>{
        console.log(prodotti.length);
        var somma = 0;
        for (let index = 0; index < prodotti.length; index++) {
             somma = somma + prodotti[index].price * prodotti[index].quant
        }
        setPrezzoTotale(somma)
    },[prodotti])

    function reset(){
        setProdotti([]) 
        window.cart_products=[]
        window.cart=0
    }

    function deleteProduct(element){
        setPrezzoTotale(old => old - element.price * element.quant)
        window.cart=window.cart-1
        window.cart_products=window.cart_products.filter((value)=>{
            return value.id !== element.id 
        })
        setProdotti(prodotti.filter((value)=>{
            return value.id !== element.id 
        }))
    }

    
    var id = 0
    const displayProdotti = prodotti.map(element => {
        
        id ++
        return( 
            <div className="carrelloProdotto--card" key={id}> 
                <img src={element.thumbnail} alt="img" className="carrelloProdotto--card-img"/>
                <label className="carrelloProdotto--card-title">{element.title.substr(0,13)}</label>
                <label className="carrelloProdotto--card-qta">Qta: {element.quant}</label>
                
                <FontAwesomeIcon onClick={()=>deleteProduct(element)} icon={faTrash} className="carrelloProdotto--card-trash"/>

            </div>
        )
    })


    return (
        <div className="carrelloDetails">
            {prodotti.length>0 ?
                <div className="carrelloDetails--main">
                    <label className="carrelloDetails--totale">Vai al pagamento di {prezzoTotale}€</label>
                    <div className="carrelloDetails--lista">
                        {displayProdotti}
                    </div>
                    {prodotti.length > 1 &&
                    <div className="carrelloDetails--svuota" onClick={reset}>
                        <FontAwesomeIcon icon={faTrash} />
                        <label className="carrelloDetails--svuota-label" >Svuota il carrello</label>
                    </div>
                    }
                </div>

                :
                <div className="carrelloDetails--void">
                    <FontAwesomeIcon icon={faX} className="carrelloDetails--void-icon" />
                    <p className="carrelloDetails--cv">Il carrello è vuoto, per favore aggiungi qualcosa</p>
                </div>
            }
        </div>
    )
}