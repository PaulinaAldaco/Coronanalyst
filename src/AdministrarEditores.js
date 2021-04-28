import './Login.css';
import './AdministrarEditores.css';
import React, { useContext, useState } from 'react';
import Navbar1 from './components/Navbar/Navbar';
import Sidebar1 from './components/Sidebar/Sidebar';
import añadir from "./imagenes/editor.png";
import basura from "./imagenes/basura.png";
import Footer from './components/Footer/Footer';
import { MyContext } from './contexts/MyContext';
import { Link as LinkR } from 'react-router-dom';
import { Redirect } from "react-router-dom";


function AdministrarEditores() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const { rootState, registerUser,deleteEditor, searchEditors } = useContext(MyContext);
    const { isAuth, type, profile, survey } = rootState;

    const initialState = {
        userInfo: {
            email: '',
            password: '',
            user_type: "editor"
        },
        deleteEditor: '',
        errorMsg: '',
        successMsg: '',
        errorMsgDelete:'',
        successMsgDelete:'',
        editors: searchEditors()
    }
    const [state, setState] = useState(initialState);

    //On submit form
    const submitAddForm = async (event) => {
        event.preventDefault();
        const data = await registerUser(state.userInfo);

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

    const submitDeleteForm = async (event) => {
        event.preventDefault();
        const data = await deleteEditor(state.deleteEditor);
        
        if (data.success) {
            setState({
                ...initialState,
                successMsgDelete: data.message,
            });
        }
        else {
            setState({
                ...state,
                successMsgDelete: '',
                errorMsgDelete: data.message
            });
        }
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

    const onDeleteEditor = () => {
        setState(state.editors = searchEditors());
    }

    if (isAuth) {
        if (type == "admin") {
            return (
                <>
                    <Sidebar1 isOpen={isOpen} toggle={toggle} />;
                    <Navbar1 toggle={toggle} />;
                    <head>
                        <link rel="preconnect" href="https://fonts.gstatic.com" />
                        <link href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap" rel="stylesheet" />
                        <link rel="preconnect" href="https://fonts.gstatic.com" />
                        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap" rel="stylesheet" />
                    </head>
                    <div id="uno">

                        <main>
                            <div class="bloque">
                                <h1>Añadir nuevo editor </h1>
                                <div class="a1">
                                    <img className="imgInicio" src={añadir} />
                                </div>
                                <form class="a2" onSubmit={submitAddForm}>
                                    <p className="texto"> Ingrese los datos del nuevo editor</p>

                                    <input type="text" id="email" name="email" required placeholder="Correo electrónico" value={state.userInfo.email} onChange={onChangeValue} />
                                    <input type="password" id="password" name="password" required placeholder="Contraseña" value={state.userInfo.password} onChange={onChangeValue} />

                                    <button type="submit" className="submit" > Añadir </button>
                                </form>
                                {errorMsg}
                                {successMsg}
                            </div>


                            <div class="bloque">
                                <h1>Eliminar editor </h1>
                                <div class="a1">
                                    <img className="imgInicio" src={basura} />
                                </div>
                                <form class="a2" onSubmit={submitDeleteForm}>
                                    <p className="texto"> Seleccione el editor que desea eliminar</p>
                                    <select name="deleteEditor" value={state.userInfo.deleteEditor} onChange={onChangeValue} required>
                                        <option value="seleccione">Seleccione una opción</option>
                                        <React.Fragment>{
                                            state.editors.map(item => (
                                                <option value={item}>{item}</option>
                                            ))
                                        }</React.Fragment>
                                    </select>

                                    <button type="submit" className="submit" > Eliminar </button>
                                </form>
                                {errorMsgDelete}
                                {successMsgDelete}
                            </div>


                        </main>
                        <Footer />
                    </div>
                </>
            );
        }
        else if (type == "editor") {
            console.log("Redirecting to home (user is an editor)")
            return <Redirect to="/" />
        }
        else {
            if (profile) {
                if (survey) {
                    console.log("Redirecting to home (profile and survey completed)")
                    return <Redirect to="/" />
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

export default AdministrarEditores;