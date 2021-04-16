import React, {useContext,useState} from 'react'
import {MyContext} from '../../contexts/MyContext';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavLink,
  MobileIcon,
  NavMenu,
  NavBtnLink
} from './NavbarElements';
import './Navbar.css'
import logo from "../../imagenes/logo_coronanalyst.jpeg"

const Navbar2 = ({toggle}) => {

  const {rootState,logoutUser} = useContext(MyContext);

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
          <NavLink  to='/' exact={true} activeStyle>
            Inicio
          </NavLink>
          <NavLink to='/SobreNosotros' activeStyle>
            Sobre nosotros
          </NavLink>
          <NavLink to='/Encuesta' activeStyle>
            Encuesta
          </NavLink>
           {/* <NavLink to='/SesionCerrada' activeStyle>
            Sesion Cerrada
          </NavLink>   */}
          <NavBtnLink to='/SesionCerrada' onClick={logoutUser}>Cerrar sesión</NavBtnLink>
        </NavMenu>
      </Nav> 
    </>
  );
};

export default Navbar2;