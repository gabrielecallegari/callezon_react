import React from "react";
import './Home.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faStar } from "@fortawesome/free-solid-svg-icons";
import prodotti from "../../Database/Prodotti";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart/Cart";

export default function Home(){
    const router = useNavigate()

    

    var laptop4 = []
    for(let index = 0; index<prodotti.products.length; index++){
        if(prodotti.products[index].category === "laptops"){
            laptop4.push(prodotti.products[index])
            if(laptop4.length === 4) break
        }
    }
    
    var primoPiano = prodotti.products.filter(obj => {
        return obj.id === 1 || obj.id===2 || obj.id===4
    })

    var ordinato = prodotti.products.sort((a,b)=>{
        return parseInt(b.discountPercentage) - parseInt(a.discountPercentage)
    })

    var top10Prod=[]

    for (let index = 0; index < 10; index++) {
        top10Prod.push(ordinato[index])
    }

    const top10 = top10Prod.map(element => { 
        var title = element.title.substring(0,13)
        const sconto = parseInt(element.discountPercentage)
        if(title.length === 13 ) title = title + "..."
        return (
            <div className="top10" key={element.id} onClick={()=>router("/detail/"+element.id)}>
                <label className="top10--title">{title}</label>
                <img src={element.thumbnail} alt="IMG" className="top10--image"></img>
                <div className="top10--data">
                    <label className="top10--sconto">{sconto}%</label>
                    <label className="top10--price">{element.price}€</label>
                </div>
            </div>
        )
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

    const laptop = laptop4.map(element => {
        const sconto = parseInt(element.discountPercentage)
        const rounded = Math.round(element.rating * 10) / 10
        return (
            <div key={element.id} className="laptop--card" onClick={()=>router("/detail/"+element.id)}>
               <label className="home--pp-title">{element.title}</label> 
               <div className="laptop--main"> 
                    <img className="laptop--img" alt="immagine-laptop" src={element.thumbnail}></img>
                    <div className="laptop--data">
                        <label className="laptop--label">Prezzo: {element.price}€</label>
                        <label className="laptop--label">Sconto: <b>{sconto}%</b></label>
                        <div className="laptop--rate">
                            <label className="laptop--label">Valutazione: </label>
                            <div className="laptop--fav">
                                <label className="laptop--label">{rounded}</label>
                                <FontAwesomeIcon icon={faStar} className="home--pp-icon"/>
                            </div>
                        </div>
                        <label className="laptop--label">Qta. Disponibile: {element.stock}</label>
                    </div>
               </div>
            </div>
        )
    })

    return (
        <div className="home">
            <Cart/>
          <div className="home--primo-piano">
            <label className="home--pp-label">Prodotti in primo piano</label>
            <div className="home--pp">
                {prodottiPP}
            </div>
          </div>

          <div className="home--sconti">
            <label className="home--pp-label">La Top 10 dei piu scontati</label>
            <div className="home--top">
                {top10}
            </div>
          </div>
        
          <div className="home--tech">
            <label className="home--pp-label">Il meglio dei Laptop</label>
            <div className="home--tech-top">
                {laptop}
            </div>
          </div> 

        </div>
    )
}