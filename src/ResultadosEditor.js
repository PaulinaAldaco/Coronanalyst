import './Login.css';
import './AdministrarEditores.css';
import React, { useContext, useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import { MyContext } from './contexts/MyContext';
import { Redirect } from "react-router-dom";
import { Chart } from "react-google-charts";

function ResultadosEditor() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const { rootState, verResultadosEditor } = useContext(MyContext);
    const { isAuth, type, profile, survey } = rootState;

    const initialState = {
        resultados: [],
    }

    const [state, setState] = useState(initialState);


    useEffect(() => {
        console.log("Use effect");
        const getResultados = async () => {
            const data = await verResultadosEditor();

            if (data.success) {

                var resultadosTemp = [
                    ['Encuesta', 'Estado de los usuarios'],
                    ['Han contestado', data.answered]
                    ['No han contestado', data.notAnswered]
                ]

                setState({
                    ...initialState,
                    resultados: resultadosTemp
                });
                console.log("Resultados recibidos:", state.resultados);

            } else {

                var resultadosTemp = [
                    ['Encuesta', 'Estado de los usuarios'],
                    ['Han contestado', 0]
                    ['No han contestado', 0]
                ]

                setState({
                    ...initialState,
                    resultados: resultadosTemp
                });

            }
        }
        getResultados();

    }, []);



    if (isAuth) {
        if (type === "editor") {
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
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        className="graficas"
                        data={
                            state.resultados
                        }

                        options={{

                            slices: {
                                0: { color: '#02044b' },
                                1: { color: '#256ce1' }
                            },

                            titleTextStyle: {
                                color: 666666,
                                fontName: "Roboto",
                                bold: false,
                                fontSize: 20
                            },

                            legend: { position: 'top', textStyle: { color: 666666, fontSize: 16, fontName: "Roboto", bold: false } },
                            title: 'Porcentaje de usuarios que han contestado la encuesta',
                            is3D: true
                        }}

                        rootProps={{ 'data-testid': '2' }}
                    />
                           
                        </div>
                    </div>
                    <Footer />

                </>
            );
        }
        else if (type === "admin") {
            console.log("Redirecting to home (user is an admin)")
            return <Redirect to="/" />
        }
        else {
            if (profile) {
                if (survey) {
                    console.log("Redirecting to home (profile and survey completed)")
                    return <Redirect to="/Resultados" />
                }
                else {
                    console.log("Redirecting to survey")
                    return <Redirect to="/Encuesta" />
                }
            }
            else {
                console.log("Redirecting to profile creation page")
                return <Redirect to="/DatosPersonales" />
            }
        }
    }
    else {
        console.log("Redirecting to login")
        return <Redirect to="/Login" />
    }
}

export default ResultadosEditor;