import React, { useState, useContext, useEffect} from 'react';
import './Login.css';
import './SobreNos.css'
import logo from "./imagenes/logo_blue_desert2.png";
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import { MyContext } from './contexts/MyContext';
import { Chart } from "react-google-charts";

function Resultados() {
    const { rootState, verResultados } = useContext(MyContext);
    const { isAuth } = rootState;
    var plataforma;

    // const resultados = {
    //     seguido: data.seguido,
    //     plataformas: data.plataformas
    // }

    // const initialState = {
    //     errorMsg: '',
    //     successMsg: '',
    //     plataforma: [
    //         ["Mercado Libre", 0],
    //         ["Amazon", 0],
    //         ["Facebook Marketplace", 0],
    //         ["Alibaba / Aliexpress", 0],
    //         ["eBay", 0],
    //         ["E-shop propia de cada marca (Nike, Supreme, Walmart, Liverpool, etc)", 0]
    //     ],
    //     seguido: [
    //         ["Más de 10 veces por mes", 0],
    //         ["10 a 6 veces al mes", 0],
    //         ["5 a 1 vez al mes", 0],
    //         ["1 vez cada varios meses", 0],
    //         ["No realizo compras en línea", 0]
    //     ],
    // }


    //const data = verResultados();

    const initialState = {
        errorMsg: '',
        successMsg: data.message,
        plataforma: data.respuestas.plataformas,
        seguido: data.respuestas.seguido
    }

    // const recieveData = (event) =>{
    //     event.preventDefault(); 
    //     const data = await verResultados();

    //     if (data.success) {
    //         setState({
    //             ...initialState,
    //             successMsg: data.message,
    //             plataforma: data.respuestas.plataformas,
    //             seguido: data.respuestas.seguido
    //         });
    //     }
    //     else {
    //         setState({
    //             ...state,
    //             successMsg: '',
    //             errorMsg: data.message
    //         });
    //     }
    // }


    const [isOpen, setIsOpen] = useState(false);
    console.log(data);
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const [state, setState] = useState(initialState);

    useEffect(() => {
        const getResultados = () =>{
        const data = await verResultados();

        if (data.success) {
            setState({
                ...initialState,
                successMsg: data.message,
                plataforma: data.respuestas.plataformas,
                seguido: data.respuestas.seguido
            });
        }
        else {
            setState({
                ...state,
                successMsg: '',
                errorMsg: data.message
            });
        }
        }
        getResultados();
    }, []);

    const submitForm = async (event) => {
        event.preventDefault();
        const data = await verResultados();

        if (data.success) {
            setState({
                ...initialState,
                successMsg: data.message,
                plataforma: data.respuestas.plataformas,
                seguido: data.respuestas.seguido
            });
        }
        else {
            setState({
                ...state,
                successMsgDelete: '',
                errorMsg: data.message
            });
        }

        var output = [];
        types = state.seguido;
        for (let key in types) {
            output.push([types[key]]);
        }
    }


    return (
        <>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap" rel="stylesheet" />
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
                    data={
                        state.seguido
                    }
                    options={{
                        title: 'Frecuencia de compras en línea antes de la pandemia',
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />


                <Footer />
            </div>
        </>
    )


}

export default Resultados;