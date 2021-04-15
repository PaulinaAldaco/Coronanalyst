import React from 'react';
import './Footer.css';
import logo from '../../imagenes/logo_blue_desert1.png'

function Footer(){
    return(
        <footer id="main-footer">
            {/* <p className = "p_blue">Blue Desert Coronanayst</p> */}
            <a><img className = "logo-blue" src = {logo}/></a>
        </footer> 
    )
}

export default Footer;