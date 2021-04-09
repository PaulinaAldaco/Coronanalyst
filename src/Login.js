import logo from './logo.svg';
import './Login.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import React, {useContext, useState} from 'react'
import {MyContext} from './contexts/MyContext'

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
    <Header/>
    <section id="main-content">
      <h2>¡Bienvenido!</h2>
      <form onSubmit={submitForm} noValidate>
      <div id="imgcontainer">
        <img src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt="Avatar" class="avatar"/>
      </div>

      <div class="container">
        <label for="email"><b>Correo electrónico</b></label>
        <input type="email" id="email" name="email" required placeholder="Ingresa correo electrónico" value={state.userInfo.email} onChange={onChangeValue}/>
        <label for="password"><b>Contraseña</b></label>
        <input type="password" id="password" name="password" required placeholder="Ingresa contraseña" value={state.userInfo.password} onChange={onChangeValue} />
        {errorMsg}
        {successMsg}
        <button type="submit" name="but_submit" id="but_submit"> Iniciar sesión </button> 
      </div>
      </form>
      <div class="container" >
        <span class="psw"><a href="#">¿No tienes cuenta? Registrate aquí</a></span>
        <br/>
      </div>
    </section>

    <Footer/>
    </div>
  );
}


export default Login;
