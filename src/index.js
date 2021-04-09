import React from 'react';
import ReactDOM from 'react-dom';
import MyContextProvider from './contexts/MyContext';
import './index.css';
import Login from './Login';
import Encuesta from './Encuesta';
import Registro from './pantallas/registro';
import SesionCerrada from './pantallas/sesion_cerrada';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";

//<React.StrictMode>
ReactDOM.render(
  <React.StrictMode>
    <MyContextProvider>
      <Login />
    </MyContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
