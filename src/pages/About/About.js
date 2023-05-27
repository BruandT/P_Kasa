import React from 'react';
import "./About.css"
import Collapse from '../../components/Collapse/Collapse';
import axios from 'axios';  
import { useEffect, useState } from 'react';

const About = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("./about.json").then((res) => setData(res.data))
    })

    return (
        <>
        <main>
            <div id="main-top-about">
            <div className="main-top-overlay"> 
            </div>
            </div>
            {data.map((collapse, index) =>(
                <Collapse key={index} name={collapse.name} description={collapse.description}/>
            ))}
        </main>
        </>
    );
};

export default About;