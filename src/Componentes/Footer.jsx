import React from 'react'

export default function Footer ( ) {
    return (
        <>
                <div>
                <footer class="seccion">
                    <div class="container">
                                <div class="row">
                                        <div class="columna columna-25 columna-mobile-100">
                                                <img src="Logo1.jpg" className='logo-footer' alt="" />
                                                <p>El sabor del encuentro. </p>
                                        </div>
                                        <div class="columna columna-25 columna-mobile-100">
                                                <h3>Navegación</h3>
                                                <ul>
                                                        <li> <a href="#inicio">Inicio</a> </li>
                                                        <li>  <a href="#nosotros">Nosotros</a> </li>
                                                        <li>  <a href="#contacto">Contacto</a> </li>
                                                        <li>   <a href="#login">Login</a> </li>
                                                </ul>
                                        </div>
                                        <div class="columna columna-25 columna-mobile-100">

                                            <h3>DATOS DE CONTACTO</h3>
                                                    <ul>
                                                        <li>Email: amaya.jorgelucas@gmail.com</li>
                                                        <li>Telefono : +54 9 261 3917016 </li>
                                                        <li>MENDOZA. ARGENTINA</li>
                                                    </ul>
                                            
                                        </div>
                                        <div class="columna columna-25 columna-mobile-100">

                                            <h3 className='RD'>REDES SOCIALES</h3>
                                                    <ul class="redes">
                                                        <li >
                                                            <a href="https://www.linkedin.com/in/lucas-amaya-9a75a5213/"> 
                                                                <i class="fa-brands fa-linkedin"></i >
                                                            </a> </li>
                                                        <li> <a href="https://www.instagram.com/george_lukaa/"> 
                                                            <i class="fa-brands fa-instagram"> </i>
                                                        </a> </li>
                                                        <li> <a href="https://www.facebook.com/lukasmza/"> 
                                                            <i class="fa-brands fa-facebook"></i>
                                                        </a> </li>
                                                    </ul>
                                            
                                        </div>
                                </div>
                    </div>
                    <div class="barra-footer">
                        COPYRIGHT © 2022 JORGE LUCAS AMAYA
                    </div>
            </footer>
                </div>
        
        </>
    )
}
