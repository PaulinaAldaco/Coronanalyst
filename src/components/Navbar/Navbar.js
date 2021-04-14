import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import './Navbar.css'
import logo from "../../imagenes/logo_coronanalyst.jpeg"

const Navbar = () => {
  return (
    <>
      <Nav>
        <a>
          <img src={logo} id="logo-header" alt='logo' />
        </a>
        <Bars />
        <NavMenu>
          <NavLink to='/Inicio' activeStyle>
            Inicio
          </NavLink>
          <NavLink to='/SobreNosotros' activeStyle>
            Sobre nosotros
          </NavLink>
          <NavLink to='/Registro' activeStyle>
            Registrarse
          </NavLink>
          <NavLink to='/Login' activeStyle>
            Iniciar sesión
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/Login'>Iniciar Sesión</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;