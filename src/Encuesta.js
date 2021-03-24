import './Login.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function Encuesta(){
    return(
        <section id = "main-content">
            <Header/>
            <form action = "php/enviar_consulta.php">
                <h1>Responde las siguientes preguntas</h1>
                <div id="images2" href="#">
                    <img id="images2" src="./imagenes/form.png" alt="form" />
                </div>
                <fieldset>
                <legend>¿En qué nivel se encuentra su confianza en las compras en linea? (Tome como referencia 1 como lo mas bajo y 5 como lo mas alto)</legend>
                <div class="form-group">
                    <div class="radio">
                        <label>
                            <input type="radio" name="confianza" value="1" required/>
                            1
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input type="radio" name="confianza" value="2" />
                            2
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input type="radio" name="confianza" value="3" />
                            3
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input type="radio" name="confianza" value="4" />
                            4
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input type="radio" name="confianza" value="5" />
                            5
                        </label>
                    </div>
                </div>
                    
                </fieldset>

                <fieldset>
                <legend for="1064628181">¿Alguna vez ha realizado una compra por internet?</legend>
                <div class="form-group">
                    <div class="radio">
                        <label>
                            <input type="radio" name="compra" value="Si" required/>
                            Sí
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input type="radio" name="compra" value="No"/>
                            No
                        </label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <legend for="675512174">¿Cuántas compras por internet realizó en 2019?'</legend>
                <div class="form-group">
                    <div class="radio">
                        <label>
                            <input type="radio" name="compra2019" value="1-3" required/>
                            1-4 veces
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input type="radio" name="compra2019" value="4-10"/>
                            4-10 veces
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input type="radio" name="compra2019" value="11-20"/>
                            10-20 veces
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input type="radio" name="compra2019" value="20"/>
                            20 o mas veces
                        </label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <legend for="850993641">¿Cuántas compras por internet realizó en 2020?</legend>
                <div class="form-group">
                    <div class="radio">
                        <label>
                            <input type="radio" name="compra2020" value="1-3" required/>
                            1-4 veces
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input type="radio" name="compra2020" value="4-10"/>
                            4-10 veces
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input type="radio" name="compra2020" value="11-20"/>
                            10-20 veces
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input type="radio" name="compra2020" value="20"/>
                            20 o mas veces
                        </label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <legend for="2094440194">Seleccione las plataformas de venta por internet en las que confía</legend>
                <div class="form-group">
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="plataforma[]" value="Amazon" onclick="deRequireCb('plataforma[]')" required/>
                            Amazon
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="plataforma[]" value="Mercado Libre" onclick="deRequireCb('plataforma[]')" required/>
                            Mercado Libre
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="plataforma[]" value="Ebay" onclick="deRequireCb('plataforma[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Ebay
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="plataforma[]" value="Facebook" onclick="deRequireCb('plataforma[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Páginas de Facebook
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="plataforma[]" value="Instagram" onclick="deRequireCb('plataforma[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required />
                            Páginas de Instagram
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="plataforma[]" value="Otro" onclick="deRequireCb('plataforma[]')" oninvalid="this.setCustomValidity('Por favor, selecciona al menos una opción')" oninput="this.setCustomValidity('')" required/>
                            Otro
                        </label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <legend for="84950281">¿De cuáles de las siguientes categorías ha realizado compras por internet?</legend>
                <div class="form-group">
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="categoria[]" value="Libros"/>
                            Libros
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="categoria[]" value="Deportes"/>
                            Deportes
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="categoria[]" value="Audio y video"/>
                            Audio y video
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="categoria[]" value="Videojuegos"/>
                            Videojuegos
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="categoria[]" value="Ropa"/>
                            Ropa
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="categoria[]" value="Otro"/>
                            Otro
                        </label>
                    </div>
                </div>
            </fieldset>
            </form>

            <Footer/>
        </section>
         
    )

   
}

export default Encuesta;