import React, { createContext,Component } from "react";
import axios from 'axios'
export const MyContext = createContext();

// Create Axios instance and define the base URL
const Axios = axios.create({
    baseURL: 'http://localhost/coronanalyst/api/',
    headers: {
        "Content-Type": "application/json; charset=UTF-8",
      }
});

class MyContextProvider extends Component{
    constructor(){
        super();
        this.isLoggedIn();
    }

    // Root State
    state = {
        showLogin:true,
        isAuth:false,
        theUser:null,
        type:null,
        profile:false,
        survey:false
    }
    
    // Toggle between Login & Signup page
    toggleNav = () => {
        const showLogin = !this.state.showLogin;
        this.setState({
            ...this.state,
            showLogin
        })
    }

    // On Click the Log out button
    logoutUser = () => {
        localStorage.removeItem('loginToken');
        this.setState({
            ...this.state,
            isAuth:false,
            theUser:null,
            type:null,
            profile:false,
            survey:false
        })
    }

    registerUser = async (user) => {

        // Sending the user registration request
        const register = await Axios.post('register.php',{
            email:user.email,
            password:user.password 
        });
        console.log(register.data);
        return register.data;
    }

    createProfile = async (user) =>{
        const profile = await Axios.post('datos-personales.php',{
            genero:user.genero,
            edad:user.edad,
            estadocivil:user.estadocivil,
            estudios:user.estudios,
            ocupacion:user.ocupacion,
            ingreso_economico:user.ingreso_economico,
            estado:user.estado,
            id_user:user.id_user
        });
        console.log(profile.data);
        return profile.data;
    }

    createEncuesta = async (user) =>{
        const profile = await Axios.post('encuesta.php',{
            compras: user.compras,
            plataforma:user.plataforma,
            pago:user.pago,
            categoria:user.categoria,
            tiempo:user.tiempo,
            seguido:user.seguido,
            plataformaPandemia:user.plataformaPandemia,
            metodoPago:user.metodoPago,
            categoriaCompra:user.categoriaCompra,
            tiempoComputadora:user.tiempoComputadora,
            dineroEnLinea:user.dineroEnLinea,
            fisicoLinea:user.fisicoLinea,
            sintomas:user.sintomas,
            condicionesMedicas:user.condicionesMedicas,
            situacionesPandemia:user.situacionesPandemia,
            actFisica:user.actFisica,
            id_user: user.id_user,
        });

        console.log(profile.data);
        return profile.data;
    }


    loginUser = async (user) => {
        // Sending the user Login request
        console.log("Starting request");
        try {
            //Axios.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8';
            //Axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
            const login = await Axios.post('login.php',{
                email:user.email,
                password:user.password
            });
            console.log("Completed");
            console.log(login.data);
            return login.data;
        }
        catch (error) {
            console.log(Object.keys(error), error.message);
        }
    }

    // Checking user logged in or not
    isLoggedIn = async () => {
        console.log("checking for token");
        const loginToken = localStorage.getItem('loginToken');

        // If inside the local-storage has the JWT token
        if(loginToken){
            console.log("Token is present");

            //Adding JWT token to axios default header
            Axios.defaults.headers.common['Authorization'] = 'bearer '+loginToken;

            // Fetching the user information
            const {data} = await Axios.get('user-info.php');

            // If user information is successfully received
            if(data.success && data.user){
                if(data.type=="general"){
                    if(data.hasProfile){
                        if(data.completedSurvey){
                            console.log("User, profile data, and survey completion successfully retrieved");
                            this.setState({
                                ...this.state,
                                isAuth:true,
                                type:"general",
                                theUser:data.user,
                                profile:true,
                                survey:true
                            });
                        }
                        else{
                            console.log("User and profile data successfully retrieved");
                            this.setState({
                                ...this.state,
                                isAuth:true,
                                theUser:data.user,
                                type:"general",
                                profile:true,
                                survey:false
                            });
                        }
                    }
                    else{
                        console.log("User data successfully retrieved");
                        this.setState({
                            ...this.state,
                            isAuth:true,
                            theUser:data.user,
                            type:"general",
                            profile:false,
                            survey:false
                        });
                    }
                }
                else{
                    console.log("User is an ", data.type);
                    this.setState({
                        ...this.state,
                        isAuth:true,
                        theUser:data.user,
                        type:data.type,
                        profile:false,
                        survey:false
                    });
                }
            }
            else if(data.message){
                console.log(data.message)
            }
        }
    }

    // Checking and updating the current state of the user
    updateUserState = async () => {
        console.log("checking for token");
        const loginToken = localStorage.getItem('loginToken');

        // If inside the local-storage has the JWT token
        if(loginToken){
            console.log("Token is present");

            // Fetching the user information
            const {data} = await Axios.get('user-info.php');

            // If user information is successfully received
            if(data.success && data.user){
                if(data.hasProfile){
                    if(data.completedSurvey){
                        console.log("User, profile data, and survey completion successfully retrieved");
                        this.setState({
                            ...this.state,
                            isAuth:true,
                            theUser:data.user,
                            profile:true,
                            survey:true
                        });
                    }
                    else{
                        console.log("User and profile data successfully retrieved");
                        this.setState({
                            ...this.state,
                            isAuth:true,
                            theUser:data.user,
                            profile:true,
                            survey:false
                        });
                    }
                }
                else{
                    console.log("User data successfully retrieved");
                    this.setState({
                        ...this.state,
                        isAuth:true,
                        theUser:data.user,
                        profile:false,
                        survey:false
                    });
                }
            }
            else if(data.message){
                console.log(data.message)
            }
        }
    }

    render(){
        const contextValue = {
            rootState:this.state,
            toggleNav:this.toggleNav,
            isLoggedIn:this.isLoggedIn,
            updateUserState:this.updateUserState,
            registerUser:this.registerUser,
            loginUser:this.loginUser,
            logoutUser:this.logoutUser,
            createProfile:this.createProfile,
            createEncuesta:this.createEncuesta
        }
        return(
            <MyContext.Provider value={contextValue}>
                {this.props.children}
            </MyContext.Provider>
        )
    }

}

export default MyContextProvider;