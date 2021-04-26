import React, {useState, useContext} from 'react';
import './Login.css';
import './SobreNos.css'
import logo from "./imagenes/logo_blue_desert2.png";
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
                <p className="texto2"> 
                        </p>
                </div> 
            </div>
            <Footer/>
        </div>
        </>
    )

   
}

export default SobreNos;
