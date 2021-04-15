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
        <div> 
            <div id = "main-contentSobreNos">
                <h1>¿Qué es Blue Desert? </h1>
                <div class="splitSN leftSobreNos">
                    <img class="imgSN" src={logo}/> 
                </div>   
                <div class="splitSN rightSobreNos">
                <p className="texto2"> A  finales de 2019 comenzó la pandemia actual de COVID-19, resultando en una cuarentena global desde marzo del 2020. Esto ha tenido repercusiones profundas en todos los ámbitos de la vida humana, incluyendo, naturalmente, el sector de salud pública, pero también el empresarial y económico. Así mismo, la pandemia ha ocasionado fuertes alteraciones a la vida cotidiana de las personas. Un tema importante es el impacto sobre el comportamiento de compra, ya que el estado de cuarentena ha presentado nuevas dificultades para muchos para llevar a cabo sus compras, tanto las relacionadas a comodidades como las de necesidades básicas. Por esto mismo, la pandemia ha resultado perjudicial para la economía de grandes y pequeñas empresas. En este contexto, es de interés económico y social analizar las nuevas tendencias (en contraste con las anteriores a la pandemia) en el comportamiento de compra del público.
            
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
