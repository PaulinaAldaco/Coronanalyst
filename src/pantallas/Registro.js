import './Registro.css';
import logo from '../imagenes/logo_coronanalyst.jpeg'
import '../Login.css';
import React, {useContext,useState} from 'react'
import {MyContext} from '../contexts/MyContext';
import Navbar from '../components/Navbar/Navbar';
import {Link as LinkR} from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import {Redirect} from "react-router-dom";


function Registro() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen)
    };

    const {rootState,registerUser,loginUser,isLoggedIn} = useContext(MyContext);
    const {isAuth,type,profile,survey} = rootState;

    const initialState = {
        userInfo:{
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
            // Log in user
            const loginData = await loginUser(state.userInfo);
            if(loginData.success && loginData.token){
                console.log("Data recieved, changing stage");
                setState({
                    ...initialState,
                    successMsg:loginData.message
                });
                console.log("Data recieved, storing token: "+loginData.token);
                // Store token in local storage
                localStorage.setItem('loginToken', loginData.token);
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
        if(type=="general"){
            if(profile){
                if(survey){
                    console.log("Redirecting to home (profile and survey completed)")
                    return <Redirect to="/" />
                }
                else{
                    console.log("Redirecting to survey")
                    return <Redirect to="/Encuesta" />
                }
            }
            else{
                console.log("Redirecting to profile creation page")
                return <Redirect to="/DatosPersonales" />
            }
        }
        else{
            console.log("Redirecting to home (user is an admin/editor)")
            return <Redirect to="/" />
        }
    }
    else{
        return (
   
            <>
              <Sidebar isOpen={isOpen} toggle={toggle} />
              <Navbar toggle={toggle} />
              <div>
              <div className="split left">
                <div className="centered">
                  <div>
                  <h1>¡Regístrate!</h1>
                  <p>Introduce tu correo y contraseña para registrarte</p>
                  </div>
                  <form onSubmit={submitForm} noValidate>
        
                    <input type="text" id="email" name="email" placeholder="Ingresa correo electrónico" value={state.userInfo.email} onChange={onChangeValue}/>
                    <input type="password" id="password" name="password"  placeholder="Ingresa contraseña" value={state.userInfo.password} onChange={onChangeValue} />
                       
                    <button type="submit" className = "submit" > Registrarme </button>
                  </form>
                  {errorMsg}
                  {successMsg}
                  {/* <b><p><LinkR id="ref" to="/Registro">¿No tienes cuenta? Registrate aquí</LinkR></p></b> */}
                </div>
              </div>
        
              <div className="split right">
                <div className="centered">
                  <img src={logo} alt="Logo coronanalyst" className="imgL"/>
                  <button className="link">
                    <LinkR  to="/">Regresar a inicio</LinkR>
                  </button>
                </div>
              </div>
              </div>
            </>
          );
        // return (
        //     <>
        //     <Sidebar isOpen={isOpen} toggle={toggle} />
        //     <Navbar toggle={toggle} />
        //     <div id="container">
        //       <form id ="main-content" onSubmit={submitForm} noValidate>
        //             <h1>Regístrate</h1>
        //             <div id="imgcontainer">
        //                 <img src="http://ww2.aeeh.es/wp-content/uploads/2013/08/form_icon_256031.png" alt="registro" className="registro"/>
        //             </div>
        //             <div className="container">
        //                 <label className="labelR uno" for="email"><b>Correo electrónico</b></label>
        //                 <input type="text" id="email" name="email" required placeholder="Ingresa correo electrónico" value={state.userInfo.email} onChange={onChangeValue}/>
        //                 <label className="labelR dos" for="contra"><b>Contraseña</b></label>
        //                 <input type="password" id="password" name="password" required placeholder="Ingresa contraseña" value={state.userInfo.password} onChange={onChangeValue}/>
        //                 <div>
        //                     {errorMsg}
        //                     {successMsg}
        //                 </div>
        //                 <button type="submit" className="registrarse"> Registrarme </button>
                        
                      
        //             </div>
                  
        //         </form>
              

        //     </div>
        //     <Footer/>
        //     </>
      
        // );
    }
    

}

export default Registro;
