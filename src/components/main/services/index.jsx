import "./style.css";

import services from "../../../assets/images/service.png";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="services"
      id="services"
    >
      <section>
        <h3>
          Precisando de assistência? <br /> Nossas equipes estão prontas {" "}
          para atendê-lo!
        </h3>

        <p>
          Acesse agora nossos serviços para desfrutar do melhor da cidade de
          Lagarto feito sob medida para você!
        </p>

        <button>
          <Link to={"/services"}>

          buscar serviços
          </Link>
        </button>
      </section>

      <img src={services} alt="" />
    </div>
  );
}