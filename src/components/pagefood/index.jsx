import Header from "../header";
import "./style.css";
import { Footer } from "../footer";




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
       
      </div>
      <Footer/>
    </div>
  );
}
