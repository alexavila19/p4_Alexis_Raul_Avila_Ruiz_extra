import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="background-blur"></div>
      <h2 className="logo">P_Final</h2>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/quiensoy">Quien soy</Link>
        <Link to="/carrera">Carrera</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/gustos">Gustos y Hobbies</Link>
      </nav>
    </div>
  );
}

export default Sidebar;