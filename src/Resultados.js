import React, { useState, useContext, useEffect } from 'react';
import './Login.css';
import './SobreNos.css'
import './Resultados.css'
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import { MyContext } from './contexts/MyContext';
import { Chart } from "react-google-charts";

function Resultados() {
    const { rootState, verResultados } = useContext(MyContext);
    const { isAuth } = rootState;

    const initialState = {
        errorMsg: '',
        successMsg: '',

        seguido: [],

        categoria: [],

        dineroEnLinea: [],

        fisicoLinea: [],

        plataforma: []
    }

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        console.log("Use effect");
        const getResultados = async () => {
            const { data } = await verResultados();
            console.log(data);
            console.log(data.respuestas.dineroEnLinea);
            data.respuestas.plataforma[6][0] = "E-Shop";
            data.respuestas.categoria[2][0] = "Comida a domicilio";
            data.respuestas.categoria[9][0] = "Entretenimiento";

            setState({
                ...initialState,
                seguido: data.respuestas.seguido,
                categoria: data.respuestas.categoria,
                dineroEnLinea: data.respuestas.dineroEnLinea,
                fisicoLinea: data.respuestas.fisicoLinea,
                plataforma: data.respuestas.plataforma
            });


            console.log("Plataformas:", state.plataforma);
            console.log("Seguido:", state.seguido);
            console.log("categoria", state.categoria);
            console.log("dineroEnLinea", state.dineroEnLinea);

        }
        getResultados();
    }, []);


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

                <h1>Resultados</h1>
                <div id="main-contentSobreNos">

                    <Chart
                        width={'90%'}
                        height={'500px'}

                        chartType="Bar"
                        loader={<div>Loading Chart</div>}
                        className="graficas"
                        data={
                            state.seguido
                        }
                        options={{
                            chart: {
                                title: 'Frecuencia de compras en línea',
                                subtitle: 'Esta gráfica muestra la frecuencia de compra de los usarios antes de la pandemia en contraste con la frecuencia actual',
                            },
                            axes: {
                                y: {
                                    0: { side: 'left', label: 'Numero de personas que lo eligieron' } // Top x-axis.
                                }
                            },
                            colors: ['#02044b', '#256ce1'],
                            vAxis: { title: 'Numero de personas' },
                            hAxis: { title: 'Frecuencia' },
                            seriesType: 'bars',
                            series: { 5: { type: 'line' } },

                        }}
                        rootProps={{ 'data-testid': '1' }}
                    />
                </div>

                <div id="main-contentSobreNos">
                    <Chart
                        width={'90%'}
                        height={'750px'}
                        chartType="Bar"
                        loader={<div>Loading Chart</div>}
                        className="graficas"
                        data={
                            state.categoria
                        }
                        options={{
                            chart: {
                                title: 'Categorias de compras en linea',
                                subtitle: 'Esta gráfica muestra las categorias que los usuarios compraban antes de la pandemia en contraste con las que compran actualmente',
                            },
                            axes: {
                                x: {
                                    0: { side: 'top', label: 'Numero de personas que lo eligieron' } // Top x-axis.
                                }
                            },
                            colors: ['#02044b', '#256ce1'],
                            vAxis: { title: 'Frecuencia' },
                            hAxis: { title: 'Opciones' },
                            seriesType: 'bars',
                            series: { 5: { type: 'line' } },
                            bars: "horizontal"
                        }}
                        rootProps={{ 'data-testid': '1' }}
                    />
                </div>

                <div id="main-contentSobreNos">
                    <Chart
                        width={'90%'}
                        height={'500px'}
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        className="graficas"
                        data={
                            state.dineroEnLinea
                        }
                        options={{
                            slices: {
                                0: { color: '#02044b' },
                                1: { color: '#256ce1' },
                                2: { color: '#87EEFF' },
                                3: { color: '#92B2ED' },
                                4: { color: '#314A79' },
                                5: { color: '#51607A' },
                                6: { color: '#2C75F5' },
                            },
                            titleTextStyle: {
                                color: 666666,
                                fontName: "Roboto",
                                bold: false,
                                fontSize: 20
                            },
                            legend: { position: 'top', textStyle: { color: 666666, fontSize: 16, fontName: "Roboto", bold: false } },
                            title: 'Dinero gastado en compras en linea al mes (expresado en MXN)',
                            is3D: true
                        }}

                        rootProps={{ 'data-testid': '1' }}
                    />
                </div>

                <div id="main-contentSobreNos">
                    <Chart
                        width={'90%'}
                        height={'500px'}
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        className="graficas"
                        data={
                            state.fisicoLinea
                        }

                        options={{

                            slices: {
                                0: { color: '#256ce1' },
                                1: { color: '#87EEFF' }
                            },

                            titleTextStyle: {
                                color: 666666,
                                fontName: "Roboto",
                                bold: false,
                                fontSize: 20
                            },

                            legend: { position: 'top', textStyle: { color: 666666, fontSize: 16, fontName: "Roboto", bold: false } },
                            title: 'Cantidad de compras',
                            is3D: true
                        }}

                        rootProps={{ 'data-testid': '2' }}
                    />
                </div>

                <div id="main-contentSobreNos">
                    <Chart
                        width={'90%'}
                        height={'500px'}
                        chartType="Bar"
                        loader={<div>Loading Chart</div>}
                        className="graficas"
                        data={
                            state.plataforma
                        }
                        options={{
                            chart: {
                                title: 'Plataformas utilizadas para compras en linea',
                                subtitle: 'Esta gráfica muestra las plataformas mas utilizadas antes de la pandemia en contraste con las mas utilizadas actualmente',
                            },
                            axes: {
                                x: {
                                    0: { side: 'top', label: 'Numero de personas que lo eligieron' } // Top x-axis.
                                }
                            },

                            colors: ['#02044b', '#256ce1'],
                            vAxis: { title: 'Frecuencia' },
                            hAxis: { title: 'Opciones' },
                            seriesType: 'bars',
                            series: { 5: { type: 'line' } },
                            bars: "horizontal"
                        }}
                        rootProps={{ 'data-testid': '1' }}
                    />
                </div>



                <Footer />
            </div>
        </>
    )


}

export default Resultados;