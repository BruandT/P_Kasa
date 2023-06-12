import React from 'react';
import { Link } from "react-router-dom";
import "./Card.css"

const Card = (data) => {   
    return (
        <>     
        {/*Container de Card  */}
        <div id='card-home' key={data.id}>  
        {/* Mise en place du lien pour la page logement/id de la Card */}
        <Link to={`/logement/${data.id}`}>  
        <img id='card-img' src={data.img} alt={data.title} /> 
        {/* Div pour le background linear-gradient */}
        <div id="overlay"></div>    
        <h2 id='card-h2'>{data.title}</h2>   
        </Link>         
        </div>
        </>
        );
    };
    
    export default Card;