import React from 'react';
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

const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <a>
          <img src={logo} id="logo-nav" alt='logo' />
        </a>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        {/* <Bars /> */}
        <NavMenu>
          <NavLink to='/'>
            Inicio
          </NavLink>
          <NavLink to='/SobreNosotros' activeStyle>
            Sobre nosotros
          </NavLink>
          <NavLink to='/Registro' activeStyle>
            Registrarse
          </NavLink>
          {/* <NavLink to='/Login' activeStyle>
            Iniciar sesión
          </NavLink> */}
          {/* Second Nav */}
          <NavBtn>
          <NavBtnLink to='/Login'>Iniciar Sesión</NavBtnLink>
        </NavBtn>
        </NavMenu>
        
      </Nav>
    </>
  );
};

export default Navbar;