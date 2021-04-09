import './sesion_cerrada.css';
import logo from '../imagenes/logo_coronanalyst.jpeg'

function SesionCerrada() {
  return (
   
    <div>

  <div class="split left">
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

    <div class="split right">
        <div class="centered">
        <img src={logo} alt="Logo coronanalyst"/>
        <button>Regresar a inicio</button>
        </div>
    </div>

    </div>
  );
}


export default SesionCerrada;