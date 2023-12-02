import { Carousel } from "react-bootstrap"; // Importe o Carousel do pacote react-bootstrap
// Importe o CSS do Bootstrap

import "./index.css";
;
import { useEffect, useState } from "react";

import  cover1 from "../../../assets/images/cover.png"
import  cover2 from "../../../assets/images/cover2.png"
import  cover3 from "../../../assets/images/cover3.png"

import coverMobile1 from "../../../assets/images/cover1mobile.png" 
import coverMobile2 from "../../../assets/images/covermobile2.png" 
import coverMobile3 from "../../../assets/images/covermobile3.png" 

export default function CarouselImages() {

  const displaywidth= window.innerWidth;


  return (
    <Carousel id="carouselcds" 
    interval={5000} 
    pause="hover" 
    indicators={false} 
    controls={false} 
    >
      {/* Aqui vão os slides do Carousel */}

      <Carousel.Item>
        <img src={displaywidth>660? cover1: coverMobile1} className="img-caroulsel" />
      </Carousel.Item>

      <Carousel.Item>
        <img src={displaywidth>660? cover2: coverMobile2} alt=""  className="img-caroulsel" />
      </Carousel.Item>

      <Carousel.Item>
        <img src={displaywidth>660? cover3: coverMobile3} alt="" className="img-caroulsel" />
      </Carousel.Item>

      {/* Adicione mais Carousel.Items conforme necessário */}
    </Carousel>
  );
}
