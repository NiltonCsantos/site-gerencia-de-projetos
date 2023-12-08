import { Footer } from "../footer";
import Header from "../header";
import "./style.css";

export default function Author() {
  return (
    <div id="main">
      <Header/>
      <div className="author">
        <h3>Autores das imagens</h3>

        <p>Nome 1</p>
        <p>Nome 2</p>
        <p>Nome 3</p>
        <p>Nome 4</p>
      </div>

      <div className="author">
        <h3>Autores dos textos</h3>

        <p>Nome 1</p>
        <p>Nome 2</p>
        <p>Nome 3</p>
        <p>Nome 4</p>
     
      </div>

      <div className="author">
      <h3>Desenvolvedores</h3>
      <p>Nome 1</p>
      <p>Nome 2</p>
      <p>Nome 3</p>
      <p>Nome 4</p>
      </div>

   

   
    </div>

  
  );
}
