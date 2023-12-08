import { useEffect, useState } from "react";
import "./index.css";
import Menu from "./menu";
import { Link } from "react-router-dom";

export default function Header() {
  const [color, setColor] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const position = window.scrollY;
    let color = "";
    if (position > 35) {
      color = "#8a8a41";
    } else {
      color = " #a7a74e";
    }
    setColor(color);
  };

  return (
    <header style={{ backgroundColor: color }}>
      <h2>
        Bem vindo(a) <br /> à Lagarto-Se
      </h2>

      <ul>
        <li>
          <a href="#" target="_self">
            Início
          </a>
        </li>
        <li>
          <a href="#culture" target="_self">
            Cultura
          </a>
        </li>
        <li>
          <a href="#food" target="_self">
            Alimentos
          </a>
        </li>
        <li>
          <a href="#services" target="_self">
            Serviços{" "}
          </a>
        </li>
        <li>
          <a href="#store" target="_self">
            Logistas
          </a>
        </li>
        <li>
          <a href="#about" target="_self">
            Sobre
          </a>
        </li>

        <li><Link to="author">Autores</Link></li>
      </ul>

      <Menu />
    </header>
  );
}
