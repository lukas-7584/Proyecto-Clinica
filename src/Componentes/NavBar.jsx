import React from "react";
import { Link } from 'react-router-dom';

export default function NavBar ( ){
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
                <div class="container-fluid">
                            <Link to={'/'} class="navbar-brand" href="#"> <img src='Logo1.jpg' className='App-logo'/></Link>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse  " id="navbarNav">
                                    <ul class="navbar-nav ">
                                        <li class="nav-item">
                                        <Link to={'/'} class="nav-link active" aria-current="page" href="#">Inicio</Link>
                                        </li>
                                        <li class="nav-item">
                                        <a class="nav-link" href="#">Nosotros</a>
                                        </li>
                                        <li class="nav-item">
                                        <a class="nav-link" href="#">Contacto</a>
                                        </li>
                                        <li class="nav-item">
                                        <a class="nav-link" href="#">Login</a>
                                        </li>
                                    </ul>
                            </div>
                </div>
    </nav>
    );
}