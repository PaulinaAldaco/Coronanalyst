import './sesion_cerrada.css';
import logo from '../imagenes/logo_coronanalyst.jpeg';
import React, {useContext, useState} from 'react';
import {MyContext} from '../contexts/MyContext';

function SesionCerrada() {

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

  <div class="splitSC leftSC">
        <div class="centered">
        <h1>Sesión cerrada</h1>
        <p>Introduce tu correo y contraseña para acceder</p>
        <form>

            <input type="text" id = "email" placeholder="Correo electrónico" name="email" required />
            <input type="password" id = "contra" placeholder="Contraseña" name="contra" required />
            
            <input type = "submit" value="Entrar"/>
        </form>
        </div>
    </div>

    <div class="splitSC rightSC">
        <div class="centered">
        <img src={logo} alt="Logo coronanalyst"/>
        <button>Regresar a inicio</button>
        </div>
    </div>

    </div>
  );
}


export default SesionCerrada;