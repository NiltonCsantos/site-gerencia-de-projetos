import Header from "../header";

import Cover from "../cover";

import "./index.css"

import Main from "../main";

export default function Container () {
    return(

        <div id="container">

            <Header/>
            <Cover/>
            <Main/>
        
        </div>
    )
}