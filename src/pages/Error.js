import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <h2>404 ERROR - ESTA PAGINA NO EXISTE</h2>
      <Link to={"/"}>Volver al Home</Link>
    </div>
  );
}

export default Error;
