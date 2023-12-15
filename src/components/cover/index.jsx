import { Fragment } from "react";
import CarouselImages from "./caroulsel";

import "./index.css";

export default function Cover() {
  return (
    <Fragment>
      <div className="cover">
        <CarouselImages />

        <div className="description">
          <h1>
            Descubra a autenticidade de Lagarto, Sergipe, onde tradições ricas e
            hospitalidade calorosa se entrelaçam. Explore a cultura local,
            delicie-se com a culinária encantadora e mergulhe em uma jornada
            única pela história da cidade.
          </h1>

          <button>Vamos nessa!</button>
        </div>
      </div>

      <div>
        <p style={{textAlign:"center", padding:"2rem"}}>
          O objetivo principal do website é apresentar a cidade de Lagarto-SE
          por meio da disciplina de gerência de projetos. Para atingir essa
          meta, o site será estruturado de maneira a fornecer informações
          relevantes sobre a cidade, destacando seus pontos turísticos,
          história, cultura, eventos e demais aspectos que possam despertar o
          interesse do público. A abordagem de gerência de projetos será
          incorporada no desenvolvimento do site, garantindo uma gestão
          eficiente desde o planejamento até a execução. Serão adotadas práticas
          e metodologias de gerenciamento de projetos para assegurar que o
          website seja construído de maneira organizada, cumprindo prazos,
          orçamentos e requisitos estabelecidos. A equipe responsável pelo
          projeto utilizará técnicas de gerenciamento de escopo, cronograma e
          recursos para garantir que todas as fases do desenvolvimento sejam bem
          coordenadas. Além disso, a aplicação de princípios de gerenciamento de
          riscos permitirá antecipar e lidar eficazmente com possíveis desafios
          ao longo do processo. Ao incorporar a disciplina de gerência de
          projetos, o website terá uma estrutura sólida, conteúdo relevante e
          será entregue de acordo com padrões de qualidade, proporcionando uma
          experiência informativa e envolvente para os usuários interessados em
          conhecer a cidade de Lagarto-SE.
        </p>
      </div>
    </Fragment>
  );
}
