import React, {useState, useContext} from 'react';
import './Login.css';
import './SobreNos.css'
import logo from "./imagenes/logo_blue_desert2.png";
import Navbar1 from './components/Navbar/Navbar';
import Sidebar1 from './components/Sidebar/Sidebar';
import Navbar2 from './components/Navbar/Navbar2';
import Sidebar2 from './components/Sidebar/Sidebar2';
import Footer from './components/Footer/Footer';
import {MyContext} from './contexts/MyContext';

function SobreNos(){ 
    const {rootState} = useContext(MyContext);
    const {isAuth} = rootState;


    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    };
    
    let Sidebar;
    let Navbar;
        
    if (isAuth){
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
        <head>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap" rel="stylesheet"/> 
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap" rel="stylesheet"/> 
        </head>
        <div> 
            <div id = "main-contentSobreNos">
                <h1>¿Qué es Blue Desert? </h1>
                <div class="splitSN leftSobreNos">
                    <img class="imgSN" src={logo}/> 
                </div>   
                <div class="splitSN rightSobreNos">
                <p className="texto2"> En el contexto actual, es de interés económico y social analizar las nuevas tendencias (en contraste con las anteriores a la pandemia) en el comportamiento de compra del público.
            
                            Es por esto que Blue Desert es el desarrollador de "Coronanalyst", un sistema que tiene como finalidad identificar los cambios, afectaciones y nuevas tendencias en el estilo de vida de las personas a raíz de la actual pandemia. El recabar esta información ayudará a diferentes industrias a adaptarse y poder ofrecer productos y servicios de una mayor calidad y enfocarse principalmente en las necesidades del cliente.
                        </p>
                </div> 
            </div>
            <Footer/>
        </div>
        </>
    )

   
}

export default SobreNos;
