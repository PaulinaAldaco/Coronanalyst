import React from'react';
import './Header.css';
import { AppBar} from "@material-ui/core";
import logo from '../../imagenes/logo_coronanalyst.jpeg'
import {NavLink, Link} from 'react-router-dom';
import  Login from "../../Login"
import Registro from "../../pantallas/registro"
import Encuesta from "../../Encuesta"
import SesionCerrada from "../../pantallas/sesion_cerrada"


/*function Header(){
  return(
      <div>
        <div id="main-header">
          <a id="logo-header" href="#">
            <img class="logo-header" src={logo}/>
          </a> 
        </div>
        <nav>
          <NavLink to="">Encuesta</NavLink>
          <NavLink to="/"><SesionCerrada/></NavLink>
          <NavLink to="/"><Registro/></NavLink>
          <NavLink to="/"><Login/></NavLink>
        </nav>
      </div>
  )
}

export default Header;*/

/*export default function Header() {
  const displayDesktop = () => {
    return(
    <div id="main-header">
      <a id="logo-header" href="#">
        <img class="logo-header" src={logo}/>
      </a> 

      <nav class="navbar navbar-dark bg-primary">
        <ul>
          <NavLink to="../../pantallas/registro"><Registro/>Registrarse</NavLink>
          
        </ul>
      </nav>  
    </div>);
  };
  
  <NavLink to="../../Login"><Login/>Login</NavLink>
          <NavLink to="../../pantallas/sesion_cerrada"><SesionCerrada/>Sesion cerrada</NavLink>
          <NavLink to="../../Encuesta"><Encuesta/>Encuesta</NavLink>
          
  return (
    <header>
      <AppBar>{displayDesktop()}</AppBar>
    </header>
  );
}
*/
  
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


