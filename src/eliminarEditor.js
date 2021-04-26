import './Login.css';
import './EliminarEditor.css';
import React, {useContext, useState} from 'react';
import Navbar1 from './components/Navbar/Navbar';
import Sidebar1 from './components/Sidebar/Sidebar';
import añadir from "./imagenes/editor.png";
import basura from "./imagenes/basura.png";
import Footer from './components/Footer/Footer';
import {MyContext} from './contexts/MyContext';
import {Link as LinkR} from 'react-router-dom';



function EliminarEditor(){

    const {rootState} = useContext(MyContext);
    const {isAuth} = rootState;


    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    };
     
    let Sidebar;
    let Navbar;
    let ContestarEncuesta;
        

    return(
        <>
        <Sidebar1 isOpen={isOpen} toggle={toggle} />;
        <Navbar1 toggle={toggle}/>;
        <head>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap" rel="stylesheet"/> 
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap" rel="stylesheet"/> 
            </head>
        <div id = "uno">
            
            <main>
                    <div class="bloque">
                        <h1>Añadir nuevo editor </h1>
                        <div class="a1">
                            <img className="imgInicio" src={añadir}/>     
                        </div>
                        <div class="a2">
                            <p className="texto"> Ingrese los datos del nuevo editor</p>  

                            <input type="text" id="email" name="email" required placeholder="Correo electrónico"/>
                            <input type="password" id="password" name="password" required placeholder="Contraseña"/>

                        </div>
                    </div>
                    

                    <div class="bloque">
                        <h1>Eliminar editor </h1>
                        <div class="a1">
                            <img className="imgInicio" src={basura}/>     
                        </div>
                        <div class="a2">
                            <p className="texto"> Seleccione el editor que desea eliminar</p>  

                            <select name="combo">
                                
                                <option value="1">Opción 1</option>
                                <option value="2" selected>Opción 2</option> 
                                <option value="3">Opción 3</option>
                            </select>
                        </div>
                    </div>
                       
                    
            </main>
            <Footer/>
        </div>
        </>
         
    );
    
}

export default EliminarEditor;