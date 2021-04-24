import React, {useState, useContext} from 'react';
import './Login.css';
import './SobreNos.css'
import logo from "./imagenes/logo_blue_desert2.png";
import Arali from "./imagenes/Arali.jpeg";
import Isaac from "./imagenes/Isaac.jpeg";
import Paulina from "./imagenes/Paulina.jpeg";
import Eduardo from "./imagenes/Eduardo.jpeg";
import Logo_itesm from "./imagenes/logo_itesm.png"
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import {MyContext} from './contexts/MyContext';

function SobreNos(){  
    const {rootState} = useContext(MyContext);
    const {isAuth} = rootState;


    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    };
    
    return(
        <>
        <Navbar toggle={toggle}/>;
        <Sidebar isOpen={isOpen} toggle={toggle} />;
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

                <h1>Equipo</h1>
                <img class="imgIntegrante" src={Logo_itesm}/> 
                <p>Blue desert está conformado por estudiantes de Ingeniería en Tecnologías Computacionales del Tecnológico de Monterrey campus Chihuahua y campus Sonora.</p>
                <div class="splitSN leftSobreNos">
                    <img class="imgIntegrante" src={Paulina}/> 
                    <h2>Paulina Aldaco</h2>
                </div>
                <div class="splitSN rightSobreNos">
                    <img class="imgIntegrante" src={Isaac}/> 
                    <h2>Isaac Garcia</h2>
                </div> 
                <div class="splitSN rightSobreNos">
                    <img class="imgIntegrante" src={Arali}/> 
                    <h2>Aralí Mata</h2>
                </div>
                <div class="splitSN rightSobreNos">
                    <img class="imgIntegrante" src={Eduardo}/> 
                    <h2>Eduardo Maldonado</h2>
                </div>

            </div>

            
            <Footer/>
        </div>
        </>
    )

   
}

export default SobreNos;
