import React, { useContext, useState } from 'react'
import './Login.css';
import './Encuesta.css';
import './components/Header/Header.css';
import formImage from './imagenes/form.png';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { MyContext } from './contexts/MyContext';
import { Redirect } from "react-router-dom";

function Encuesta() { 

    const { rootState, createEncuesta } = useContext(MyContext);
    const { isAuth, theUser, type, profile, survey } = rootState;
    console.log(isAuth);

    const initialState = {
        userInfo: {
            compras: '',
            plataforma: [],
            pago: [],
            categoria: [],
            tiempo: '',
            seguido: '',
            plataformaPandemia: [],
            metodoPago: [],
            categoriaCompra: [],
            tiempoComputadora: '',
            dineroEnLinea: '',
            fisicoLinea: '',
            sintomas: '',
            condicionesMedicas: [],
            situacionesPandemia: [],
            actFisica: '',

            id_user: theUser
        },
        errorMsg: '',
        successMsg: '',
        categoria: [
            { id: 1, value: "Ropa", isChecked: false },
            { id: 2, value: "Comida a domicilio (Rappi, UberEats, etc)", isChecked: false },
            { id: 3, value: "Super a domicilio (víveres)", isChecked: false },
            { id: 4, value: "Muebles y/o electrodomésticos", isChecked: false },
            { id: 5, value: "Coleccionables", isChecked: false },
            { id: 6, value: "Libros (físicos o electrónicos)", isChecked: false },
            { id: 7, value: "Computadoras y/o electrónicos", isChecked: false },
            { id: 8, value: "Herramientas y ferretería", isChecked: false },
            { id: 9, value: "Entretenimiento (música, tv, videojuegos, juguetes, etc.)", isChecked: false },
            { id: 10, value: "Programas o aplicaciones", isChecked: false },
            { id: 11, value: "Reservaciones y boletos", isChecked: false },
            { id: 12, value: "Artículos de higiene", isChecked: false },
            { id: 13, value: "Artículos deportivos", isChecked: false },
            { id: 14, value: "No realizaba compras en línea", isChecked: false },
            { id: 15, value: "Otros", isChecked: false }
        ],
        compras: [
            { id: 1, value: "1 a 5 veces al mes.", isChecked: false },
            { id: 2, value: "6 a 10 veces al mes.", isChecked: false },
            { id: 3, value: "Más de 10 veces por mes.", isChecked: false },
            { id: 4, value: "1 vez cada varios meses.", isChecked: false },
            { id: 5, value: "No realizaba compras en línea", isChecked: false }
        ],

        plataforma: [
            { id: 1, value: "Mercado Libre", isChecked: false },
            { id: 2, value: "Amazon", isChecked: false },
            { id: 3, value: "Facebook Marketplace", isChecked: false },
            { id: 4, value: "Alibaba / Aliexpress", isChecked: false },
            { id: 5, value: "eBay", isChecked: false },
            { id: 6, value: "E-shop propia de cada marca (Nike, Supreme, Walmart, Liverpool, etc)", isChecked: false },
        ],


        pago: [
            { id: 1, value: "Tarjeta de crédito", isChecked: false },
            { id: 2, value: "Tarjeta de débito", isChecked: false },
            { id: 3, value: "Paypal", isChecked: false },
            { id: 4, value: "Mercado Pago", isChecked: false },
            { id: 5, value: "Efectivo", isChecked: false },
            { id: 6, value: "Transferencia electrónica", isChecked: false },
            { id: 7, value: "Depósito en tiendas de conveniencia (Oxxo, 7Eleven, etc.)", isChecked: false },
            { id: 8, value: "Otro", isChecked: false },
            { id: 9, value: "No realizaba compras en internet", isChecked: false },
        ],


        tiempo: [
            { id: 1, value: "7 horas o más al día", isChecked: false },
            { id: 2, value: "6 a 2 horas al día", isChecked: false },
            { id: 3, value: "6 a 2 horas a la semana", isChecked: false },
            { id: 4, value: "Menos de 2 horas a la semana", isChecked: false }
        ],
        seguido: [
            { id: 1, value: "Más de 10 veces por mes.", isChecked: false },
            { id: 2, value: "10 a 6 veces al mes.", isChecked: false },
            { id: 3, value: "5 a 1 vez al mes.", isChecked: false },
            { id: 4, value: "1 vez cada varios meses.", isChecked: false },
            { id: 5, value: "No realizo compras en línea", isChecked: false }
        ],

        plataformaPandemia: [
            { id: 1, value: "Mercado Libre", isChecked: false },
            { id: 2, value: "Amazon", isChecked: false },
            { id: 3, value: "Facebook Marketplace", isChecked: false },
            { id: 4, value: "Alibaba / Aliexpress", isChecked: false },
            { id: 5, value: "eBay", isChecked: false },
            { id: 6, value: "E-shop propia de cada marca (Nike, Supreme, Walmart, Liverpool, etc)", isChecked: false },
            { id: 7, value: "Otros", isChecked: false },
            { id: 8, value: "No realizo compras en línea", isChecked: false }
        ],

        metodoPago: [
            { id: 1, value: "Tarjeta de crédito", isChecked: false },
            { id: 2, value: "Tarjeta de débito", isChecked: false },
            { id: 3, value: "Paypal", isChecked: false },
            { id: 4, value: "Mercado Pago", isChecked: false },
            { id: 5, value: "Efectivo", isChecked: false },
            { id: 6, value: "Transferencia electrónica", isChecked: false },
            { id: 7, value: "Depósito en tiendas de conveniencia (Oxxo, 7Eleven, etc.)", isChecked: false },
            { id: 8, value: "Otro", isChecked: false },
            { id: 9, value: "No realizo compras en línea", isChecked: false }
        ],
        categoriaCompra: [
            { id: 1, value: "Ropa", isChecked: false },
            { id: 2, value: "Comida a domicilio (Rappi, UberEats, etc)", isChecked: false },
            { id: 3, value: "Super a domicilio (víveres)", isChecked: false },
            { id: 4, value: "Muebles y/o electrodomésticos", isChecked: false },
            { id: 5, value: "Coleccionables", isChecked: false },
            { id: 6, value: "Libros (físicos o electrónicos)", isChecked: false },
            { id: 7, value: "Computadoras y/o electrónicos", isChecked: false },
            { id: 8, value: "Herramientas y ferretería", isChecked: false },
            { id: 9, value: "Entretenimiento (música, tv, videojuegos, juguetes, etc.)", isChecked: false },
            { id: 10, value: "Programas o aplicaciones", isChecked: false },
            { id: 11, value: "Reservaciones y boletos", isChecked: false },
            { id: 12, value: "Artículos de higiene", isChecked: false },
            { id: 13, value: "Artículos deportivos", isChecked: false },
            { id: 14, value: "Otros", isChecked: false },
            { id: 15, value: "Sigo sin realizar compras en línea", isChecked: false }
        ],
        tiempoComputadora: [
            { id: 1, value: "7 horas o más al día", isChecked: false },
            { id: 2, value: "6 a 2 horas al día", isChecked: false },
            { id: 3, value: "6 a 2 horas a la semana", isChecked: false },
            { id: 4, value: "Menos de 2 horas a la semana", isChecked: false }
        ],
        dineroEnLinea: [
            { id: 1, value: "Menos de 1,000", isChecked: false },
            { id: 2, value: "1,000 - 2,500", isChecked: false },
            { id: 3, value: "2,500 - 5,000", isChecked: false },
            { id: 4, value: "5,000 - 7,500", isChecked: false },
            { id: 5, value: "7,500 - 10,000", isChecked: false },
            { id: 6, value: "Más de 10,000", isChecked: false }
        ],
        fisicoLinea: [
            { id: 1, value: "Fisico", isChecked: false },
            { id: 2, value: "Línea", isChecked: false }
        ],

        sintomas: [
            { id: 1, value: "Sí", isChecked: false },
            { id: 2, value: "No", isChecked: false }
        ],
        condicionesMedicas: [
            { id: 1, value: "Diabetes", isChecked: false },
            { id: 2, value: "Hipertensión", isChecked: false },
            { id: 3, value: "Obesidad", isChecked: false },
            { id: 4, value: "Asma", isChecked: false },
            { id: 5, value: "Condiciones cardíacas", isChecked: false },
            { id: 6, value: "Inmunodeficiencia", isChecked: false },
            { id: 7, value: "Hepatitis", isChecked: false },
            { id: 8, value: "Otros no listados", isChecked: false },
            { id: 9, value: "Ninguna", isChecked: false }
        ],
        situacionesPandemia: [
            { id: 1, value: "Ansiedad", isChecked: false },
            { id: 2, value: "Estrés", isChecked: false },
            { id: 3, value: "Depresión", isChecked: false },
            { id: 4, value: "Déficit de atención", isChecked: false },
            { id: 5, value: "Baja de rendimiento laboral/académico", isChecked: false },
            { id: 6, value: "Baja autoestima", isChecked: false },
            { id: 7, value: "Otros no enlistados", isChecked: false },
            { id: 8, value: "No me he sentido afectado", isChecked: false }
        ],
        actFisica: [
            { id: 1, value: "Aumentó", isChecked: false },
            { id: 2, value: "Permaneció igual que antes", isChecked: false },
            { id: 3, value: "Disminuyó", isChecked: false }
        ]

    }

    const [state, setState] = useState(initialState);

    // On Submit the Form
    const submitForm = async (event) => {
        event.preventDefault(); 
        console.log(state.userInfo);
        console.log(JSON.stringify(state.userInfo.plataforma));
        const data = await createEncuesta(state.userInfo);
        if (data.success) {
            setState({
                ...initialState,
                successMsg: data.message,
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


    const onChange = (item) => (e) => {
        var lista = [];
        var pregunta = [];

        lista = state.userInfo[e.target.name]
        pregunta = state[e.target.name]
    
        let id = item.id;
        pregunta[id - 1].isChecked = e.target.checked
        setState({ [e.target.name]: pregunta })
        

        var idx = lista.indexOf(item.value);

        if (idx > -1) {
            lista.splice(idx, 1);
        } else {
            lista.push(item.value);
        }

        setState({
            ...state,
            userInfo: {
                ...state.userInfo,
                [e.target.name]: lista
            }
        })
    }

    // On change the Input Value (name, email, password)
    const onChangeValue = (e) => {
        setState({
            ...state,
            userInfo: {
                ...state.userInfo,
                [e.target.name]: e.target.value
            }
        });
    }

    const isRequired = (e) => {
        var elements = document.getElementsByName(e.target.name);

        var atLeastOneChecked = false;//at least one checkbox is checked
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].checked === true) {
                atLeastOneChecked = true;
            }
        }

        if (atLeastOneChecked === true) {
            for (i = 0; i < elements.length; i++) {
                elements[i].required = false;
            }
        } else {
            for (i = 0; i < elements.length; i++) {
                elements[i].required = true;
            }
        }

    }


    // Show Message on Success or Error
    let successMsg = '';
    let errorMsg = '';
    if (state.errorMsg) {
        errorMsg = <div className="error-msg">{state.errorMsg}</div>;
    }
    if (state.successMsg) {
        successMsg = <div className="success-msg">{state.successMsg}</div>;
    }

    if (isAuth) {
        if(type=="general"){
            if (survey) {
                console.log("Redirecting to home (profile and survey completed)")
                return <Redirect to="/" />
                
            } else if (!profile){
                console.log("Redirecting to personal data")
                return <Redirect to="/DatosPersonales" />
    
            } else {
    
                return (
                    <div>
                        <Header />
                        <section id="main-content">
                            <form onSubmit={submitForm}>
                                <h1>Responde las siguientes preguntas</h1>
                                <div id="images2" href="#">
                                    <img id="images2" src={formImage} alt="form" />
                                </div>
                                <fieldset>
                                    <legend>¿Qué tan seguido compraba en línea?</legend>
                                    <div class="form-group">
                                        <div class="radio">
                                            <React.Fragment>{
                                                initialState.compras.map(item => (
                                                    <label>
                                                        <input type="radio" name="compras" value={item.value} onChange={onChangeValue} required={!item.isChecked} onClick={isRequired} required />
                                                        {item.value}
                                                        <br />
                                                    </label>
                                                ))
                                            }</React.Fragment>
                                        </div>
    
                                    </div>
                                </fieldset>
    
                                <fieldset>
                                    <legend>¿Qué plataformas utilizaba para realizar compras en línea?</legend>
                                    <div class="form-group">
                                        <div class="checkbox">
                                            <React.Fragment>{
                                                initialState.plataforma.map(item => (
                                                    <label>
                                                        <input type="checkbox" onClick={isRequired} name="plataforma" value={item.value} onChange={onChange(item)} required />
                                                        {item.value}
                                                        <br />
                                                    </label>
                                                ))
                                            }</React.Fragment>
                                        </div>
    
                                    </div>
                                </fieldset>
    
                                <fieldset>
                                    <legend>¿Qué métodos de pago utilizaba más para realizar sus compras en línea?</legend>
                                    <div class="form-group">
                                        <div class="checkbox">
                                            <React.Fragment>{
                                                initialState.pago.map(item => (
                                                    <label>
                                                        <input type="checkbox" onClick={isRequired} name="pago" value={item.value} onChange={onChange(item)} required />
                                                        {item.value}
                                                        <br />
                                                    </label>
                                                ))
                                            }</React.Fragment>
                                        </div>
    
                                    </div>
    
                                </fieldset>
    
                                <fieldset>
                                    <legend>¿De cuáles de las siguientes categorías realizaba compras?</legend>
                                    <div class="form-group">
                                        <div class="checkbox">
                                            <React.Fragment>{
                                                initialState.categoria.map(item => (
                                                    <label>
                                                        <input type="checkbox" onClick={isRequired} required name="categoria" value={item.value} onChange={onChange(item)} />
                                                        {item.value}
                                                        <br />
                                                    </label>
                                                ))
                                            }</React.Fragment>
                                        </div>
                                    </div>
                                </fieldset>
    
                                <fieldset>
                                    <legend>¿Cuánto tiempo estima que se encontraba usando la computadora para actividades diarias?</legend>
                                    <div class="form-group">
                                        <div class="radio">
                                            <React.Fragment>{
                                                initialState.tiempo.map(item => (
                                                    <label>
                                                        <input type="radio" name="tiempo" value={item.value} onChange={onChangeValue} onClick={isRequired} required />
                                                        {item.value}
                                                        <br />
                                                    </label>
                                                ))
                                            }</React.Fragment>
                                        </div>
    
                                    </div>
                                </fieldset>
    
                                <fieldset>
                                    <legend>¿Qué tan seguido compra en línea ahora?</legend>
                                    <div class="form-group">
                                        <div class="radio">
                                            <React.Fragment>{
                                                initialState.seguido.map(item => (
                                                    <label>
                                                        <input type="radio" name="seguido" value={item.value} onChange={onChangeValue} onClick={isRequired} required />
                                                        {item.value}
                                                        <br />
                                                    </label>
                                                ))
                                            }</React.Fragment>
                                        </div>
                                    </div>
                                </fieldset>
    
                                <fieldset>
                                    <legend>¿Qué plataformas utiliza para realizar compras en línea?</legend>
                                    <div class="form-group">
                                        <div class="checkbox">
                                            <React.Fragment>{
                                                initialState.plataformaPandemia.map(item => (
                                                    <label>
                                                        <input type="checkbox" name="plataformaPandemia" value={item.value} onChange={onChange(item)} onClick={isRequired} required />
                                                        {item.value}
                                                        <br />
                                                    </label>
                                                ))
                                            }</React.Fragment>
                                        </div>
                                    </div>
                                </fieldset>
    
    
                                <fieldset>
                                    <legend>¿Qué método de pago utiliza usted para sus compras en internet?</legend>
                                    <div class="form-group">
                                        <div class="checkbox">
                                            <React.Fragment>{
                                                initialState.metodoPago.map(item => (
                                                    <label>
                                                        <input type="checkbox" name="metodoPago" value={item.value} onChange={onChange(item)} onClick={isRequired} required />
                                                        {item.value}
                                                        <br />
                                                    </label>
                                                ))
                                            }</React.Fragment>
                                        </div>
                                    </div>
                                </fieldset>
    
    
                                <fieldset>
                                    <legend>¿De cuáles de las siguientes categorías ha realizado compras?</legend>
                                    <div class="form-group">
                                        <div class="checkbox">
                                            <React.Fragment>{
                                                initialState.categoriaCompra.map(item => (
                                                    <label>
                                                        <input type="checkbox" name="categoriaCompra" value={item.value} onChange={onChange(item)} onClick={isRequired} required />
                                                        {item.value}
                                                        <br />
                                                    </label>
                                                ))
                                            }</React.Fragment>
                                        </div>
                                    </div>
                                </fieldset>
    
    
                                <fieldset>
                                    <legend>¿Cuánto tiempo estima que usa la computadora para actividades diarias? </legend>
                                    <div class="form-group">
                                        <div class="radio">
                                            <React.Fragment>{
                                                initialState.tiempoComputadora.map(item => (
                                                    <label>
                                                        <input type="radio" name="tiempoComputadora" value={item.value} onChange={onChangeValue} onClick={isRequired} required />
                                                        {item.value}
                                                        <br />
                                                    </label>
                                                ))
                                            }</React.Fragment>
                                        </div>
                                    </div>
                                </fieldset>
    
    
                                <fieldset>
                                    <legend>¿En promedio cuánto dinero estima que gasta en compras en línea al mes? </legend>
                                    <div class="form-group">
                                        <div class="radio">
                                            <React.Fragment>{
                                                initialState.dineroEnLinea.map(item => (
                                                    <label>
                                                        <input type="radio" name="dineroEnLinea" value={item.value} onChange={onChangeValue} onClick={isRequired} required />
                                                        {item.value}
                                                        <br />
                                                    </label>
                                                ))
                                            }</React.Fragment>
                                        </div>
                                    </div>
                                </fieldset>
    
    
                                <fieldset>
                                    <legend>¿Actualmente compras más seguido en físico o en línea? </legend>
                                    <div class="form-group">
                                        <div class="radio">
                                            <React.Fragment>{
                                                initialState.fisicoLinea.map(item => (
                                                    <label>
                                                        <input type="radio" name="fisicoLinea" value={item.value} onChange={onChangeValue} onClick={isRequired} required />
                                                        {item.value}
                                                        <br />
                                                    </label>
                                                ))
                                            }</React.Fragment>
                                        </div>
                                    </div>
                                </fieldset>
    
    
                                <fieldset>
                                    <legend>¿Desde que empezó la pandemia, ha presentado síntomas relacionados al COVID-19? </legend>
                                    <div class="form-group">
                                        <div class="radio">
                                            <React.Fragment>{
                                                initialState.sintomas.map(item => (
                                                    <label>
                                                        <input type="radio" name="sintomas" value={item.value} onChange={onChangeValue} onClick={isRequired} required />
                                                        {item.value}
                                                        <br />
                                                    </label>
                                                ))
                                            }</React.Fragment>
                                        </div>
                                    </div>
                                </fieldset>
    
    
                                <fieldset>
                                    <legend>¿Usted sufre de alguna de las siguientes condiciones médicas? </legend>
                                    <div class="form-group">
                                        <div class="checkbox">
                                            <React.Fragment>{
                                                initialState.condicionesMedicas.map(item => (
                                                    <label>
                                                        <input type="checkbox" name="condicionesMedicas" value={item.value} onChange={onChange(item)} onClick={isRequired} required />
                                                        {item.value}
                                                        <br />
                                                    </label>
                                                ))
                                            }</React.Fragment>
                                        </div>
                                    </div>
                                </fieldset>
    
    
                                <fieldset>
                                    <legend>¿A causa de la pandemia usted se ha sentido relacionado con algunas de las siguientes situaciones? </legend>
                                    <div class="form-group">
                                        <div class="checkbox">
                                            <React.Fragment>{
                                                initialState.situacionesPandemia.map(item => (
                                                    <label>
                                                        <input type="checkbox" name="situacionesPandemia" value={item.value} onChange={onChange(item)} onClick={isRequired} required />
                                                        {item.value}
                                                        <br />
                                                    </label>
                                                ))
                                            }</React.Fragment>
                                        </div>
                                    </div>
                                </fieldset>
    
                                <fieldset>
                                    <legend>Durante la pandemia ¿Cómo ha cambiado su actividad física? </legend>
                                    <div class="form-group">
                                        <div class="radio">
                                            <React.Fragment>{
                                                initialState.actFisica.map(item => (
                                                    <label>
                                                        <input type="radio" name="actFisica" value={item.value} onChange={onChangeValue} onClick={isRequired} required />
                                                        {item.value}
                                                        <br />
                                                    </label>
                                                ))
                                            }</React.Fragment>
                                        </div>
                                    </div>
                                </fieldset>
    
                                <button class="registrarse" type="submit">Enviar respuestas</button>
                            </form>
                        </section>
                        <Footer />
                    </div>
                )
            }
        }
        else{
            console.log("Redirecting to home (user is adnmin/editor)")
            return <Redirect to="/" />
        }
    }
    else {
        console.log("Redirecting to login")
        return <Redirect to="/Login" />
    }

}

export default Encuesta;