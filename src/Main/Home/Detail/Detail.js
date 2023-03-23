import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './Detail.css'
import prodotti from '../../../Database/Prodotti'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faMinus, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import Cart from "../Cart/Cart";

export default function Detail(){
    const { id } = useParams()
    const router = useNavigate()
    // eslint-disable-next-line
    const [ prodotto , setProdotto ] = useState(prodotti.products.filter(element => element.id===parseInt(id))) 
    const [ immagine , setImmagine ] = useState(prodotto[0].thumbnail)
    const [ quant , setQuant ] = useState(1)

    // eslint-disable-next-line
    const [ val , setVal ] = useState(window.cart === undefined ? 0 : window.cart)

    useEffect(()=>{
        if(id>30) router("*")
    })

    function plus(){
        if(quant !== prodotto[0].stock){
            setQuant(old => old + 1 )
        }
    }

    function minus(){
        if(quant !== 1){
            setQuant(old => old - 1 )
        }
    }

    const immagini = prodotto[0].images.map(element => {
        return (
            <div className="galleria" key={element} onClick={()=>{setImmagine(element)}}>
                <img alt="elemento" src={element} className="galleria--immagine"/>
            </div>
        )
    })

    function add(){
        setVal(old => old +1)
        window.cart = val +1
    }

    return (
        <div className="detail">
            <Cart valore={val}/>
            <div className="detail--header">
                <div className="detail--back" onClick={()=>router("/")}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </div>
                <h1 className="detail--title">{prodotto[0].title}</h1>
            </div>
            <div className="detail--main">
                <div className="detail--immagini">
                    <img alt="immagine" src={immagine} className="detail--galleria-immagine"/>
                    <div className="detail--galleria">
                        {immagini.length >1 && immagini}
                    </div>
                </div>
                <div className="detail--data">
                    <label className="data--description">Descrizione:</label>
                    <p>{prodotto[0].description}</p>
                    <label className="data--label">Prezzo: <c>{prodotto[0].price}€</c></label>
                    <label className="data--label">Sconto applicato: <c><b>{prodotto[0].discountPercentage}%</b></c></label>
                    <label className="data--label">Qta. Disponibile: <c>{prodotto[0].stock}</c></label>
                    <div className="data--rate">
                        <label className="data--label">Valutazione: <c>{prodotto[0].rating}</c></label>
                        <FontAwesomeIcon icon={faStar} className="home--pp-icon"/>
                    </div>
                    <div className="data--qua">
                        <label className="data--label">Seleziona quantità:</label>
                        <div className="data--number">
                            <FontAwesomeIcon icon={faMinus} className="data--icon" onClick={minus} />
                            <label className="data--selected"><c>{quant}</c></label>
                            <FontAwesomeIcon icon={faPlus} className="data--icon" onClick={plus} />
                        </div>
                    </div>

                    <div className="data--add-to">
                        <label className="data--add" onClick={add}>Aggiungi al carrello</label>
                    </div>
                </div>
            </div>
        </div>
    )
}