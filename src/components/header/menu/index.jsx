import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useState } from "react";

import "./menu.css";

export default function Menu() {
  const [isOffcanvasOpen, setOffcanvasOpen] = useState(false);

  const handleOffcanvasToggle = () => {
    setOffcanvasOpen(!isOffcanvasOpen);
  };

  const handleLinkClick = () => {
    // Adiciona um atraso de 2 segundos antes de redirecionar para a nova página
    if (isOffcanvasOpen) {
      setTimeout(() => {
        setOffcanvasOpen(false);
      }, 2000);
    }
  };

  return (
    <div className="menu">
      <CiMenuFries
        className="btn"
        onClick={handleOffcanvasToggle}
      />

      <div
        className={`offcanvas offcanvas-top ${isOffcanvasOpen ? 'show' : ''}`}
        tabIndex="-1"
        id="offcanvasTop"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close"
            onClick={handleOffcanvasToggle}
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul>
            <li>
              <Link to={"/"} onClick={handleLinkClick}>
                Início
              </Link>
            </li>
            <li>
              <Link to={"/culture"} onClick={handleLinkClick}>
                Cultura
              </Link>
            </li>
            <li>
              <Link to={"/services"} onClick={handleLinkClick}>
                Serviços
              </Link>
            </li>
            <li>
              <Link to={"/products"} onClick={handleLinkClick}>
                Lojistas
              </Link>
            </li>
            <li>
              <a href="#about" target="_self" onClick={handleLinkClick}>
                Sobre
              </a>
            </li>
            <li>
              <Link to="/author" onClick={handleLinkClick}>
                Autores
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
