import { useContext } from "react";
import { FoodContext } from "../context/foodcontext";

export function useFood(){
  return useContext(FoodContext)
}