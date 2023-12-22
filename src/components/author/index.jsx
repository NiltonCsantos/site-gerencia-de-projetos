import { Footer } from "../footer";
import Header from "../header";
import "./style.css";

import img1 from "../../assets/images/despedida/1.jpg"
import img2 from "../../assets/images/despedida/2.jpg"
import img3 from "../../assets/images/despedida/3.jpg"
import { Carousel } from "react-bootstrap";

export default function Author() {
  return (
    <div id="main">
      <Header destiny={"/"} />

      <div className="congratulations">
        <h2>
          A cidade de Lagarto espera por vocês
        </h2>

        <Carousel id="carousel"
          interval={5000}
          pause="hover"
          indicators={false}
          controls={false}
        >
          {/* Aqui vão os slides do Carousel */}

          <Carousel.Item>

            <img src={img1} alt="" />

          </Carousel.Item>

          <img src={img2} alt="" />

          <Carousel.Item>

          </Carousel.Item>

          <Carousel.Item>

            <img src={img3} alt="" />

          </Carousel.Item>

          {/* Adicione mais Carousel.Items conforme necessário */}
        </Carousel>


        <div className="author">

          <h2>Responsáveis pelo projeto</h2>

          <h3>Equipe cultural</h3>

          <p>
            CARLOS ALBERTO SANTANA DOS SANTOS
            IALLY KAROLLYNE XISTO SILVA
            PEDRO NATHAN SOUZA
          </p>


          <h3>Equipe dos logistas</h3>

          <p>FERNANDO HENRIQUE DE SANTANA, JOSÉ CLÉBERSON NASCIMENTO SANTOS & JOSÉ EDUARDO SANTOS AZEVEDO</p>

          <h3>Equipe dos serviços</h3>



          <p>

            Carlos Eduardo Santana Santos; Genisson de Jesus Santos; Michael Wesley Carvalho dos Santos; Ricardo Fontes Santos.

          </p>

          <h3>
            Equipe de desenvolvedores
          </h3>

          <p>
            Nilton César Da Silva Santos, Odisley Nascimento Santos, Everson Menezes Santos, Mateus de Jesus Santos, Gabriel Carvalho Santos
          </p>


        </div>
      </div>










      <Footer />

    </div>


  );
}
