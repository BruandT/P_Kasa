import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navigation.css"

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/home">
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/about">
                    <li>A propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;