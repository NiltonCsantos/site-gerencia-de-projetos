import Header from "../header";

import Cover from "../cover";

import "./index.css"

import Main from "../main";
import { Footer } from "../footer";

export default function Container () {
    return(

        <div id="container">

            <Header/>
            <Cover/>
            <Main/>
            <Footer/>
        
        </div>
    )
}