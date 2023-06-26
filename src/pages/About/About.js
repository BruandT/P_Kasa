import React from 'react';
import "./About.css"
import Collapse from '../../components/Collapse/Collapse';
import datas from "../../data/about.json"

const About = () => {
    return (
        <>
            <main>
                <div className="main-top-about">
                    <div className="main-top-overlay"></div>
                </div>
                <div className="main-bottom-about">
                    {datas.map((data) => {
                        const { id, title, description } = data;
                        return (
                            <Collapse key={id} name={title} description={description} />
                        )
                    })}
                </div>
            </main>
        </>
    );
};

export default About;