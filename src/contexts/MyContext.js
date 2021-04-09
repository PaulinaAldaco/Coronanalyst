import React, { createContext,Component } from "react";
import axios, {AxiosError} from 'axios'
export const MyContext = createContext();

// Create Axios instance and define the base URL
const Axios = axios.create({
    baseURL: 'http://localhost/servicios/api/',
    // headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Headers': '*'
    // },
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
            isAuth:false
        })
    }

    registerUser = async (user) => {

        // Sending the user registration request
        const register = await Axios.post('register.php',{
            email:user.email,
            password:user.password 
        });

        return register.data;
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
        const loginToken = localStorage.getItem('loginToken');

        // If inside the local-storage has the JWT token
        if(loginToken){

            //Adding JWT token to axios default header
            Axios.defaults.headers.common['Authorization'] = 'bearer '+loginToken;

            // Fetching the user information
            const {data} = await Axios.get('user-info.php');

            // If user information is successfully received
            if(data.success && data.user){
                this.setState({
                    ...this.state,
                    isAuth:true,
                    theUser:data.user
                });
            }

        }
    }

    render(){
        const contextValue = {
            rootState:this.state,
            toggleNav:this.toggleNav,
            isLoggedIn:this.isLoggedIn,
            registerUser:this.registerUser,
            loginUser:this.loginUser,
            logoutUser:this.logoutUser
        }
        return(
            <MyContext.Provider value={contextValue}>
                {this.props.children}
            </MyContext.Provider>
        )
    }

}

export default MyContextProvider;