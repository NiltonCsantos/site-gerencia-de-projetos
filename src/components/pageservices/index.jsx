import Header from "../header"

import "./style.css"


import { Footer } from "../footer"

import image1 from "../../assets/images/image007s.jpg"
import image2 from "../../assets/images/image013s.jpg"
import image3 from "../../assets/images/image015s.jpg"
import image4 from "../../assets/images/image017s.jpg"
import image5 from "../../assets/images/image019s.png"
import image6 from "../../assets/images/image023.png"

export default function PageServices(){
  return(
    <div class="main">
       <Header destiny={"/"} />
    <div class="text">
      <h2>
        Descubra a Excelência: Nossos Serviços Exclusivos para Transformar sua
        Experiência!
      </h2>
      <p>Explore serviços excepcionais que transformarão sua experiência. Da personalização às soluções inovadoras, oferecemos qualidade superior para superar suas expectativas. Descubra o poder da excelência em cada interação. Estamos prontos para encantar você.</p>
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
  )
}