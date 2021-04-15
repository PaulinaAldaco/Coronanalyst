import './registro.css';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer';
import React, {useContext,useState} from 'react'
import {MyContext} from '../contexts/MyContext';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';


function Registro() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen)
    };

    const {toggleNav,registerUser} = useContext(MyContext);
    const initialState = {
        userInfo:{
            name:'',
            email:'',
            password:'',
        },
        errorMsg:'',
        successMsg:'',
    }
    const [state,setState] = useState(initialState);

    // On Submit the Registration Form
    const submitForm = async (event) => {
        event.preventDefault();
        const data = await registerUser(state.userInfo);
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
    
    return (
      <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div id="container">
        <form id ="main-content">
        <h1>Regístrate</h1>
        <div id="imgcontainer">
          <img src="http://ww2.aeeh.es/wp-content/uploads/2013/08/form_icon_256031.png" alt="registro" className="registro"/>
        </div>
        <div class="container">
          <label for="email"><b>Correo electrónico</b></label>
          <input type="text" id = "email" placeholder="Ingresa correo electrónico" name="email" required />
          <label for="contra"><b>Contraseña</b></label>
          <input type="password" id = "password" placeholder="Ingresa contraseña" name="password" required />
              
          <button className="registrarse" type="submit" name = "button" onclick="ValidateEmail(document.loginForm.email)"> Registrarme </button> 
        </div>
        </form>
      
      </div>
      <Footer/>
      </>

    );
}

export default Registro;