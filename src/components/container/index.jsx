import Header from "../header";

import Cover from "../cover";

import "./index.css"

import Main from "../main";
import { Footer } from "../footer";
import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Container () {

    useEffect(() => {
        AOS.init({
          once: true, // Garante que a animação aconteça apenas uma vez
        });
      }, []);
    return(

        <div id="container">

            <Header/>
            <Cover/>
            <Main/>
            <Footer/>
        
        </div>
    )
}