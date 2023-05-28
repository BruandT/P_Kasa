import React from 'react';
import { Link } from "react-router-dom";
import "./Card.css"

const Card = (data) => {   
    return (
        <>        
        <div id='card-home' key={data.id}>  
        <Link to={{ pathname: "/logement", search: "?_id="+ data.id }}>            
        <img id='card-img' src={data.img} alt={data.title} />  
        <div id="overlay"></div>    
        <h2 id='card-h2'>{data.title}</h2>   
        </Link>         
        </div>
        </>
    );
};

export default Card;