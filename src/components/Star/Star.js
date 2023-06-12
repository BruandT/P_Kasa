import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import "./Star.css"

library.add(faStar);

const stars = [1, 2, 3, 4, 5]

const Star = (data) => {    

    return (
        <>
        {stars.map(element => {
            const starsNbr = parseInt(data.rating)
            return(<span key={"star-"+element} className={element <= starsNbr ? 'span-color' : 'span-uncolor'}><FontAwesomeIcon icon={faStar} /></span>)
        })}
        </>
    );
};

export default Star;