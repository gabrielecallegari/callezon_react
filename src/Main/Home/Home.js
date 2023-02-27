import React, { useEffect, useState } from "react";
import './Home.css'

export default function Home(){
    // eslint-disable-next-line
    const [ products , setProducts] = useState()

    useEffect(()=>{
        if(products === undefined){
            fetch('https://dummyjson.com/products/')
            .then(res => res.json())
            .then(res => {
                console.log(res);
                const data = res.products;
                console.log(data);
                setProducts(data)
            }) 
        }
    })

    

    return (
        <div className="home">
            sei nella home
        </div>
    )
}