import { ReactNode, createContext } from "react";



import p1 from "../assets/images/prato1.png";
import p2 from "../assets/images/prato2.png";
import p3 from "../assets/images/prato3.png";
import p4 from "../assets/images/prato4.png";


//criando produtos, poderia ser consumido via api
const foods = [
    {
      id: 1,
      image:
        "p1",
    },
    {
      id: 1,
      image:
        "../../assets/images/prato2.png",
    },
    {
      id: 1,
      image:
        "../../assets/images/prato3.png",
    },
    {
      id: 1,
      image:
        "../../assets/images/prato4.png",
    },
    
    // Outros produtos, se necessário
  ]
;

//exportando o produto

export const FoodContext = createContext();


export  function FoodProvider({children}) {
  return(
    <FoodContext.Provider value={foods}>
      {children}
    </FoodContext.Provider>
  )
}
