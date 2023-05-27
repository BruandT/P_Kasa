import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import "./Home.css"
import axios from 'axios';  


function Home() {   
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("./data.json").then((res) => setData(res.data))
    })
   
    
    return (
        <>
        <main>        
        <div id="main-top">  
        <div id="main-top-overlay">      
        <h1 id="home-h1">Chez vous, partout et ailleurs</h1>
        </div>
        </div>
        <div id="main-bottom">
            {data.map((location, index) =>(
                <Card key={index} title={location.title} img={location.cover}/>
            ))}
        </div>
        </main>
        </>
        )
    }

export default Home;