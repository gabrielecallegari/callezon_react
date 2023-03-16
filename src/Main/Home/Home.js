import React, { useEffect, useState } from "react";
import './Home.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Home(){
    // eslint-disable-next-line
    const [ products , setProducts] = useState(window.prod)
    
    
    useEffect(()=>{
        /*
        if(products === undefined){
            fetch('https://dummyjson.com/products/')
            .then(res => res.json())
            .then(res => {
                setProducts(res.products)
                window.prod=res.products
            }) 
        }
        */
    })

    const [ carrello , setCarrello ] = useState(0)

    function carrelloClick(){
        setCarrello(old=> old+1)
    }

    

    return (
        <div className="home">
            sei nella home

          <div className="carrello" onClick={carrelloClick}>
            <div className="carrello--div">
                <FontAwesomeIcon icon={faCartShopping} className="shoppingcart"/>
                {carrello>0 &&  <label className="carrello--size">{carrello}</label>}
            </div>
          </div>
        
        </div>
    )
}