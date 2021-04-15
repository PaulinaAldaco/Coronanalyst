import './DatosPersonales.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';

function DatosPersonales() {
    return (
      <div>
      <Header />
      <div class="container">
          <form>
              <div class="row">
                  <h1>Coloca los siguientes datos</h1>
                  <br/>
                  <div class="col">
                      <label>Género</label>
                      <select name="genero" id="genero">
                      <option value="seleccione">Seleccione una opción</option>
                          <option value="Femenino">Femenino</option>
                          <option value="Masculino">Masculino</option>
                          <option value="Otro">Otro</option>
                      </select>
                      <label>Edad</label>
                      <br/>
                      <select name="rangoedad" id="rangoedad">
                          <option value="seleccione">Seleccione una opción</option>
                          <option value="Menos de 15">1 a 10</option>
                          <option value="15 a 20">11 a 20</option>
                          <option value="21 a 25">21 a 30</option>
                          <option value="26 a 30">31 a 40</option>
                          <option value="31 a 35">31 a 45</option>
                          <option value="36 a 40">41 a 50</option>
                          <option value="41 a 45">51 a 60</option>
                          <option value="46 a 50">61 a 70</option>
                          <option value="51 a 55">41 a 50</option>
                          <option value="56 a 60">51 a 60</option>
                          <option value="61 a 65">61 a 70</option>
                          <option value="66 a 70">61 a 70</option>
                          <option value="Más de 70">Más de 70</option>
                      </select>
                      <br/>
                      <label>Estado civil</label>
                      <select name="estadocivil" id="estadocivil">
                          <option value="seleccione">Seleccione una opción</option>
                          <option value="Soltero">Soltero</option>
                          <option value="Casado">Casado</option>
                          <option value="Divorciado">Divorciado</option>
                          <option value="Unión libre">Unión libre</option>
                          <option value="Viudo">Viudo</option>
                      </select>
                      <label>Nivel máximo de estudios</label>
                      <select name="estudios" id="estudios">
                      <option value="seleccione">Seleccione una opción</option>
                          <option value="No aplica">No aplica</option>
                          <option value="Primaria">Primaria</option>
                          <option value="Secundaria">Secundaria</option>
                          <option value="Preparatoria">Preparatoria</option>
                          <option value="Universidad">Universidad</option>
                          <option value="Maestría">Maestría</option>
                          <option value="Doctorado">Doctorado</option>
                      </select>
                  </div>
                  <div class="col">
                      <div class="hide-md-lg">
                      <p>Or sign in manually:</p>
                      </div>
                      <label>Ocupación</label>
                      <select name="ocupacion" id="ocupacion">
                      <option value="seleccione">Seleccione una opción</option>
                          <option value="No aplica">No aplica</option>
                          <option value="Primaria">Primaria</option>
                          <option value="Secundaria">Secundaria</option>
                          <option value="Preparatoria">Preparatoria</option>
                          <option value="Universidad">Universidad</option>
                          <option value="Maestría">Maestría</option>
                          <option value="Doctorado">Doctorado</option>
                      </select>
                      <br/>
                       <label>Ingreso económico</label>
                       <select name="ingreso_economico" id="ingreso_economico">
        
                       <option value="seleccione">Seleccione una opción</option>
                          <option value="No aplica">No aplica</option>
                          <option value="Primaria">Primaria</option>
                          <option value="Secundaria">Secundaria</option>
                          <option value="Preparatoria">Preparatoria</option>
                          <option value="Universidad">Universidad</option>
                          <option value="Maestría">Maestría</option>
                          <option value="Doctorado">Doctorado</option>
                      </select>
                      <br/>
                      <label>Estado</label>
                      <select name="estado" id="estado">
                      <option value="seleccione">Seleccione una opción</option>
                          <option value="No aplica">No aplica</option>
                          <option value="Primaria">Primaria</option>
                          <option value="Secundaria">Secundaria</option>
                          <option value="Preparatoria">Preparatoria</option>
                          <option value="Universidad">Universidad</option>
                          <option value="Maestría">Maestría</option>
                          <option value="Doctorado">Doctorado</option>
                      </select>
                     
                  </div>
                  
              </div>
            <div class="bottom-container">
              <div class="row">
                  
                   <input type="submit" value="Enviar"/>
                  
              </div>
          </div>
          </form>
         
      </div>
      <Footer />
      </div>
    );
  }


export default DatosPersonales;