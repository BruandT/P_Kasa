import React, { useEffect, useState} from 'react';
import Collapse from '../../components/Collapse/Collapse';
import Carousel from '../../components/Carousel/Carousel';
import { useParams } from 'react-router-dom';
import Star from '../../components/Star/Star'
import "./Logement.css"
import datas from "../../data/data.json"
import Error from "../../pages/Error404/Error404"
import Tag from '../../components/Tag/Tag';


function Logement() {

    
    const { id } = useParams();
    
    
    useEffect(() => {
        datas.map((house) => {
            if (house.id === id) {
                setLogement(house);
            }
            return null;
        });
    }, [id]);
     
    const [logement, setLogement] = useState({
        tags: [],
        equipments: [],
        pictures: [],
        rating: "",
        host: { name: "", picture: "" },
    });
    
    if (logement.title === undefined) {
        return <Error />;
    }
    
    
    const stuffList = logement.equipments.map((element, index) => (
        <li className='description-content' key={"stuff-"+index.toString()}>{element}</li>
        ))
        
        
        return (
            <>
            <main>
            <Carousel pictures={logement.pictures}/>
            
            <div className='top-description'>
            <div className='right-side-logement'>
            <h1 className='h1-logement'>{logement.title}</h1>
            <h2 className='h2-logement'>{logement.location}</h2>
            <div className='div-tags'>
            
            {logement.tags.map((tag, index) => (
                <Tag key={index} tag={tag}/>
                ))}
                </div>
            </div>
            
            <div className='left-side-logement'>
            <div className='profil-propio'>
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.title} />
            </div>
            
            <div className='stars'>
            <Star rating={logement.rating}/>
            </div>
            </div>
            </div>
            <div className='collapse-logement'>
            <Collapse name="Description" description={logement.description} />
            <Collapse name="Equipements" description={stuffList} />
            </div>
            </main>
            </>
            )
        }
        
        export default Logement