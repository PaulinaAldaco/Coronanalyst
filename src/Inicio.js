import './Login.css';
import './Inicio.css';
import React, {useState} from 'react';
import Navbar1 from './components/Navbar/Navbar';
import Sidebar1 from './components/Sidebar/Sidebar';
import Navbar2 from './components/Navbar/Navbar2';
import Sidebar2 from './components/Sidebar/Sidebar2';
import grafica from "./graficas.png";
import Footer from './components/Footer/Footer';
import {MyContext} from './contexts/MyContext';
import { render } from '@testing-library/react';

function Inicio(){  
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    };
    
    //const isLoggedIn = MyContext.isLoggedIn;
    const isLoggedIn = true;
    //const isLoggedIn = false;
    let Sidebar;
    let Navbar;
        
    if (isLoggedIn){
        Sidebar = <Sidebar2 isOpen={isOpen} toggle={toggle} />;
        Navbar = <Navbar2 toggle={toggle}/>;
    }else{
        Sidebar = <Sidebar1 isOpen={isOpen} toggle={toggle} />;
        Navbar = <Navbar1 toggle={toggle}/>;
     }

    

    return(
        <>
        {Sidebar}
        {Navbar} 
        <div id = "uno">
            <main>
                    <div class="bloque">
                        <h1>Analizando los efectos del COVID-19 </h1>
                        <div class="b1">
                            <img className="imgInicio" src={grafica}/>     
                        </div>
                        <div class="b2">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>   
                            <button type="button" class="linkI">Contestar encuesta</button>
                        </div>
                    </div>
                    
                    <p class="texto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>   
                    
            </main>
            <Footer/>
        </div>
        </>
         
    );
    
}

export default Inicio;