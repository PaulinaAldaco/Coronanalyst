import React, {useState} from 'react';
import './Login.css';
import './sobreNos.css'
import logo from "./imagenes/logo_blue_desert2.png";
import Navbar1 from './components/Navbar/Navbar';
import Sidebar1 from './components/Sidebar/Sidebar';
import Navbar2 from './components/Navbar/Navbar2';
import Sidebar2 from './components/Sidebar/Sidebar2';
import Footer from './components/Footer/Footer';

function SobreNos(){ 
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen)
    };

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
        <div> 
            <div id = "main-contentSobreNos">
                <h1>¿Qué es Blue Desert? </h1>
                <div class="splitSN leftSobreNos">
                    <img class="imgSN" src={logo}/> 
                </div>   
                <div class="splitSN rightSobreNos">
                    <p> A  finales de 2019 comenzó la pandemia actual de COVID-19, resultando en una cuarentena global desde marzo del 2020. Esto ha tenido repercusiones profundas en todos los ámbitos de la vida humana, incluyendo, naturalmente, el sector de salud pública, pero también el empresarial y económico. 
                

                    </p>
                </div> 
            </div>
            <Footer/>
        </div>
        </>
    )

   
}

export default SobreNos;
