import "./style.css";

import { Link } from "react-router-dom";
import p1 from "../../../assets/images/prato1.png";
import p2 from "../../../assets/images/prato2.png";
import p3 from "../../../assets/images/prato3.png";
import p4 from "../../../assets/images/prato4.png";
import { useFood } from "../../../hooks/UseFood";

export default function Food() {
  const foods = useFood();
  return (
    <div
      className="food"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      {/* {foods.map((food, index)=>{ */}(
      <section className="food-section" id="food">
        <img src={p1} alt="" />
        <div className="text">
          <h3>Descubra os Sabores Autênticos de Lagarto, Sergipe</h3>

          <p>
            mergulhe nos encantos da comida nordestina, onde os aromas
            envolventes e sabores autênticos aguçam os sentidos. Nos restaurantes e
            barracas locais, cada prato conta uma história, oferecendo uma
            autêntica jornada pela cozinha nordestina. Em Lagarto, a comida é
            uma celebração da identidade, uma expressão de hospitalidade e
            tradição, convidando todos a saborear a riqueza cultural que se
            manifesta nos pratos deliciosos desta joia culinária no coração do
            Nordeste brasileiro.
            <div className="btn">
              <button><Link to={"/food"}>saber mais</Link></button>
            </div>
          </p>
        </div>
      </section>
      ){/* })} */}
      {/* <section className="food-section">
        <img src={p2} alt="" />
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolores,
            consequuntur quod beatae necessitatibus sed dolore maxime ullam
            nobis fugit similique possimus dolorum nisi Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Magnam eligendi magni recusandae
            temporibus nihil esse quam officiis debitis rerum eos. Eligendi
            nostrum sit, fuga saepe dolores excepturi blanditiis delectus
            facere.
          </p>
          <div className="btn">
            <button>
              <Link to={"/food"}>saber mais</Link>
            </button>
          </div>
        </div>
      </section>
      <section className="food-section">
        <img src={p3} alt="" />
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolores,
            consequuntur quod beatae necessitatibus sed dolore maxime ullam
            nobis fugit similique possimus dolorum nisi Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Necessitatibus odio asperiores
            eveniet laudantium error harum deserunt eaque natus. Reprehenderit,
            voluptatem id praesentium quis alias nobis laborum rem at tenetur
            harum.
            <div className="btn">
              <button>
                <Link to={"/food"}>saber mais</Link>
              </button>
            </div>
          </p>
        </div>
      </section>
      <section className="food-section">
        <img src={p4} alt="" />
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolores,
            consequuntur quod beatae necessitatibus sed dolore maxime ullam
            nobis fugit similique possimus dolorum nisi Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Necessitatibus odio asperiores
            eveniet laudantium error harum deserunt eaque natus. Reprehenderit,
            voluptatem id praesentium quis alias nobis laborum rem at tenetur
            harum.
            <div className="btn">
              <button>
                <Link to={"/food"}>saber mais</Link>
              </button>
            </div>
          </p>
        </div>
      </section> */}
    </div>
  );
}
