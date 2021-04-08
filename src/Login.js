import './Login.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import logo from './imagenes/logo_coronanalyst.jpeg'

/*function Login() {
  return (
   
    <div>
    <Header/>
    <section id="main-content">
      <h2>¡Bienvenido!</h2>
      <form>
      <div id="imgcontainer">
        <img src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt="Avatar" class="avatar"/>
      </div>

      <div class="container">
        <label for="email"><b>Correo electrónico</b></label>
        <input type="text" id = "email" placeholder="Ingresa correo electrónico" name="email" required />
        <label for="contra"><b>Contraseña</b></label>
        <input type="password" id = "contra" placeholder="Ingresa contraseña" name="contra" required />
            
        <button type="submit" name = "but_submit" id="but_submit" onclick="ValidateEmail(document.loginForm.email)"> Iniciar sesión </button> 
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
}*/

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
