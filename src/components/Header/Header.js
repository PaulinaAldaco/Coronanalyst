import React from'react';
import './Header.css';
import { AppBar} from "@material-ui/core";
import logo from '../../imagenes/logo_coronanalyst.jpeg'



export default function Header() {
    return(
    <div id="main-header">
      <a >
        <img id="logo-header" src={logo}/>
      </a> 

    </div>
  );
}


