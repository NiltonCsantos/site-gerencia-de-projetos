import CarouselImages from "./caroulsel"

import './index.css'



export default function Cover (){
    return(
        <div className="cover">
            <CarouselImages/>
            
            <div className="description">
            <h1>
Descubra a autenticidade de Lagarto, Sergipe, onde tradições ricas e hospitalidade calorosa se entrelaçam. Explore a cultura local, delicie-se com a culinária encantadora e mergulhe em uma jornada única pela história da cidade.
            </h1>

            <button>
                Vamos nessa!
            </button>
            
            </div>
            


        </div>
    )
}