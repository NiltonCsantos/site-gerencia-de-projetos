import Header from "../header";
import "./style.css";
import { Footer } from "../footer";

import image1 from "../../assets/images/image013.png";
import image2 from "../../assets/images/image015.png";
import image3 from "../../assets/images/image017.png";
import image4 from "../../assets/images/image020.gif";
import image5 from "../../assets/images/image021.png";
import image6 from "../../assets/images/image030.gif";
import image7 from "../../assets/images/image041.png";


export default function Food() {
  return (
    <div id="main">
      <Header destiny={"/"} />

      <div className="food">
        <div className="title">
          <h2>
            Delícias que Encantam: Uma Viagem Gastronômica para os Paladares
            mais Exigentes"
          </h2>
          <p>
            Nossa jornada gastronômica é um convite irresistível aos paladares
            mais exigentes, apresentando um universo de sabores autênticos e
            apaixonantes. De pratos exquisitamente preparados a combinações
            surpreendentes, cada mordida é uma celebração de aromas e texturas
            que encantam os sentidos. Descubra o prazer de uma culinária
            refinada, onde cada prato conta uma história de dedicação e paixão
            pela arte de bem comer. 'Delícias que Encantam' é mais do que uma
            refeição, é uma viagem gastronômica que transcende o ordinário,
            convidando você a explorar os horizontes inexplorados dos sabores
            que fazem a vida mais saborosa.
          </p>
        </div>
      </div>

      <div className="images">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
        <img src={image5} alt="" />
        <img src={image6} alt="" />
        <img src={image7} alt="" />
      </div>
      <Footer/>
    </div>
  );
}
