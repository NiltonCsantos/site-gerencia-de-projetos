import { createBrowserRouter } from "react-router-dom";

import Container from "../components/container";

import Food from "../components/pagefood";

import { FoodProvider } from "../context/foodcontext";
import Author from "../components/author";

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
  {
    path: "/author",
    element: (
      <Author/>
    ),
  },
]);

export default IndexRouter;
