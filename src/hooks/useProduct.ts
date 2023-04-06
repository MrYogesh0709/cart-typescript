import { useContext } from "react";
import ProductsContext, {
  UseProductContextType,
} from "../context/ProductsProvider";

export const useProduct = (): UseProductContextType => {
  return useContext(ProductsContext);
};
