import React, {useContext,useState} from 'react'
import './Login.css';
import './Encuesta.css';
import './components/Header/Header.css';
import formImage from './imagenes/form.png'; 
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import {MyContext} from './contexts/MyContext';
import {Redirect} from "react-router-dom";

function Encuesta(){ 

    const {rootState, createEncuesta} = useContext(MyContext);
    const {isAuth,theUser,showLogin} = rootState;
    console.log(isAuth);
    var lista = [];


    // const deRequireCb = (Name) => {
    //    var elements=document.getElementsByClassName(Name);
    
    //     var atLeastOneChecked=false;//at least one checkbox is checked
    //     // for (i=0; i<elements.length; i++) {
    //     //     if (elements[i].checked === true) {
    //     //         atLeastOneChecked=true;
    //     //     }
    //     // }

    //     for(const element of elements.entries()){
    //         if (element.checked === true){
    //             atLeastOneChecked=true;
    //         }
    //     }
    
    //     if (atLeastOneChecked === true) {
    //         for (const element of elements.entries()) {
    //             element.required = false;
    //         }
    //     } else {
    //         for (const element of elements.entries()) {
    //             elements.required = true;
    //         }
    //     }
    // }

    
    const initialState = {
        userInfo:{
            compras:'',
            plataforma:[],
            pago:[],
            categoria:[],
            tiempo:'',
            seguido:'',
            plataformaPandemia:[],
            metodoPago:[],
            categoriaCompra:[],
            tiempoComputadora:'',
            dineroEnLinea:'',
            fisicoLinea:'',
            dineroLInea:'',
            sintomas:'',
            condicionesMedicas:[],
            situacionesPandemia:[],
            actFisica:'',
            
            id_user: theUser
        },
        errorMsg:'',
        successMsg:'',
    }



    const [state,setState] = useState(initialState);

    // On Submit the Form
    const submitForm = async (event) => {
        event.preventDefault();
        const data = await createEncuesta(state.userInfo);
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

    

    const onChange = (valor) => (e) =>{

    
        if(e.target.name == "plataforma"){
            lista = state.userInfo.plataforma;
        }
        if(e.target.name == "pago[]"){
            lista = state.userInfo.plataforma;
        }
        if(e.target.name == "categoria[]"){
            lista = state.userInfo.plataforma;
        }
        if(e.target.name == "plataformaPandemia[]"){
            lista = state.userInfo.plataforma;
        }
        if(e.target.name == "metodoPago[]"){
            lista = state.userInfo.plataforma;
        }
        if(e.target.name == "categoriaCompra[]"){
            lista = state.userInfo.plataforma;
        }
        if(e.target.name == "condicionesMedicas[]"){
            lista = state.userInfo.plataforma;
        }
        if(e.target.name == "situacionesPandemia[]"){
            lista = state.userInfo.plataforma;
        }
    


        var idx = lista.indexOf(valor);

        if (idx > -1){
           lista.splice(idx, 1);
        }else{
           lista.push(valor);
        } 

        setState({
            ...state,
            userInfo:{
                ...state.userInfo,
                [e.target.name]:lista
            }
        })
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



    return(
        <div>
        <Header/>
        <section id = "main-content">
        <form onSubmit={submitForm}>
                <h1>Responde las siguientes preguntas</h1>
                <div id="images2" href="#">
                    <img id="images2" src={formImage} alt="form" />
                </div>
            <fieldset>
                <legend>¿Qué tan seguido compraba en línea?</legend>
                <div class="form-group">
                    <div class="radio">
                        <label>
                            <input type="radio" name="compras" value="1 a 5"  onChange={onChangeValue} required/>
                            1 a 5 veces al mes
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input type="radio" name="compras"  onChange={onChangeValue} value="6 a 10" />
                            6 a 10 veces al mes.
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input type="radio" name="compras"   onChange={onChangeValue} value="Más de 10" />
                            Más de 10 veces por mes
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input type="radio" name="compras" onChange={onChangeValue} value="1 vez cada varios meses" />
                            1 vez cada varios meses
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input type="radio" name="compras"  onChange={onChangeValue} value="No realizaba" />
                            No realizaba compras en línea
                        </label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <legend>¿Qué plataformas utilizaba para realizar compras en línea?</legend>
                <div class="form-group">
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="plataforma" value="Mercado Libre"   onChange={onChange("Mercado Libre")} onclick="deRequireCb('plataforma')"  oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required/>
                            Mercado Libre
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="plataforma" onChange={onChange("Amazon")} value="Amazon" onclick="deRequireCb('plataforma')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required/>
                            Amazon
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="plataforma" onChange={onChange("Facebook")} value="Facebook" onclick="deRequireCb('plataforma')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Facebook Marketplace
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="plataforma" value="Alibaba / Aliexpress" onChange={onChange("Alibaba / Aliexpress")} onclick="deRequireCb('plataforma')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Alibaba / Aliexpress
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="plataforma" value="Ebay" onChange={onChange("Ebay")} onclick="deRequireCb('plataforma')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Ebay
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="plataforma" value="E-shop"  onChange={onChange("E-shop")} onclick="deRequireCb('plataforma')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required/>
                            E-shop propia de cada marca (Nike, Supreme, Walmart, Liverpool, etc)
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="plataforma" value="Otro" onChange={onChange("Otro")} onclick="deRequireCb('plataforma')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Otro
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="plataforma" value="No realizaba compras en línea"  onChange={onChange("No realizaba compras en línea")} onclick="deRequireCb('plataforma')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            No realizaba compras en línea
                        </label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <legend>¿Qué métodos de pago utilizaba más para realizar sus compras en línea?</legend>
                <div class="form-group">
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="pago[]" value="Tarjeta de crédito" onChange={onChange("Tarjeta de crédito")} onclick="deRequireCb('plataforma')" required/>
                            Tarjeta de crédito
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="pago[]" value="Tarjeta de débito" onChange={onChange("Tarjeta de débito")} onclick="deRequireCb('plataforma')" required/>
                            Tarjeta de débito
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="pago[]" value="Paypal" onChange={onChange("Paypal")} onclick="deRequireCb('plataforma')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Paypal
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="pago[]" value="Mercado Pago" onChange={onChange("Mercado Pago")} onclick="deRequireCb('plataforma')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Mercado Pago
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="pago[]" value="Efectivo" onChange={onChange("Efectivo")} onclick="deRequireCb('plataforma')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Efectivo
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="pago[]" value="Transferencia electrónica" onChange={onChange("Transferencia electrónica")} onclick="deRequireCb('plataforma')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required/>
                            Transferencia electrónica
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="pago[]" value="Depósito en tiendas de conveniencia" onChange={onChange("Depósito en tiendas de conveniencia")} onclick="deRequireCb('plataforma')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Depósito en tiendas de conveniencia (Oxxo, 7Eleven, etc.)
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="pago[]" value="Otro" onclick="deRequireCb('plataforma[]')" onChange={onChange("Otro")} oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Otro
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="pago[]" value="No realizaba compras en línea" onChange={onChange("No realizaba compras en línea")} onclick="deRequireCb('plataforma')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            No realizaba compras en línea
                        </label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <legend>¿De cuáles de las siguientes categorías realizaba compras?</legend>
                <div class="form-group">
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="categoria[]" value="Ropa" onChange={onChange("Ropa")} onclick="deRequireCb('plataforma[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required/>
                            Ropa
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="categoria[]" value="Comida a domicilio" onChange={onChange("Comida a domicilio")} onclick="deRequireCb('plataforma[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required/>
                            Comida a domicilio (Rappi, UberEats, etc)
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="categoria[]" value="Super a domicilio" onChange={onChange("Super a domicilio")} onclick="deRequireCb('plataforma[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Super a domicilio (víveres)
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="categoria[]" value="Muebles y/o electrodomésticos" onChange={onChange("Muebes y/o electrodomésticos")} onclick="deRequireCb('plataforma[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Muebles y/o electrodomésticos
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="categoria[]" value="Coleccionables" onChange={onChange("Coleccionables")} onclick="deRequireCb('plataforma[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Coleccionables
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="categoria[]" value="Libros" onChange={onChange("Libros")} onclick="deRequireCb('plataforma[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required/>
                            Libros (físicos o electrónicos)
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="categoria[]" value="Computadoras y/o electrónicos" onChange={onChange("Computadoras y/o electrónicos")} onclick="deRequireCb('plataforma[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Computadoras y/o electrónicos
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="categoria[]" onChange={onChange("Herramientas y ferretería")} value="Herramientas y ferretería" onclick="deRequireCb('plataforma[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Herramientas y ferretería
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="categoria[]" value="Entretenimiento"  onChange={onChange("Entretenimiento")} onclick="deRequireCb('plataforma[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Entretenimiento (música, tv, videojuegos, juguetes, etc.)
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="categoria[]" value="Programas o aplicaciones" onChange={onChange("Programas o aplicaciones")} onclick="deRequireCb('plataforma[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Programas o aplicaciones
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="categoria[]" value="Reservaciones y boletos" onChange={onChange("Reservaciones y boletos")} onclick="deRequireCb('plataforma[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Reservaciones y boletos
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="categoria[]" value="Artículos de higiene" onChange={onChange("Artículos de higiene")} onclick="deRequireCb('plataforma[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Artículos de higiene
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="categoria[]" value="Artículos deportivos" onChange={onChange("Artículos deportivos")} onclick="deRequireCb('plataforma[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Artículos deportivos
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="categoria[]" value="No realizaba compras en línea" onChange={onChange("No realizaba compras en línea")} onclick="deRequireCb('plataforma[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            No realizaba compras en línea
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="categoria[]" value="Otros" onclick="deRequireCb('plataforma[]')" onChange={onChange("Otros")} oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Otros
                        </label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <legend>¿Cuánto tiempo estima que se encontraba usando la computadora para actividades diarias?</legend>
                <div class="form-group">
                    <div class="radio">
                        <label>
                            <input type="radio" name="tiempo" value="7 horas o más al dia"  onChange={onChangeValue} required/>
                            7 horas o más al día
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input type="radio" name="tiempo" value="6-2 horas al dia"  onChange={onChangeValue}/>
                            6 a 2 horas al día
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input type="radio" name="tiempo" value="6-2 horas a la semana" onChange={onChangeValue}/>
                            6 a 2 horas a la semana
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input type="radio" name="tiempo" value="Menos de 2 horas a la semana" onChange={onChangeValue}/>
                            Menos de 2 horas a la semana
                        </label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <legend>¿Qué tan seguido compra en línea ahora?</legend>
                <div class="form-group">
                    <div class="radio">
                        <label>
                            <input type="radio" name="seguido" value="Más de 10 veces por mes" onChange={onChangeValue} required/>
                            Más de 10 veces por mes
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input type="radio" name="seguido" value="10 a 6 veces al mes"  onChange={onChangeValue}/>
                            10 a 6 veces al mes
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input type="radio" name="seguido" value="5 a 1 vez al mes"  onChange={onChangeValue}/>
                            5 a 1 vez al mes
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input type="radio" name="seguido" value="1 vez cada varios meses"  onChange={onChangeValue}/>
                            Menos de 2 horas a la semana
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input type="radio" name="seguido" value="No realizo compras en línea"  onChange={onChangeValue}/>
                            No realizo compras en línea
                        </label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <legend>¿Qué plataformas utiliza para realizar compras en línea?</legend>
                <div class="form-group">
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="plataformaPandemia[]" value="Mercado Libre"  onChange={onChange("Mercado Libre")} onclick="deRequireCb('plataforma[]')"  oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required/>
                            Mercado Libre
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="plataformaPandemia[]" onChange={onChange("Amazon")} value="Amazon" onclick="deRequireCb('plataforma[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required/>
                            Amazon
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="plataformaPandemia[]" onChange={onChange("Facebook")} value="Facebook" onclick="deRequireCb('plataforma[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Facebook Marketplace
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="plataformaPandemia[]" value="Alibaba / Aliexpress" onChange={onChange("Alibaba / Aliexpress")} onclick="deRequireCb('plataforma[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Alibaba / Aliexpress
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="plataformaPandemia[]" value="Ebay" onChange={onChange("Ebay")} onclick="deRequireCb('plataforma[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Ebay
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="plataformaPandemia[]" value="E-shop"  onChange={onChange("E-shop")} onclick="deRequireCb('plataforma[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required/>
                            E-shop propia de cada marca (Nike, Supreme, Walmart, Liverpool, etc)
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="plataformaPandemia[]" value="Otro" onChange={onChange("Otro")} onclick="deRequireCb('plataforma[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Otro
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="plataformaPandemia[]" value="No realizaba compras en línea"  onChange={onChange("No realizaba compras en línea")} onclick="deRequireCb('plataforma[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            No realizo compras en línea
                        </label>
                    </div>
                </div>
            </fieldset>


            <fieldset>
                <legend>¿Qué método de pago utiliza usted para sus compras en internet?</legend>
                <div class="form-group">
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="metodoPago[]" value="Tarjeta credito" onChange={onChange("Tarjeta credito")} onclick="deRequireCb('metodoPago[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required/>
                            Tarjeta de crédito
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="metodoPago[]" value="Tarjeta debito" onChange={onChange("Tarjeta debito")} onclick="deRequireCb('metodoPago[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required/>
                            Tarjeta de débito
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="metodoPago[]" value="Paypal" onChange={onChange("Paypal")} onclick="deRequireCb('metodoPago[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Paypal
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="metodoPago[]" value="Mercado pago" onChange={onChange("Mercado pago")} onclick="deRequireCb('metodoPago[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Mercado Pago
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="metodoPago[]" value="Efectivo" onChange={onChange("Efectivo")} onclick="deRequireCb('metodoPago[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Efectivo
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="metodoPago[]" value="Transferencia" onChange={onChange("Transferencia")} onclick="deRequireCb('metodoPago[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required/>
                            Transferencia electrónica
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="metodoPago[]" value="Deposito" onChange={onChange("Deposito")}onclick="deRequireCb('metodoPago[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Depósito en tiendas de conveniencia (Oxxo, 7Eleven, etc.)
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="metodoPago[]" value="Otro" onChange={onChange("Otro")} onclick="deRequireCb('metodoPago[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Otro
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="metodoPago[]" value="No realizaba compras en línea" onChange={onChange("No realizaba compras en línea")} onclick="deRequireCb('metodoPago[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            No realizo compras en línea
                        </label>
                    </div>
                </div>
            </fieldset>


            <fieldset>
                <legend>¿De cuáles de las siguientes categorías ha realizado compras?</legend>
                <div class="form-group">
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="categoriaCompra[]" value="Ropa" onChange={onChange("Ropa")} onclick="deRequireCb('categoriaCompra[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required/>
                            Ropa
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="categoriaCompra[]" value="Comida domicilio" onChange={onChange("Comida domicilio")} onclick="deRequireCb('categoriaCompra[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required/>
                            Comida a domicilio (Rappi, UberEats, etc)
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="categoriaCompra[]" value="Super" onChange={onChange("Super")} onclick="deRequireCb('categoriaCompra[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Super a domicilio (víveres)

                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="categoriaCompra[]" value="Muebles" onChange={onChange("Muebles")} onclick="deRequireCb('categoriaCompra[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Muebles y/o electrodomésticos
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="categoriaCompra[]" value="Coleccionables" onChange={onChange("Coleccionables")} onclick="deRequireCb('categoriaCompra[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Coleccionables
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="categoriaCompra[]" value="Libros" onChange={onChange("Libros")} onclick="deRequireCb('categoriaCompra[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required/>
                            Libros (físicos o electrónicos)
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="categoriaCompra[]" value="Computadoras" onChange={onChange("Computadoras")} onclick="deRequireCb('categoriaCompra[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Computadoras y/o electrónicos
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="categoriaCompra[]" value="Herramientas" onChange={onChange("Herramientas")} onclick="deRequireCb('categoriaCompra[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Herramientas y ferretería
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="categoriaCompra[]" value="Entretenimiento" onChange={onChange("Entretenimiento")} onclick="deRequireCb('categoriaCompra[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Entretenimiento (música, tv, videojuegos, juguetes, etc.)
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="categoriaCompra[]" value="programas" onChange={onChange("programas")} onclick="deRequireCb('categoriaCompra[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Programas o aplicaciones
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="categoriaCompra[]" value="Reservaciones" onChange={onChange("Reservaciones")} onclick="deRequireCb('categoriaCompra[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Reservaciones y boletos
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="categoriaCompra[]" value="Higiene" onChange={onChange("Higiene")} onclick="deRequireCb('categoriaCompra[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Artículos de higiene
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="categoriaCompra[]" value="Artículos deportivos" onChange={onChange("Artículos deportivos")} onclick="deRequireCb('categoriaCompra[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Artículos deportivos
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="categoriaCompra[]" value="Otros" onChange={onChange("Otros")} onclick="deRequireCb('categoriaCompra[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Otros
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="categoriaCompra[]" value="Sigo sin realizar compras en línea" onChange={onChange("Sigo sin realizar compras en línea")} onclick="deRequireCb('categoriaCompra[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Sigo sin realizar compras en línea
                        </label>
                    </div>
                </div>
            </fieldset>


            <fieldset>
                <legend>¿Cuánto tiempo estima que usa la computadora para actividades diarias? </legend>
                <div class="form-group">
                    <div class="radio">
                        <label>
                            <input onChange={onChangeValue} type="radio" name="tiempoComputadora[]" value="7 Horas" onclick="deRequireCb('tiempoComputadora[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required/>
                            7 horas o más al día
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input  onChange={onChangeValue} type="radio" name="tiempoComputadora[]" value="6 a 2 dia" onclick="deRequireCb('tiempoComputadora[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required/>
                            6 a 2 horas al día
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input  onChange={onChangeValue} type="radio" name="tiempoComputadora[]" value="6 a 2 semana" onclick="deRequireCb('tiempoComputadora[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            6 a 2 horas a la semana
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input onChange={onChangeValue} type="radio" name="tiempoComputadora[]" value="2 horas" onclick="deRequireCb('tiempoComputadora[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Menos de 2 horas a la semana
                        </label>
                    </div>
                </div>
            </fieldset>


            <fieldset>
                <legend>¿En promedio cuánto dinero estima que gasta en compras en línea al mes? </legend>
                <div class="form-group">
                    <div class="radio">
                        <label>
                            <input  onChange={onChangeValue} type="radio" name="dineroEnLinea[]" value="menos 1000" onclick="deRequireCb('dineroEnLinea[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required/>
                            Menos de 1,000
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input onChange={onChangeValue} type="radio" name="dineroEnLinea[]" value="1000 2500" onclick="deRequireCb('dineroEnLinea[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required/>
                            1,000 - 2,500
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input  onChange={onChangeValue} type="radio" name="dineroEnLinea[]" value="2500 5000" onclick="deRequireCb('dineroEnLinea[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            2,500 - 5,000
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input onChange={onChangeValue} type="radio" name="dineroEnLinea[]" value="5000 7500" onclick="deRequireCb('dineroEnLinea[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            5,000 - 7,500
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input  onChange={onChangeValue} type="radio" name="dineroEnLinea[]" value="7500 10000" onclick="deRequireCb('dineroEnLinea[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            7,500 - 10,000
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input  onChange={onChangeValue} type="radio" name="dineroEnLinea[]" value="10000" onclick="deRequireCb('dineroEnLinea[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Más de 10,000
                        </label>
                    </div>
                </div>
            </fieldset>


            <fieldset>
                <legend>¿Actualmente compras más seguido en físico o en línea? </legend>
                <div class="form-group">
                    <div class="radio">
                        <label>
                            <input  onChange={onChangeValue} type="radio" name="fisicoLinea[]" value="fisico" onclick="deRequireCb('fisicoLinea[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required/>
                            Físico
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input onChange={onChangeValue} type="radio" name="fisicoLinea[]" value="linea" onclick="deRequireCb('fisicoLinea[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required/>
                            Linea
                        </label>
                    </div>
                </div>
            </fieldset>


            <fieldset>
                <legend>¿Desde que empezó la pandemia, ha presentado síntomas relacionados al COVID-19? </legend>
                <div class="form-group">
                    <div class="radio">
                        <label>
                            <input  onChange={onChangeValue} type="radio" name="sintomas" value="Si" onclick="deRequireCb('sintomas')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required/>
                            Si
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input  onChange={onChangeValue} type="radio" name="sintomas" value="No" onclick="deRequireCb('sintomas')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required/>
                            No
                        </label>
                    </div>
                </div>
            </fieldset>


            <fieldset>
                <legend>¿Usted sufre de alguna de las siguientes condiciones médicas? </legend>
                <div class="form-group">
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="condicionesMedicas[]" value="Diabetes" onChange={onChange("Diabetes")} onclick="deRequireCb('condicionesMedicas[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required/>
                            Diabetes
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="condicionesMedicas[]" value="Hipertensión" onChange={onChange("Hipertensión")} onclick="deRequireCb('condicionesMedicas[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required/>
                            Hipertensión
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="condicionesMedicas[]" value="Obesidad" onChange={onChange("Obesidad")} onclick="deRequireCb('condicionesMedicas[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Obesidad
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="condicionesMedicas[]" value="Asma" onChange={onChange("Asma")} onclick="deRequireCb('condicionesMedicas[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Asma
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="condicionesMedicas[]" value="Condiciones cardiacas" onChange={onChange("Condiciones cardiacas")} onclick="deRequireCb('condicionesMedicas[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Condiciones cardiacas
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="condicionesMedicas[]" value="Inmunodeficiencia" onChange={onChange("Inmunodeficiencia")} onclick="deRequireCb('condicionesMedicas[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Inmunodeficiencia
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="condicionesMedicas[]" value="Hepatitis" onChange={onChange("Hepatitis")} onclick="deRequireCb('condicionesMedicas[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Hepatitis
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="condicionesMedicas[]" value="No listados" onChange={onChange("No listado")} onclick="deRequireCb('condicionesMedicas[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Otros no listados
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="condicionesMedicas[]" value="Ninguna" onChange={onChange("Ninguna")} onclick="deRequireCb('condicionesMedicas[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Ninguna
                        </label>
                    </div>
                </div>
            </fieldset>


            <fieldset>
                <legend>¿A causa de la pandemia usted se ha sentido relacionado con algunas de las siguientes situaciones? </legend>
                <div class="form-group">
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="situacionesPandemia[]" value="Ansiedad" onChange={onChange("Ansiedad")} onclick="deRequireCb('situacionesPandemia[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required/>
                            Ansiedad
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="situacionesPandemia[]" value="Estres" onChange={onChange("Estres")} onclick="deRequireCb('situacionesPandemia[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required/>
                            Estrés
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="situacionesPandemia[]" value="Depresion" onChange={onChange("Depresion")} onclick="deRequireCb('situacionesPandemia[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Depresión
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="situacionesPandemia[]" value="Deficit de atencion" onChange={onChange("Deficit de atencion")} onclick="deRequireCb('situacionesPandemia[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Déficit de atención
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="situacionesPandemia[]" value="Bajo rendimiento" onChange={onChange("Bajo rendimiento")} onclick="deRequireCb('situacionesPandemia[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Baja de rendimiento laboral/académico
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="situacionesPandemia[]" value="Baja autoestima" onChange={onChange("Baja autoestima")} onclick="deRequireCb('situacionesPandemia[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Baja autoestima
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="situacionesPandemia[]" value="Otros" onChange={onChange("Otros")} onclick="deRequireCb('situacionesPandemia[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Otros no enlistados
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="situacionesPandemia[]" value="No me he sentido afectado" onChange={onChange("No me he sentido afectado")} onclick="deRequireCb('situacionesPandemia[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            No me he sentido afectado
                        </label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <legend>Durante la pandemia ¿Cómo ha cambiado su actividad física? </legend>
                <div class="form-group">
                    <div class="radio">
                        <label>
                            <input onChange={onChangeValue} type="radio" name="actFisica[]" value="Aumento" onclick="deRequireCb('actFisica[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required/>
                            Aumentó
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input  onChange={onChangeValue} type="radio" name="actFisica[]" value="Permanecio" onclick="deRequireCb('actFisica[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required/>
                            Permaneció igual que antes
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input onChange={onChangeValue} type="radio" name="actFisica[]" value="Disminuyo" onclick="deRequireCb('actFisica[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required/>
                            Disminuyó
                        </label>
                    </div>
                </div>
            </fieldset>

            <button class="registrarse" type="submit">Enviar respuestas</button>
            </form>
        </section>
        <Footer/>
        </div>
         
    )

   
}

export default Encuesta;