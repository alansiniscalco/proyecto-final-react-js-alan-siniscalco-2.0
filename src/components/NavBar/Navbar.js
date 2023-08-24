import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import logo from "./assets/logo.png";
import "./navbar.css";
import "../CartWidget/CartWidget";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary nav">
      <div className="container-fluid navbar">
        <button
          className="navbar-toggler"
          type="Link"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse nav__flex" id="navbarNav">
          <Link to="/" className="navbar-brand ">
            <img className="logo-clean" src={logo} alt="logo de clean pc" />
            <span className="nombre">Clean PC</span>
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/productos" className="nav-link">
                Todos los productos
              </Link>
            </li>
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorias
              </span>
              <ul className="dropdown-menu">
                <li>
                  <Link to={"categorias/fuentes"} className="dropdown-item">
                    Fuentes
                  </Link>
                </li>
                <li>
                  <Link
                    to={"categorias/almacenamiento"}
                    className="dropdown-item"
                  >
                    Almacenamiento
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className="cart">
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
