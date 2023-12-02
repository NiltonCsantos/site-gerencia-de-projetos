import "./style.css";

import { FaInstagram } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";

export function Footer() {
  return (
    <aside>
      <div className="bg-footer"></div>
      <footer>
        <div className="links">
          <h5>Onde nos encontrar?</h5>
          <MdOutlineLocationOn className="links-icon" />
          <FaInstagram className="links-icon" />
        </div>

        <p>
          <FaRegCopyright />
          Todos os direitos reservados
        </p>

        <p>
          Desenvolvedores: <br /> <br />
          Nilton César Da Silva Santos, 
          Odisley Nascimento Santos, 
          Everson Menezes Santos, 
          Mateus de Jesus Santos, 
          Gabriel Carvalho Santos
        </p>
      </footer>
    </aside>
  );
}
