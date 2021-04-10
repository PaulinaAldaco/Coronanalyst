import './Login.css';
import './inicio.css'
import grafica from "./graficas.png"
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function inicio(){ 
    return(
        <section id = "main-content">
            <Header/>
            <form action = "php/enviar_consulta.php">
                <main>
                    <h2>Analizando los efectos del COVID-19 </h2>

                    <div class="bloque">
                        <div class="b1">
                            <img class="logo" src={grafica}/>     
                        </div>
                        <div class="b2">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>   
                            <button type="button">Contestar encuesta</button>
                        </div>
                    </div>

                    <div>
                        <p class="texto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>   
                    </div>

                </main>
                

                

                
                
                
                
                
            </form>

            <Footer/>
        </section>
         
    )

   
}

export default inicio;