import Swal from "sweetalert2";
import ItemCart from "../components/ItemCart/ItemCart";
import { useCartContext } from "../context/CartContext";
import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import "./Cart.css";
import { Link } from "react-router-dom";
import img from "./assets/sad_119546.webp";
import { useState } from "react";
function Cart() {
  const { cart, totalPrice, clearCart } = useCartContext();

  const [nombre, setNombre] = useState();
  const [email, setEmail] = useState();
  const [telefono, setTelefono] = useState();
  const [cp, setCp] = useState();

  const ordenDeCompra = {
    datos: {
      nombreUsuario: nombre,
      email: email,
      telefono: telefono,
      codigoPostal: cp,
    },
    orden: cart,
    total: totalPrice(),
  };

  const handleEmitirCompra = () => {
    if (!nombre || !email || !telefono || !cp) {
      Swal.fire({
        title: `Orden fallida`,
        text: `Debe completar sus datos antes de realizar el pedido`,
        icon: "error",
      });
    } else {
      const ordenCollectionRef = collection(db, "ordenes");
      addDoc(ordenCollectionRef, ordenDeCompra).then(({ id }) =>
        Swal.fire({
          title: `${nombre} tu orden fue realizada correctamente`,
          text: `Numero de pedido: ${id}`,
          icon: "success",
        })
      );
      clearCart();
    }
  };
  if (cart.length === 0) {
    return (
      <>
        <div className="empty__cart">
          <h2>No hay productos actualmente en su carrito</h2>
          <div>
            <img src={img} alt="No hay productos en el carrito"></img>
          </div>
          <Link to={"/productos"}>
            {" "}
            <button className="btn btn-primary">Agregar productos</button>{" "}
          </Link>
          <div>
            {cart.map((prod) => (
              <div>{prod.nombre}</div>
            ))}
          </div>
        </div>
      </>
    );
  }

  const cards = cart.map((prod) => (
    <>
      <ItemCart key={prod.id} producto={prod}></ItemCart>
    </>
  ));

  return (
    <>
      <h3 className="cart__title">
        Completa tus datos para realizar el pedido
      </h3>
      <div className="cart__container">
        <div className="cart__layout">
          <form>
            <div className="mb-3">
              <label for="nombre" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                aria-describedby="nombre"
                onChange={(e) => {
                  e.preventDefault();
                  setNombre(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label for="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="email"
                onChange={(e) => {
                  e.preventDefault();
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label for="telefono" className="form-label">
                Teléfono
              </label>
              <input
                type="text"
                className="form-control"
                id="telefono"
                onChange={(e) => {
                  e.preventDefault();
                  setTelefono(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label for="cp" className="form-label">
                Codigo postal
              </label>
              <input
                type="number"
                className="form-control"
                id="cp"
                onChange={(e) => {
                  e.preventDefault();
                  setCp(e.target.value);
                }}
              />
            </div>
          </form>

          <div className="cart__card">{cards}</div>
        </div>
        <button className="btn btn-success" onClick={handleEmitirCompra}>
          Emitir compra
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            clearCart();
            Swal.fire({
              title: "Se vacio tu carrito",
              icon: "info",
            });
          }}
        >
          Vaciar carrito
        </button>
      </div>
    </>
  );
}

export default Cart;
