import { useState } from "react";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

function App() {
  const [viewCart, setViewCart] = useState<boolean>(false);
  const pageContext = viewCart ? <Cart /> : <ProductList />;
  const content = (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {pageContext}
      <Footer viewCart={viewCart} />
    </>
  );
  return content;
}

export default App;
