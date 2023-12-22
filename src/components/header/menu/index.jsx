import { CiMenuFries } from "react-icons/ci";

import "./menu.css";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu">
      <CiMenuFries
        className="btn"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasTop"
        aria-controls="offcanvasTop"
      />

      <div
        className="offcanvas offcanvas-top"
        tabindex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul>
          <li>
          <Link to={"/"}>
          Início
          </Link>
        </li>
        <li>
          <Link to={"/culture"}>
          Cultura
          </Link>
        </li>
        
        <li>
          <Link to={"/services"}>
          Serviços
          </Link>
        </li>
        <li>
          <Link to={"/products"}>
          Lojistas
          </Link>
        </li>
        <li>
          <a href="#about" target="_self">
            Sobre
          </a>
        </li>

        <li><Link to="/author">Autores</Link></li>

          </ul>
        </div>
      </div>
    </div>
  );
}
