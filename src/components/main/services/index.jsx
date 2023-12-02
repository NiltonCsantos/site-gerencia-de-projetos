import "./style.css";

import services from "../../../assets/images/service.png";

export default function Services() {
  return (
    <div className="services"
  
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
          buscar serviços
        </button>
      </section>

      <img src={services} alt="" />
    </div>
  );
}