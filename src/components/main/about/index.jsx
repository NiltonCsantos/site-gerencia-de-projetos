import "./style.css";

import img from "../../../assets/images/lagarto.png";

import { MdOutlineLocationOn } from "react-icons/md";

export default function About() {
  return (
    <section id="about">
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
            <a href="https://www.google.com/maps/place/Lagarto+-+SE/@-10.8846565,-37.666157,10.97z/data=!4m6!3m5!1s0x710223b0b78c927:0x80c6f8dc8952c950!8m2!3d-10.9167572!4d-37.6691776!16s%2Fm%2F027j_tc?entry=ttu" target="_blank" rel="external" style={{textDecoration:"none", color:"#000"}}>
            Nossa localização <MdOutlineLocationOn style={{fontSize:"45px"}}></MdOutlineLocationOn>
            </a>
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
