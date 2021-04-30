import './Login.css';
import './AdministrarEditores.css';
import React, { useContext, useState, useEffect } from 'react';
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

    const { rootState, registerUser, deleteEditor, searchEditors } = useContext(MyContext);
    const { isAuth, type, profile, survey } = rootState;

    const initialState = {
        userInfo: {
            email: '',
            password: '',
            user_type: "editor"
        },
        deleteEditor: '',
        errorMsgAdd: '',
        successMsgAdd: '',
        errorMsgDelete: '',
        successMsgDelete: '',
        editors: []
    }
    const [state, setState] = useState(initialState);


    useEffect(() => {
        console.log("Use effect");
        const getEditors = async () => {
            const allEditors = await searchEditors();
            setState({
                ...initialState,
                editors: allEditors
            });
            console.log("All editors:", state.editors);
            console.log("New state:", state.editors);
        }
        getEditors();

    }, []);

    //On submit form
    const submitAddForm = async (event) => {
        event.preventDefault();
        const data = await registerUser(state.userInfo);

        if (data.success) {
            const allEditors = await searchEditors();
            setState({
                ...state,
                userInfo: {
                    ...initialState.userInfo,
                },
                successMsgAdd: data.message,
                errorMsgAdd: '',
                editors: allEditors
            });
        }
        else {
            setState({
                ...state,
                successMsgAdd: '',
                errorMsgAdd: data.message
            });
        }
    }

    const submitDeleteForm = async (event) => {
        event.preventDefault();
        console.log("Sending editor to delete:", state.deleteEditor);
        const data = await deleteEditor(state.deleteEditor);

        if (data.success) {
            const allEditors = await searchEditors();
            setState({
                ...state,
                successMsgDelete: data.message,
                errorMsgDelete: '',
                deleteEditor: '',
                editors: allEditors
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

    // On change the Input Value (email, password, type)
    const onChangeValueAdd = (e) => {
        setState({
            ...state,
            userInfo: {
                ...state.userInfo,
                [e.target.name]: e.target.value
            }
        });
        console.log(e.target.value);
    }

    // On change the Input Value (email)
    const onChangeValueDelete = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
        console.log(e.target.value);
    }

    // Show Message on Success or Error
    let successMsgAdd = '';
    let errorMsgAdd = '';
    let successMsgDelete = '';
    let errorMsgDelete = '';
    if (state.errorMsgAdd) {
        errorMsgAdd = <div className="error-msg">{state.errorMsgAdd}</div>;
    }
    if (state.successMsgAdd) {
        successMsgAdd = <div className="success-msg">{state.successMsgAdd}</div>;
    }
    if (state.errorMsgDelete) {
        errorMsgDelete = <div className="error-msg">{state.errorMsgDelete}</div>;
    }
    if (state.successMsgDelete) {
        successMsgDelete = <div className="success-msg">{state.successMsgDelete}</div>;
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

                                    <input type="text" id="email" name="email" required placeholder="Correo electrónico" value={state.userInfo.email} onChange={onChangeValueAdd} />
                                    <input type="password" id="password" name="password" required placeholder="Contraseña" value={state.userInfo.password} onChange={onChangeValueAdd} />

                                    <button type="submit" className="submit" > Añadir </button>
                                    {errorMsgAdd}
                                    {successMsgAdd}
                                </form>

                            </div>


                            <div class="bloque">
                                <h1>Eliminar editor </h1>
                                <div class="a1">
                                    <img className="imgInicio" src={basura} />
                                </div>
                                <form class="a2" onSubmit={submitDeleteForm}>
                                    <p className="texto"> Seleccione el editor que desea eliminar</p>
                                    <select name="deleteEditor" value={state.deleteEditor} onChange={onChangeValueDelete} required>
                                        <option value="seleccione">Seleccione una opción</option>
                                        <React.Fragment>{
                                            state.editors.map(item => (
                                                <option value={item}>{item}</option>
                                            ))
                                        }</React.Fragment>
                                    </select>

                                    <button type="submit" className="submit" > Eliminar </button>
                                    {errorMsgDelete}
                                    {successMsgDelete}
                                </form>
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