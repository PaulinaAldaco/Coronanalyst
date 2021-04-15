import React from 'react';
import './Footer.css';
import blue from '../../imagenes/logo_blue_desert1.png';

function Footer(){
    return(
        <footer id="main-footer">
        <div> 
            <img class="imgFt" src={blue}/> 
            <p>Blue Desert   Coronanayst</p>
        </div> 
        </footer> 
    )
}

export default Footer;