import React, {useState, useContext} from 'react';
import './Login.css';
import './SobreNos.css'
import logo from "./imagenes/logo_blue_desert2.png";
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import {MyContext} from './contexts/MyContext';
import { Chart } from "react-google-charts";

function Resultados(){  
    const {rootState, verResultados} = useContext(MyContext);
    const {isAuth} = rootState;

    const data = await verResultados();

    const resultados = {
        seguido: data.seguido,
        plataformas: data.plataformas
    }

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

        <Chart
            width={'500px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Cargando gráfica de frecuencia de compra</div>}
            // data={[
            //     ['Task', 'Hours per Day'],
            //     ['Work', 11],
            //     ['Eat', 2],
            //     ['Commute', 2],
            //     ['Watch TV', 2],
            //     ['Sleep', 7],
            // ]}
            data = {
                resultados.seguido
            }
            options={{
                title: 'Frecuencia de compras en línea antes de la pandemia',
            }}
            rootProps={{ 'data-testid': '1' }}
        />
        
            
            <Footer/>
        </div>
        </>
    )

   
}

export default Resultados;