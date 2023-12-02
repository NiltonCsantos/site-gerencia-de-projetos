import "./style.css";

import { Fragment } from "react";
import p1 from "../../../assets/images/prato1.png";
import p2 from "../../../assets/images/prato2.png";
import p3 from "../../../assets/images/prato3.png";
import p4 from "../../../assets/images/prato4.png";
export default function Food() {
  return (
    <div className="food"

     data-aos="fade-down"
       data-aos-easing="linear"
       data-aos-duration="1500"
    
    >
      <section className="food-section">
        <img src={p1} alt="" />
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
              <button>saber mais</button>
            </div>
          </p>
        </div>
      </section>
      <section className="food-section">
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
            <button>saber mais</button>
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
              <button>saber mais</button>
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
              <button>saber mais</button>
            </div>
          </p>
        </div>
      </section>
    </div>
  );
}
