import "./style.css";

import img from "../../assets/images/lagarto.png";

import { MdOutlineLocationOn } from "react-icons/md";

export default function About() {
  return (
    <section>
      <article>
        <p>
          Você está prestes a embarcar em uma jornada única, repleta de
          descobertas e experiências inesquecíveis. Nossas equipes dedicadas
          estão ansiosas para recebê-lo e tornar a sua visita a Lagarto
          verdadeiramente especial!
        </p>

        <img src={img} alt="" />

        <div className="location">
          <h4>
            Nossa localização <MdOutlineLocationOn />
          </h4>
        </div>
      </article>

      <article>
        <h2>
          Por que você deve <br />
          nos visitar?
        </h2>

        <div className="number">
          <h5>1</h5>
          <p>
            Explore Lagarto e mergulhe em uma cultura rica e autêntica.
            Festivais vibrantes, tradições locais e uma história fascinante
            esperam por você em cada esquina.
          </p>
        </div>
        <div className="number">
          <h5>2</h5>
          <p>
            Descubra as belezas naturais de Lagarto, com paisagens
            deslumbrantes, parques tranquilos e lagos serenos. Uma escapada
            perfeita para os amantes da natureza.
          </p>
        </div>
        <div className="number">
          <h5>3</h5>
          Sinta-se em casa em Lagarto, onde a calorosa hospitalidade nordestina
          é uma marca registrada. Conecte-se com a comunidade local e leve
          consigo memórias afetuosas.
        </div>
      </article>
    </section>
  );
}
