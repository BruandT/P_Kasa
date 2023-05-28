import React from 'react';
import "./About.css"
import Collapse from '../../components/Collapse/Collapse';
import datas from "./About.json"

const About = () => {
    return (
        <>
        <main>
            <div id="main-top-about">
            <div className="main-top-overlay"> 
            </div>
            </div>
            {datas.map((data) =>{
                const { id, title, description} = data;

                return (
                <Collapse key={id} name={title} description={description}/>
                )

                })}
        </main>
        </>
    );
};

export default About;