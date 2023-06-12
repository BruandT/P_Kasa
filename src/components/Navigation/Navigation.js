import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navigation.css"

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                {/* Ajout de la classe nav-active au clique, permet de sous-ligner l'element */}
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Accueil</li>
                </NavLink>
                {/* Ajout de la classe nav-active au clique, permet de sous-ligner l'element */}
                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>A Propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;