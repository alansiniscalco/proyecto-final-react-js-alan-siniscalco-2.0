import { Link } from "react-router-dom";
import "./Producto.css";
import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";

function Productos() {
  const [loading, setLoading] = useState(true);
  const [stock, setStock] = useState([]);
  const itemCollectionRef = collection(db, "stock");
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

  const render = stock.map((prod) => {
    return (
      <div key={prod.id} className="card carta__producto">
        <div className="prod__align">
          <img src={prod.img} className="card-img-top" alt={prod.nombre} />
          <div className="card-body">
            <h5 className="card-title">{prod.nombre}</h5>
            <p className="card-text">${prod.precio}</p>
            <Link to={`${prod.id}`} className="btn btn-primary">
              Ver detalles
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return <div className="productos__container">{render}</div>;
}

export default Productos;
