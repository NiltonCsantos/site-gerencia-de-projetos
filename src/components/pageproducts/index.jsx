import Header from "../header";

import { Footer } from "../footer"

import image1 from "../../assets/images/image027p.png"
import image2 from "../../assets/images/image051p.png"
import image3 from "../../assets/images/image053p.png"
import image4 from "../../assets/images/image055p.png"
import image5 from "../../assets/images/image063p.png"
import image6 from "../../assets/images/image067p.png"




import "./style.css"

export default function PageProducts() {
  return (
    <div className="main">
      <Header destiny={"/"} />
      <div className="text">
      <h2>
        Explorando Possibilidades: Nossos Produtos, Sua Experiência Inigualável
      </h2>

      <p>
        Explore serviços excepcionais que transformarão sua experiência. Da
        personalização às soluções inovadoras, oferecemos qualidade superior
        para superar suas expectativas. Descubra o poder da excelência em cada
        interação. Estamos prontos para encantar você.
      </p>
      </div>

      <div className="images">
      <img src={image1} alt="" />
      <img src={image2} alt="" />
      <img src={image3} alt="" />
      <img src={image4} alt="" />
      <img src={image5} alt="" />
      <img src={image6} alt="" />
    </div>
    <Footer/>
    </div>
  );
}
