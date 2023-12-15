import "./style.css";

import { FaInstagram } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";

export function Footer() {
  return (
    <aside 

    data-aos="fade-up"
    data-aos-easing="linear"
     data-aos-duration="1500"
    
    >
      <div className="bg-footer"></div>
      <footer>
        <div className="links">
          <h5>Onde nos encontrar?</h5>
         <a href="https://www.google.com/maps/place/Lagarto+-+SE/@-10.8846565,-37.666157,10.97z/data=!4m6!3m5!1s0x710223b0b78c927:0x80c6f8dc8952c950!8m2!3d-10.9167572!4d-37.6691776!16s%2Fm%2F027j_tc?entry=ttu" target="_blank" rel="external">
         <MdOutlineLocationOn className="links-icon" style={{textDecoration:"none", color:"#Fff"}} />
         </a>
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
