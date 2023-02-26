import React, { useEffect, useState } from "react";
import './Home.css'

export default function Home(){

    const [ products , setProducts] = useState()

   useEffect(()=>{
    getProduct()
    console.log(products);
    // eslint-disable-next-line
   },[])


    async function getProduct(){
        await fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(res => setProducts(res))
    }


    return (
        <div className="home">
            sei nella home
        </div>
    )
}