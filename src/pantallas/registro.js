import './registro.css';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer';

/*function Registro() {
  return (
    <div>
    <Header />
    <div class="container">
        <form>
            <div class="row">
                <h2>Regístrate</h2>

                <div class="col">
                <label>Correo</label>
                    <input type="text" name="correo" placeholder="Escribe tu correo electrónico" required/>
                    <label>Contraseña</label>
                    <input type="password" name="password" placeholder="Escribe tu contraseña" required/>
                    <label>Edad</label>
                    <br/>
                    <select name="rangoedad" id="rangoedad">
                        <option value="1 a 5">1 a 5</option>
                        <option value="6 a 10">6 a 10</option>
                        <option value="11 a 15">11 a 15</option>
                        <option value="16 a 20">16 a 20</option>
                        <option value="21 a 25">21 a 25</option>
                        <option value="26 a 30">26 a 30</option>
                        <option value="31 a 45">31 a 45</option>
                        <option value="46 a 50">56 a 50</option>
                        <option value="51 a 65">51 a 65</option>
                        <option value="66 a 70">66 a 70</option>
                        <option value="71 a 75">71 a 75</option>
                        <option value="76 a 80">76 a 80</option>
                        <option value="81 a 85">81 a 85</option>
                        <option value="86 a 90">86 a 90</option>
                        <option value="91 a 95">91 a 95</option>
                        <option value="96 a 100">96 a 100</option>
                        <option value="1 a 95">91 a 95</option>
                        <option value="96 a 100">96 a 100</option>
                        <option value="101 a 105">101 a 105</option>
                        <option value="106 a 110">106 a 110</option>
                    </select>
                    <br/>
                    <label>Ocupación</label>
                    <input type="ocupacion" name="ocupacion" placeholder="Escribe tu ocupación" required/>
                </div>

                <div class="col">
                    <div class="hide-md-lg">
                    <p>Or sign in manually:</p>
                    </div>
                     <label>Ingreso económico</label>
                    <input type="text" name="ingreso_e" placeholder="Escribe tu ingreso económico" required/>
                    <label>País</label>
                    <br/>
                    <select name="pais" id="pais">
                        <option value="mexico">México</option>
                    </select>
                    <br/>
                    <label>Estado</label>
                    <input type="text" name="estado" placeholder="Escribe tu estado" required/>
                    <label>Ciudad</label>
                    <input type="text" name="ciudad" placeholder="Escribe tu ciudad" required/>
                </div>

                

            </div>

            <div class="bottom-container">
            <div class="row">
                <div class="col">
                 <input type="submit" value="Registrarme"/>
                </div>
                <div class="col">
                <a href="#"class="btn">Forgot password?</a>
                </div>
            </div>
        </div>
        </form>
       

    </div>
    <Footer />
    </div>
  );
}
*/

function Registro() {
    return (
     
      <div>
      <Header/>
      <section id="main-content">
        <h1>Regístrate</h1>
        <form>
        <div id="imgcontainer">
          <img src="http://ww2.aeeh.es/wp-content/uploads/2013/08/form_icon_256031.png" alt="registro" class="registro"/>
        </div>
        <div class="container">
          <label for="email"><b>Correo electrónico</b></label>
          <input type="text" id = "email" placeholder="Ingresa correo electrónico" name="email" required />
          <label for="contra"><b>Contraseña</b></label>
          <input type="password" id = "contra" placeholder="Ingresa contraseña" name="contra" required />
              
          <button type="submit" name = "button" onclick="ValidateEmail(document.loginForm.email)"> Iniciar sesión </button> 
        </div>
        </form>
      </section>
      <Footer/>
      </div>

    );
}

export default Registro;