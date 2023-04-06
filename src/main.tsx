import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ProductsProvider } from "./context/ProductsProvider";
import { CartContextProvider } from "./context/CartProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ProductsProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </ProductsProvider>
  </React.StrictMode>
);
