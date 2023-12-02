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
            <li>Início</li>
            <li>Cultura</li>
            <li>Alimentos</li>
            <li>Serviços</li>
            <li>Logistas</li>
            <li>Sobre</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
