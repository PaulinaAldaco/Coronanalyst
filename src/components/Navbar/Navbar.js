import React, {useContext, useState} from 'react';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavLink,
  Bars,
  MobileIcon,
  NavMenu,
  NavBtn,
  NavBtnLink 
} from './NavbarElements';
import './Navbar.css'
import logo from "../../imagenes/logo_coronanalyst.jpeg"
import {MyContext} from '../../contexts/MyContext'

const Navbar = ({toggle}) => {
  const {rootState} = useContext(MyContext);
  const {isAuth, survey} = rootState;

  let NavButton;
  let NavLink2;

  if (isAuth){
    if(survey)
      NavLink2 =  <NavLink to='/Encuesta' activeStyle> Resultados </NavLink>;
    else
      NavLink2 =  <NavLink to='/Encuesta' activeStyle> Encuesta </NavLink>;
    
    NavButton = <NavBtn><NavBtnLink to='/SesionCerrada'>Cerrar sesión</NavBtnLink></NavBtn>;
  }else{
    NavLink2 =  <NavLink to='/Registro' activeStyle> Registrarse </NavLink>;
    NavButton = <NavBtn><NavBtnLink to='/Login'>Iniciar Sesión</NavBtnLink></NavBtn>;
  }

  return (
    <>
      <Nav>
        <a>
          <img src={logo} id="logo-nav" alt='logo' />
        </a>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavLink to='/'>Inicio</NavLink>
          <NavLink to='/SobreNosotros' activeStyle> Sobre nosotros </NavLink>
          {NavLink2}
          {NavButton}
        </NavMenu>
        
      </Nav>
    </>
  );
};

export default Navbar;