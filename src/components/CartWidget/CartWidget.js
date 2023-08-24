import carritoSvg from "./assets/carrito.svg";
import "./cartWidget.css";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
function CartWidget() {
  const { totalProducts } = useCartContext();

  return (
    <>
      <div className="cart__widget">
        <Link to={"/cart"}>
          <div>
            <img
              src={carritoSvg}
              className="icon__carrito"
              alt="carrito de compras"
            />
          </div>
        </Link>
        <div>
          <span>{totalProducts() || " "}</span>
        </div>
      </div>
    </>
  );
}

export default CartWidget;
