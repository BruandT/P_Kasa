import React from 'react';
import Navigation from "../Navigation/Navigation";
import { NavLink } from 'react-router-dom';
import "./Header.css"

function Header() {
    return (
        <>
            <header>
                <NavLink to ="/">
                <img src="./assets/logo/logo.png" alt="Logo Kasa" />
                </NavLink>
                <Navigation />
            </header>
        </>

    )
}

export default Header;