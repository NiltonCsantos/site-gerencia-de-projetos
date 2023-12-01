import { Carousel } from "react-bootstrap"; // Importe o Carousel do pacote react-bootstrap
// Importe o CSS do Bootstrap

import "./index.css";

import cover from "../../../assets/images/cover.png";
import cover2 from "../../../assets/images/cover2.png";
import cover3 from "../../../assets/images/cover3.png";

export default function CarouselImages() {
  return (
    <Carousel id="carouselcds" interval={5000} pause="hover" indicators={false} controls={false}>
      {/* Aqui vão os slides do Carousel */}

      <Carousel.Item>
        <img src={cover} className="img-caroulsel" />
      </Carousel.Item>

      <Carousel.Item>
        <img src={cover2} alt=""  className="img-caroulsel" />
      </Carousel.Item>

      <Carousel.Item>
        <img src={cover3} alt="" className="img-caroulsel" />
      </Carousel.Item>

      {/* Adicione mais Carousel.Items conforme necessário */}
    </Carousel>
  );
}
