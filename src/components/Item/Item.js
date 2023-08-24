import { Link, useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./Item.css";
import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useCartContext } from "../../context/CartContext";

function Item() {
  const { itemid } = useParams();
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();
  const [cant, setCant] = useState(1);
  const [loading, setLoading] = useState(true);
  const [stock, setStock] = useState([]);
  const itemCollectionRef = collection(db, "stock");

  function handleOnAdd(cantidad) {
    setCant(cantidad);
    setGoToCart(true);
    addProduct(item, cantidad);
  }

  useEffect(() => {
    getDocs(itemCollectionRef)
      .then(async (response) => {
        const filteredData = response.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setStock(filteredData);
        setLoading(false);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  /////////////
  const item = stock.find((prod) => {
    return prod.id === itemid;
  });
  return (
    <>
      <div className="item__layout">
        <article key={item.id} className="card__item card">
          <h2>{item.nombre}</h2>
          <img src={item.img} alt={item.nombre}></img>
          <p>{item.descripcion}</p>

          <div>Precio: ${item.precio}</div>

          {goToCart ? (
            <div className="btn__terminar">
              <Link to={"/cart"}>
                <button className=" btn btn-primary">Terminar Compra</button>
              </Link>
            </div>
          ) : (
            <ItemCount cantidad={cant} onAdd={handleOnAdd} />
          )}
        </article>
      </div>
      <div className="btn__volver">
        {" "}
        <Link to={"/"}>
          <button className=" btn btn-primary">Volver al inicio</button>
        </Link>
      </div>
    </>
  );
}

export default Item;
