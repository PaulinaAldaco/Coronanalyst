import logo from './imagenes/logo_coronanalyst.jpeg'
import './Login.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/Header/Navbar'
import React, {useContext, useState} from 'react';
import {MyContext} from './contexts/MyContext';

function Login() {

  const {toggleNav,loginUser,isLoggedIn} = useContext(MyContext);

  const initialState = {
    userInfo:{
        email:'',
        password:'',
    },
    errorMsg:'',
    successMsg:'',
  }

  const [state,setState] = useState(initialState);

  // On change input value (email & password)
  const onChangeValue = (e) => {
    setState({
        ...state,
        userInfo:{
            ...state.userInfo,
            [e.target.name]:e.target.value
        }
    });
    console.log(state);
  }

  // On Submit Login From
  const submitForm = async (event) => {
    event.preventDefault();
    const data = await loginUser(state.userInfo);
    if(data.success && data.token){
        console.log("Data recieved, changing stage");
        setState({
            ...initialState,
            successMsg:data.message
        });
        console.log("Data recieved, storing token: "+data.token);
        // Store token in local storage
        localStorage.setItem('loginToken', data.token);
        console.log("Token stored");
        await isLoggedIn();
    }
    else{
        setState({
            ...state,
            successMsg:'',
            errorMsg:data.message
        });
    }
  }

  // Show Message on Error or Success
  let successMsg = '';
  let errorMsg = '';
  if(state.errorMsg){
      errorMsg = <div className="error-msg">{state.errorMsg}</div>;
  }
  if(state.successMsg){
      successMsg = <div className="success-msg">{state.successMsg}</div>;
  }

  return (
   
    <div>
      <div className="split left">
        <div className="centered">
          <h1>¡Bienvenido!</h1>
          <p>Introduce tu correo y contraseña para acceder</p>
          <form onSubmit={submitForm} noValidate>

            <input type="text" id="email" name="email" required placeholder="Ingresa correo electrónico" value={state.userInfo.email} onChange={onChangeValue}/>
            <input type="password" id="password" name="password" required placeholder="Ingresa contraseña" value={state.userInfo.password} onChange={onChangeValue} />
              
            <button type="submit" id = "button" > Iniciar sesión </button>
          </form>
          {errorMsg}
          {successMsg}
          <b><p><a href="#" id="ref">¿No tienes cuenta? Registrate aquí</a></p></b>
        </div>
      </div>

      <div className="split right">
        <div className="centered">
          <img src={logo} alt="Logo coronanalyst"/>
          <button id = "button2">Regresar a inicio</button>
        </div>
      </div>
    </div>
  );
}



export default Login;
