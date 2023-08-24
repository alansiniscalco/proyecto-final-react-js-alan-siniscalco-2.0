import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";

function Layout() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
