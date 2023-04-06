import { useCart } from "../hooks/useCart";
import Nav from "./Nav";

type HeaderProps = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ viewCart, setViewCart }: HeaderProps) => {
  const { totalItems, totalPrice } = useCart();
  return (
    <header className="header">
      <div className="header__title_bar">
        <h1>Acme.Co</h1>
        <div className="header__price_box">
          <p>Total Items:{totalItems}</p>
          <p>Total Price:{totalPrice}</p>
        </div>
      </div>
      <Nav viewCart={viewCart} setViewCart={setViewCart} />
    </header>
  );
};

export default Header;
