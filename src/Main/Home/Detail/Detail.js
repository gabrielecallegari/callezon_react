import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './Detail.css'

export default function Detail(){
    const { id } = useParams()
    const router = useNavigate()
    useEffect(()=>{
        if(id>30) router("*")
    })
    return (
        <div className="Details">
            {id}
        </div>
    )
}