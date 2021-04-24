import './Login.css';
import './Inicio.css';
import React, {useContext, useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import grafica from "./graficas.png";
import Footer from './components/Footer/Footer';
import {MyContext} from './contexts/MyContext';
import {Link as LinkR} from 'react-router-dom';


function Inicio(){

    const {rootState} = useContext(MyContext);
    const {isAuth} = rootState;


    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    };
     
    let ContestarEncuesta;
        
    if (isAuth)
        ContestarEncuesta = <LinkR  to="/Encuesta">ContestarEncuesta</LinkR>
    else
        ContestarEncuesta = <LinkR  to="/Registro">ContestarEncuesta</LinkR>
    

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
        <div id = "uno">
            
            <main>
                    <div class="bloque">
                        <h1>Analizando los efectos del COVID-19 </h1>
                        <div class="b1 ">
                            <img className="imgInicio" src={grafica}/>     
                        </div>
                        <div class="b2 ">
                            <p className="texto">A inicios del año 2020 inició el confinamiento de la pandemia actual del virus COVID-19, 
                            esta pandemia llegó para cambiar la vida humana en muchos sentidos, tanto en aspectos culturales y sociales, 
                            como en ámbitos de salud pública, economía y vida cotidiana. Es por esto por lo que la mayoría de las personas
                             han modificado su estilo de vida, adaptándose a la nueva normalidad y a las posibilidades que esta permite. </p>  

                            {/* <button type="button" class="linkI">{ContestarEncuesta}</button> */}
                        </div>
                    </div>
                    
                    <p class="texto">Es por este motivo que el equipo de Blue Desert se dio a la tarea de crear este sitio con la finalidad de recabar información del publico en general para analizar como ha afectado la pandemia en la vida de las personas en diversos aspectos y detectar las nuevas tendencias que se han generado por esta situación. El sitio consiste en una serie de preguntas relacionadas con tu estilo de vida y como se ha visto afectado o modificado a raíz de la pandemia.
                    Lo unico que tienes que hacer es registrarte y contestar las preguntas, luego de eso podrás ver los resultados de todas las personas que la han contestado. </p>   
                    
            </main>
            <Footer/>
        </div>
        </>
         
    );
    
}

export default Inicio;