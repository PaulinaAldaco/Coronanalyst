import './Header.css';
import logo from '../../imagenes/logo_coronanalyst.jpeg'
import React, { Component } from 'react';
import { AppBar} from "@material-ui/core";

export default function Header() {
  const displayDesktop = () => {
    return(
    <div id="main-header">
      <a id="logo-header" href="#">
        <img class="logo-header" src={logo}/>
      </a> 

      <nav class="navbar navbar-dark bg-primary">
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Sobre nosotros</a></li>
            <li><a href="../../pantallas/registro">Registrarse</a></li>
            <li><a href=">../../Login">Iniciar sesión</a></li>
        </ul>
      </nav>  
    </div>);
  };
  
  return (
    <header>
      <AppBar>{displayDesktop()}</AppBar>
    </header>
  );
}
