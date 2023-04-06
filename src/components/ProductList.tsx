import { ReactElement } from "react";
import { useCart } from "../hooks/useCart";
import { useProduct } from "../hooks/useProduct";
import Product from "./Product";

const ProductList = () => {
  const { products } = useProduct();
  const { dispatch, REDUCER_ACTIONS, cart } = useCart();

  let pageContent: ReactElement | ReactElement[] = <p>loading...</p>;
  if (products?.length) {
    pageContent = products.map((product) => {
      const inCart: boolean = cart.some((item) => item.sku === product.sku);
      return (
        <Product
          key={product.sku}
          product={product}
          dispatch={dispatch}
          REDUCER_ACTIONS={REDUCER_ACTIONS}
          inCart={inCart}
        />
      );
    });
  }
  return <main className="main main--products">{pageContent}</main>;
};

export default ProductList;
