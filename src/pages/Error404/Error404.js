import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Error404.css"

function Error404(){
    return (
        <>
        <main className='error-main'>
        <h1 className='error-h1'>404</h1>
        <p className='error-p'>Oups! La page que vous demandez n'existe pas.</p>
        <NavLink to="/">
            <button className='error-btn'>Retourner sur la page d'accueil</button>
        </NavLink>
        
        </main>
        </>
        )
    }
    
    export default Error404;