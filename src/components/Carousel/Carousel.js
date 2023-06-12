import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import "./Carousel.css"

// Ajout des icons 
library.add(faChevronLeft, faChevronRight);

function Carousel({pictures}) { 
    
    
    const [index, setIndex] = useState(0)  
    const totalPictures = pictures.length-1 
    // Permet a index de toujours rester dans les limites du array
    if (index < 0) setIndex(totalPictures) 
    if (index > totalPictures) setIndex(0) 
    
    return(
        <div className='carousel'>
        <div className='div-image'>  
        <img src={pictures[index]} className="class-image" key={"car-"+index} alt={"photo "+index} />
        </div>   
        {/* Affiche les chevrons pour changer d'image*/}
        {totalPictures > 0 && ( 
            <div> 
            <button onClick={() => setIndex(index - 1)}>
            <FontAwesomeIcon className='chevron-gauche' icon={faChevronLeft} />
            </button>
            <button onClick={() => setIndex(index + 1)}>
            <FontAwesomeIcon className='chevron-droit' icon={faChevronRight} />
            </button>
            </div>
            )}
            {/* Affiche l'index de l'image par rapport au nombre total d'image dans le array */}
            {totalPictures > 0 && (
                <div> 
                <p>
                {index+1}/{totalPictures+1}
                </p>
                </div>
                )}
                </div>
                )
            }
            
            export default Carousel