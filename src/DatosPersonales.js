import React, {useContext,useState} from 'react'
import './DatosPersonales.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import {MyContext} from './contexts/MyContext';
import {Redirect} from "react-router-dom";

function DatosPersonales() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen)
    };

    const {rootState, createProfile} = useContext(MyContext);
    const {isAuth,theUser,showLogin} = rootState;
    console.log(isAuth);

    const initialState = {
        userInfo:{
            genero:'',
            edad:'',
            estadocivil:'',
            estudios:'',
            ocupacion:'',
            ingreso_economico:'',
            estado:'',
            id_user: theUser
        },
        errorMsg:'',
        successMsg:'',
    }

    const [state,setState] = useState(initialState);

    // On Submit the Form
    const submitForm = async (event) => {
        event.preventDefault();
        const data = await createProfile(state.userInfo);
        if(data.success){
            setState({
                ...initialState,
                successMsg:data.message,
            });
        }
        else{
            setState({
                ...state,
                successMsg:'',
                errorMsg:data.message
            });
        }
    }

    // On change the Input Value (name, email, password)
    const onChangeValue = (e) => {
        setState({
            ...state,
            userInfo:{
                ...state.userInfo,
                [e.target.name]:e.target.value
            }
        });
    }
    
    // Show Message on Success or Error
    let successMsg = '';
    let errorMsg = '';
    if(state.errorMsg){
        errorMsg = <div className="error-msg">{state.errorMsg}</div>;
    }
    if(state.successMsg){
        successMsg = <div className="success-msg">{state.successMsg}</div>;
    }

    if(isAuth) {
        console.log("Redirecting...")
        return <Redirect to="/Encuesta" />
    }

    return (
      <div>
      <Header />
      <div class="container">
          <form onSubmit={submitForm} noValidate>
              <div class="row">
                  <h1>Coloca los siguientes datos</h1>
                  <br/>
                  <div class="col">
                      <label>Género</label>
                      <select name="genero" id="genero" value={state.userInfo.genero} onChange={onChangeValue}>
                          <option value="seleccione">Seleccione una opción</option>
                          <option value="Femenino">Femenino</option>
                          <option value="Masculino">Masculino</option>
                          <option value="Otro" >Otro</option>
                      </select>
                      <label>Edad</label>
                      <br/>
                      <select name="rangoedad" id="rangoedad" value={state.userInfo.edad} onChange={onChangeValue}>
                          <option value="seleccione">Seleccione una opción</option>
                          <option value="Menos de 15">1 a 10</option>
                          <option value="15 a 20">11 a 20</option>
                          <option value="21 a 25">21 a 30</option>
                          <option value="26 a 30">31 a 40</option>
                          <option value="31 a 35">31 a 45</option>
                          <option value="36 a 40">41 a 50</option>
                          <option value="41 a 45">51 a 60</option>
                          <option value="46 a 50">61 a 70</option>
                          <option value="51 a 55">41 a 50</option>
                          <option value="56 a 60">51 a 60</option>
                          <option value="61 a 65">61 a 70</option>
                          <option value="66 a 70">61 a 70</option>
                          <option value="Más de 70">Más de 70</option>
                      </select>
                      <br/>
                      <label>Estado civil</label>
                      <select name="estadocivil" id="estadocivil" value={state.userInfo.estadocivil} onChange={onChangeValue}>
                          <option value="seleccione">Seleccione una opción</option>
                          <option value="Soltero">Soltero</option>
                          <option value="Casado">Casado</option>
                          <option value="Divorciado">Divorciado</option>
                          <option value="Unión libre">Unión libre</option>
                          <option value="Viudo">Viudo</option>
                      </select>
                      <label>Nivel máximo de estudios</label>
                      <select name="estudios" id="estudios" value={state.userInfo.estudios} onChange={onChangeValue}>
                      <option value="seleccione">Seleccione una opción</option>
                          <option value="No aplica">No aplica</option>
                          <option value="Primaria">Primaria</option>
                          <option value="Secundaria">Secundaria</option>
                          <option value="Preparatoria">Preparatoria</option>
                          <option value="Universidad">Universidad</option>
                          <option value="Maestría">Maestría</option>
                          <option value="Doctorado">Doctorado</option>
                      </select>
                  </div>
                  <div class="col">
                      <label>Ocupación</label>
                      <select name="ocupacion" id="ocupacion" value={state.userInfo.ocupacion} onChange={onChangeValue}>
                            <option value="seleccione">Seleccione una opción</option>
                            <option value="Sector industrial">Sector industrial</option>"
                            <option value="Sector educativo">Sector educativo</option>"
                            <option value="Sector gubernamental">Sector gubernamental</option>"
                            <option value="Sector de comercio">Sector de comercio</option>"
                            <option value="Sector de Transporte">Sector de Transporte</option>"
                            <option value="Sector de Comida">Sector de Comida</option>"
                            <option value="Sector de Alojamiento">Sector de Alojamiento</option>"
                            <option value="Sector de Construcción">Sector de Construcción</option>"
                            <option value="Sector de suministro de energía">Sector de suministro de energía</option>"
                            <option value="Sector de actividades inmobiliarias">Sector de actividades inmobiliarias</option>"
                            <option value="Sector artístico">Sector artístico</option>"
                            <option value="Sector de Pesca y acuicultura">Sector de Pesca y acuicultura</option>"
                            <option value="Sector de informática">Sector de informática</option>"
                            <option value="Sector de servicios financieros">Sector de servicios financieros</option>"
                            <option value="Sector judicial">Sector judicial</option>"
                            <option value="Hogar">Hogar</option>"
                            <option value="Estudiante">Estudiante</option>"
                            <option value="Otro">Otro</option>"
                      </select>
                      <br/>
                       <label>Ingreso económico</label>
                       <select name="ingreso_economico" id="ingreso_economico" value={state.userInfo.ingreso_economico} onChange={onChangeValue}>
                            <option value="seleccione">Seleccione una opción</option>
                            <option value="Menos de $1,000">Menos de $1,000</option>
                            <option value="$1,000 - $10,000">$1,000 - $10,000</option>
                            <option value="$10,000 - $30,000">$10,000 - $30,000</option>
                            <option value="$30,000 - $50,000">$30,000 - $50,000</option>
                            <option value="$50,000+">$50,000+</option>
                      </select>
                      <br/>
                      <label>Estado</label>
                      <select name="estado" id="estado" value={state.userInfo.estado} onChange={onChangeValue}>
                        <option value="seleccione">Seleccione una opción</option>
                        <option value="Aguascalientes">Aguascalientes</option>
                        <option value="Baja California">Baja California</option>
                        <option value="Baja California Sur">Baja California Sur</option>
                        <option value="Campeche">Campeche</option>
                        <option value="Chiapas">Chiapas</option>
                        <option value="Chihuahua">Chihuahua</option>
                        <option value="Coahuila de Zaragoza">Coahuila de Zaragoza</option>
                        <option value="Colima">Colima</option>
                        <option value="Durango">Durango</option>
                        <option value="Estado de México">Estado de México</option>
                        <option value="Guanajuato">Guanajuato</option>
                        <option value="Guerrero">Guerrero</option>
                        <option value="Hidalgo">Hidalgo</option>
                        <option value="Jalisco">Jalisco</option>
                        <option value="Michoacán de Ocampo">Michoacán de Ocampo</option>
                        <option value="Morelos">Morelos</option>
                        <option value="Nayarit">Nayarit</option>
                        <option value="Nuevo León">Nuevo León</option>
                        <option value="Oaxaca">Oaxaca</option>
                        <option value="Puebla">Puebla</option>
                        <option value="Querétaro">Querétaro</option>
                        <option value="Quintana Roo">Quintana Roo</option>
                        <option value="San Luis Potosí">San Luis Potosí</option>
                        <option value="Sinaloa">Sinaloa</option>
                        <option value="Sonora">Sonora</option>
                        <option value="Tabasco">Tabasco</option>
                        <option value="Tamaulipas">Tamaulipas</option>
                        <option value="Tlaxcala">Tlaxcala</option>
                        <option value="Veracruz">Veracruz</option>
                        <option value="Yucatán">Yucatán</option>
                        <option value="Zacatecas">Zacatecas</option>
                      </select>
                     
                  </div>
                  
              </div>
            <div class="bottom-container">
              <div class="row">
                   <input type="submit" value="Enviar"/>
              </div>
          </div>
          </form>
         
      </div>
      <Footer />
      </div>
    );
  }


export default DatosPersonales;