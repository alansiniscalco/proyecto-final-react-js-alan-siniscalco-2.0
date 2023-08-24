import { useState } from "react";
import "./ItemCount.css";
import Swal from "sweetalert2";

function ItemCount({ cantidad, onAdd }) {
  const [cant, setCant] = useState(cantidad);

  function handleClickSumar() {
    setCant(cant + 1);
  }

  function handleClickRestar() {
    if (cant > 1) {
      setCant(cant - 1);
    }
  }

  return (
    <>
      <div className="count__container">
        <button
          onClick={handleClickRestar}
          type="button"
          className="btn btn-primary"
        >
          -
        </button>
        <p>{cant}</p>
        <button
          onClick={handleClickSumar}
          type="button"
          className="btn btn-primary"
        >
          +
        </button>
        <div>
          <button
            className=" btn btn-primary"
            onClick={() => {
              onAdd(cant);
              Swal.fire({
                title: "Producto agregado al carrito",
                icon: "success",
                timer: 3000,
              });
            }}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </>
  );
}
export default ItemCount;
