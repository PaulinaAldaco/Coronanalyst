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
                            <p>A inicios del año 2020 inició el confinamiento de la pandemia actual del virus COVID-19, esta pandemia llegó para cambiar la vida humana en muchos sentidos, tanto en aspectos culturales y sociales, como en ámbitos de salud pública, economía y vida cotidiana. Es por esto por lo que la mayoría de las personas han modificado su estilo de vida, adaptándose a la nueva normalidad y a las posibilidades que esta permite. Algunos de los cambios más significativos en la vida de las personas fue la fuerte tendencia a permanecer mucho mas tiempo que antes en casa, lo cual propició ciertos cambios de comportamiento en los hábitos de consumo, ya que incrementaron las ventas a través de plataformas digitales para minimizar riesgo de contagio al acudir a una tienda física. Otro cambio significativo fue el de el aumento en la demanda de servicios de streaming, como lo son Netflix, Amazon Prime, Disney +, etc. Esto por el mismo motivo del aumento del tiempo que las personas pasan en sus hogares. </p>   
                            <button type="button" class="linkI">Contestar encuesta</button>
                        </div>
                    </div>
                    
                    <p class="texto">Es por este motivo que el equipo de Blue Desert se dio a la tarea de crear este sitio con la finalidad de recabar información del publico en general para analizar como ha afectado la pandemia en la vida de las personas en diversos aspectos y detectar las nuevas tendencias que se han generado por esta situación. El sitio consiste en una serie de preguntas relacionadas con tu estilo de vida y como se ha visto afectado o modificado a raíz de la pandemia.
                    Lo que tienes que hacer para acceder al sitio es realizar tu registro, lo cual te dará acceso a las preguntas, una vez que hayas terminado de llenar el cuestionario, tendrás acceso a consultar los resultados del total de participantes hasta el momento. Estos resultados los podrás consultar cuando tu desees iniciando sesión con tu cuenta. </p>   
                    
            </main>
            <Footer/>
        </div>
        </>
         
    );
    
}

export default Inicio;