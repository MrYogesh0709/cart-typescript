import { ReactElement, memo } from "react";
import { ReducerAction, ReducerActionType } from "../context/CartProvider";
import { ProductType } from "../context/ProductsProvider";

type ProductProp = {
  product: ProductType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
  inCart: boolean;
};
const Product = ({
  product,
  dispatch,
  inCart,
  REDUCER_ACTIONS,
}: ProductProp): ReactElement => {
  //* Dynamic Image Work With Development and Production
  const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url)
    .href;
  const onAddToCart = () =>
    dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } });

  const itemInCart = inCart ? "➡️ Item in Cart: ✔️" : null;

  return (
    <article className="product">
      <h3>{product.name}</h3>
      <img src={img} alt={product.name} className="product__img" />
      <p>
        {new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "INR",
        }).format(product.price)}
        {itemInCart}
      </p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </article>
  );
};

function areProductsEqual(
  { product: prevProduct, inCart: prevInCart }: ProductProp,
  { product: nextProduct, inCart: nextInCart }: ProductProp
) {
  return Object.keys(prevProduct).every((key) => {
    return (
      prevProduct[key as keyof ProductType] ===
        nextProduct[key as keyof ProductType] && prevInCart === nextInCart
    );
  });
}

const MemoizedProduct = memo<typeof Product>(Product, areProductsEqual);
export default MemoizedProduct;
