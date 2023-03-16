import React from "react";
import { useParams } from "react-router-dom";
import './Detail.css'

export default function Detail(props){
    const { id } = useParams()
    return (
        <div className="Details">
            {id}
        </div>
    )
}