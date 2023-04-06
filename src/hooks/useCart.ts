import { useContext } from "react";
import CartContext, { UseCartContextType } from "../context/CartProvider";

export const useCart = (): UseCartContextType => {
  return useContext(CartContext);
};
