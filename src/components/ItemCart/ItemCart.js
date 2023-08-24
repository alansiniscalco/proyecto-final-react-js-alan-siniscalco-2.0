import { useCartContext } from "../../context/CartContext";
import "./ItemCart.css";
function ItemCart({ producto }) {
  const { removeProduct } = useCartContext();
  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4 img__container">
            <img
              src={producto.img}
              className="img-fluid rounded-start cart__img"
              alt={producto.nombre}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{producto.nombre}</h5>
              <p className="card-text">Precio unitario: ${producto.precio}</p>
              <p className="card-text">
                Sub total: ${producto.precio * producto.cantidad}
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Cantidad: {producto.cantidad}
                </small>
              </p>
            </div>
            <div>
              <button
                className="btn btn-danger"
                onClick={() => removeProduct(producto.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemCart;
