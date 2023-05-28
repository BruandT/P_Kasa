import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Collapse from '../../components/Collapse/Collapse';
import Carousel from '../../components/Carousel/Carousel';
import "./Logement.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import datas from "../data.json"

library.add(faStar);

const stars = [1, 2, 3, 4, 5]

function Logement() {
    const [searchParams] = useSearchParams();
    const [idLogement] = useState(searchParams.get('_id'));
    
    const data = datas.find(element => element.id === idLogement)

    const stuffList = data.equipments.map((element, index) => (
          <li className='description-content' key={"stuff-"+index.toString()}>{element}</li>
        ))
    

    return (
        <>
        <main>
                <Carousel pictures={data.pictures}/>

                <div id='top-description'>
                    <div id='right-side-logement'>
                        <h1 id='h1-logement'>{data.title}</h1>
                        <h2 id='h2-logement'>{data.location}</h2>
                        <div id='div-tags'>
                            { data.tags.map((element, index) => {
                                return(<p className='tags' key={"tags-"+index}>{element}</p>)
                            })}
                        </div>
                    </div>

                    <div id='left-side-logement'>
                        <div id='profil-propio'>
                            <p>{data.host.name}</p>
                            <img src={data.host.picture} alt={data.title} />
                        </div>
                        
                        <div className='stars'>
                            {
                                stars.map(element => {
                                    const starsNbr = parseInt(data.rating)
                                    return(<span key={"star-"+element} className={element <= starsNbr ? 'span-color' : 'span-uncolor'}><FontAwesomeIcon icon={faStar} /></span>)
                                })
                            }
                        </div>
                    </div>
                </div>
                <div id='collapse-logement'>
                    <Collapse name="Description" description={data.description} />
                    <Collapse name="Equipements" description={stuffList} />
                </div>
        </main>
        </>
    )
}

export default Logement