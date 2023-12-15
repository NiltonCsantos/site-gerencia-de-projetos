import { Link } from "react-router-dom";
import "./style.css";

export default function Store() {
  return (
    <div className="store" id="store">
      <div className="text">
        <h3>
          Precisando de produtos? <br /> Nossos logistas estão prontos para
          atendê-lo!
        </h3>

        <p>Acesse agora os logistas com os melhores preços do mercado!</p>

        <button>
          <Link to={"/products"}>Saiba mais</Link>
        </button>
      </div>
    </div>
  );
}
