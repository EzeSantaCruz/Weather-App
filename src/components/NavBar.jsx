import React from 'react'

import '../CSS/NavBar.css'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav class="navbar">
            <div class="container-fluid">
                <div className='container-links'>
                    <Link to="/" className='title-Nav-Bar'>Weather-App</Link>
                    <Link to="/marine" className='Link-NavBar'>Mares</Link>
                </div>
                <form class="d-flex" role="search">
                    <input
                        class="form-control me-2"
                        type="search"
                        placeholder="Buscar"
                        aria-label="Buscar"
                    />
                    <button class="btn-navBar" type="submit">
                    Buscar
                    </button>
                </form>
            </div>
        </nav>
    );
}

export default NavBar