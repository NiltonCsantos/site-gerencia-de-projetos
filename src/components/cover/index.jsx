import CarouselImages from "./caroulsel"

import './index.css'



export default function Cover (){
    return(
        <div className="cover">
            <CarouselImages/>
            
            <div className="description">
            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti nulla modi libero.
            </h1>

            <button>
                Vamos nessa!
            </button>
            
            </div>
            


        </div>
    )
}