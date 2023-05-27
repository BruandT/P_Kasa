import React from 'react';
import "./Card.css"

const Card = (location) => {
   
    return (
        <>        
        <div id='card-home'>  
        <img id='card-img' src={location.img} alt={location.title} />  
        <div id="overlay"></div>    
        <h2 id='card-h2'>{location.title}</h2>            
        </div>
        </>
    );
};

export default Card;