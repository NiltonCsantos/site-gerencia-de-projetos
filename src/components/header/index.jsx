import { useEffect, useState } from "react";
import "./index.css";
import Menu from "./menu";

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
      color = "#1e69da";
    } else {
      color = " #3375d8";
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
      </ul>

      <Menu />
    </header>
  );
}
