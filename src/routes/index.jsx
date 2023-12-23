import { createBrowserRouter } from "react-router-dom";

import Container from "../components/container";

import Food from "../components/pagefood";
import Products from "../components/pageproducts"
import Services from "../components/pageservices"
// import Author from "../components/author";

import { FoodProvider } from "../context/foodcontext";
import Culture from "../components/pageculture";


const IndexRouter = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
  },
  {
    path: "/food",
    element: (
      <FoodProvider>
        <Food />
      </FoodProvider>
    ),
  },
  // {
  //   path: "/author",
  //   element: (
  //     <Author/>
  //   ),
  // },
  {
    path: "/products",
    element: (
      <Products/>
    ),
  },
  {
    path: "/services",
    element: (
      <Services/>
    ),
  },
  {
    path: "/culture",
    element: (
      <Culture/>
    ),
  },
]);

export default IndexRouter;
