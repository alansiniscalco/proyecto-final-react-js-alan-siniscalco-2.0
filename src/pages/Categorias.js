import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import "./Categorias.css";
function Categorias() {
  const { categoria } = useParams();

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

  const itemsFiltrados = stock.filter((prod) => {
    return prod.categoria === categoria;
  });

  const items = itemsFiltrados.map((item) => {
    return (
      <div key={item.id}>
        <article key={item.id} className=" catg__container card">
          <div className="catg__align">
            <h2>{item.nombre}</h2>
            <img src={item.img} alt={item.nombre}></img>

            <div>${item.precio}</div>
            <Link to={`/productos/${item.id}`}>
              <button className=" btn btn-primary">Ver detalles</button>
            </Link>
          </div>
        </article>
      </div>
    );
  });
  return <div className="catg__layout">{items}</div>;
}
export default Categorias;
