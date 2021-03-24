import React from 'react';
import './Header.css';

function Header(){
    return(
        <div id="main-header">
            <a id="logo-header" href="#">
            <img class="logo-header" src="./images/logo_coronanalyst.jpeg"/>
		    </a> 

            <nav class="navbar navbar-dark bg-primary">
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Sobre nosotros</a></li>
                    <li><a href="#">Registrate</a></li>
                    <li><a href="#">Iniciar sesión</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;