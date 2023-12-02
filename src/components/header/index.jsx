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
    <header style={{backgroundColor: color}}>
      <h2>Bem vindo(a) <br /> à Lagarto-Se</h2>

      <ul>
        <li>Início</li>
        <li>
          <a href="#culture" target="_self">
            Cultura
          </a>
        </li>
        <li>Alimentos</li>
        <li>Serviços</li>
        <li>Logistas</li>
        <li>Sobre</li>
      </ul>

      <Menu/>
    </header>
  );
}
