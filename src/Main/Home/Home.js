import React, { useEffect, useState } from "react";
import './Home.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import prodotti from "../../Database/Prodotti";
import { useNavigate } from "react-router-dom";

export default function Home(){
    const router = useNavigate()
    
    
    
    
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
       // eslint-disable-next-line
    },[])

    const [ carrello , setCarrello ] = useState(0)

    function carrelloClick(){
        setCarrello(old=> old+1)
    }

    
    var primoPiano = prodotti.products.filter(obj => {
        
        return obj.id === 1 || obj.id===2 || obj.id===4
    })

    const prodottiPP = primoPiano.map( element => {
        const percent = parseInt(element.discountPercentage,10)
        const rating = parseInt(element.rating ,10)
        return (
            <div key = {element.id} className="home--pp-prod" onClick={()=>router("/detail/"+element.id)}>
                    <div className="home--pp-princ">
                        <label className="home--pp-title">{element.title}</label>
                        <img src={element.thumbnail} alt="Thumbnail" className="home--pp-img"></img>
                        <div className="home--pp-info">
                            <label className="home--pp-label2">Sconto: <b>{percent}%</b></label>
                            <label className="home--pp-label2">Prezzo: {element.price}€</label>
                            <div className="home--pp-raiting">
                                <label className="home--pp-label2">Rating: {rating}</label>
                                <FontAwesomeIcon icon={faStar} className="home--pp-icon"/>
                            </div>
                        </div>
                    </div>
            </div>
        )
    })

    return (
        <div className="home">
          <div className="carrello" onClick={carrelloClick}>
            <div className="carrello--div">
                <FontAwesomeIcon icon={faCartShopping} className="shoppingcart"/>
                {carrello>0 &&  <label className="carrello--size">{carrello}</label>}
            </div>
          </div>

          <div className="home--primo-piano">
            <label className="home--pp-label">Prodotti in primo piano</label>
            <div className="home--pp">
                {prodottiPP}
            </div>
          </div>
        
        </div>
    )
}