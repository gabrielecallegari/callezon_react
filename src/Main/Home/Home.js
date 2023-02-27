import React, { useEffect, useState } from "react";
import './Home.css'

export default function Home(){
    // eslint-disable-next-line
    const [ products , setProducts] = useState(window.prod)

    useEffect(()=>{
        if(products === undefined){
            fetch('https://dummyjson.com/products/')
            .then(res => res.json())
            .then(res => {
                setProducts(res.products)
                window.prod=res.products
            }) 
        }
    })

    

    return (
        <div className="home">
            sei nella home
        </div>
    )
}