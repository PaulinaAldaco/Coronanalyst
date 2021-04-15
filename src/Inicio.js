import './Login.css';
import './Inicio.css'
import grafica from "./graficas.png"
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function Inicio(){ 
    return(
        <div id = "uno">
            <main>
                    <div class="bloque">
                        <h1>Analizando los efectos del COVID-19 </h1>
                        <div class="b1">
                            <img className="imgInicio" src={grafica}/>     
                        </div>
                        <div class="b2">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>   
                            <button type="button" class="linkI">Contestar encuesta</button>
                        </div>
                    </div>
                    
                    <p class="texto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>   
                    
            </main>
            <Footer/>
        </div>
         
    )

   
}

export default inicio;