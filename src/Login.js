import './Login.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import logo from './imagenes/logo_coronanalyst.jpeg'

function Login() {
  return (
   
    <div>
    <Header/>
    <div class="split left">
        <div class="centered">
        <h1>¡Bienvenido!</h1>
        <p>Introduce tu correo y contraseña para acceder</p>
        <form>

            <input type="text" id = "email" placeholder="Correo electrónico" name="email" required />
            <input type="password" id = "contra" placeholder="Contraseña" name="contra" required />
            
            <input type = "submit" value="Entrar"/>
        </form>
        <b><p><a href="#" id="ref">¿No tienes cuenta? Registrate aquí</a></p></b>
        </div>
    </div>

    <div class="split right">
        <div class="centered">
        <img src={logo} alt="Logo coronanalyst"/>
        <button>Regresar a inicio</button>
        </div>
    </div>
    <Footer/>
    </div>
  );
}



export default Login;
