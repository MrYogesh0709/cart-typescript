import { ReactElement, createContext, useEffect, useState } from "react";

export type ProductType = {
  sku: string;
  name: string;
  price: number;
};

//* fetch products
const initState: ProductType[] = [];

// const initState: ProductType[] = [
//   {
//     sku: "item0001",
//     name: "Widget",
//     price: 9.99,
//   },
//   {
//     sku: "item0002",
//     name: "Premium Widget",
//     price: 19.99,
//   },
//   {
//     sku: "item0003",
//     name: "Deluxe Widget",
//     price: 29.99,
//   },
// ];

export type UseProductContextType = {
  products: ProductType[];
};

const initContextState: UseProductContextType = {
  products: [],
};

const ProductsContext = createContext<UseProductContextType>(initContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] | undefined };

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initState);

  useEffect(() => {
    const fetchProducts = async (): Promise<ProductType[]> => {
      const data = await fetch("http://localhost:3500/products")
        .then((response) => response.json())
        .catch((err) => {
          if (err instanceof Error) console.log(err);
        });
      return data;
    };
    fetchProducts().then((products) => setProducts(products));
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
