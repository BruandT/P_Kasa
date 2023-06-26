import React from 'react';
import { Link } from "react-router-dom";
import "./Card.css"

const Card = (data) => {   
    return (
        <>     
        {/*Container de Card  */}
        <div className='card-home' key={data.id}>  
        {/* Mise en place du lien pour la page logement/id de la Card */}
        <Link to={`/logement/${data.id}`}>  
        <img className='card-img' src={data.img} alt={data.title} /> 
        {/* Div pour le background linear-gradient */}
        <div className="overlay"></div>    
        <h2 className='card-h2'>{data.title}</h2>   
        </Link>         
        </div>
        </>
        );
    };
    
    export default Card;