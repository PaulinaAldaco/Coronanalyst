import './Login.css';
import './sobreNos.css'

import logo from "./images/logo_coronanalyst.jpeg"
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function SobreNos(){ 
    return(
        <section id = "main-content">
            <Header/>
            <form action = "php/enviar_consulta.php">
                <h1>¿Qué es Blue Desert? </h1>

                <div class="bloque">
                    <div class="b1">
                        <p> A  finales de 2019 comenzó la pandemia actual de COVID-19, resultando en una cuarentena global desde marzo del 2020. Esto ha tenido repercusiones profundas en todos los ámbitos de la vida humana, incluyendo, naturalmente, el sector de salud pública, pero también el empresarial y económico. Así mismo, la pandemia ha ocasionado fuertes alteraciones a la vida cotidiana de las personas. Un tema importante es el impacto sobre el comportamiento de compra, ya que el estado de cuarentena ha presentado nuevas dificultades para muchos para llevar a cabo sus compras, tanto las relacionadas a comodidades como las de necesidades básicas. Por esto mismo, la pandemia ha resultado perjudicial para la economía de grandes y pequeñas empresas. En este contexto, es de interés económico y social analizar las nuevas tendencias (en contraste con las anteriores a la pandemia) en el comportamiento de compra del público.
                        </p>
                        <p>
                            Es por esto que Blue Desert es el desarrollador de "Coronanalyst", un sistema que tiene como finalidad identificar los cambios, afectaciones y nuevas tendencias en el estilo de vida de las personas a raíz de la actual pandemia. El recabar esta información ayudará a diferentes industrias a adaptarse y poder ofrecer productos y servicios de una mayor calidad y enfocarse principalmente en las necesidades del cliente.
                        </p>
                    </div>
                    <div class="b1">
                        <img class="logo" src={logo}/>  
                    </div>
                
                </div>

                
                
                
                
                
            </form>

            <Footer/>
        </section>
         
    )

   
}

export default SobreNos;