import React from 'react'

import '../CSS/NavBar.css'

function NavBar() {
    return (
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand"><span>Weather-App</span></a>
                <form class="d-flex" role="search" onSubmit={console.log("Hola")}>
                    <input
                        class="form-control me-2"
                        type="search"
                        placeholder="Buscar"
                        aria-label="Buscar"
                    />
                    <button class="btn btn-outline-success" type="submit">
                    Buscar
                    </button>
                </form>
            </div>
        </nav>
    );
}

export default NavBar