import "./App.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import P_final from "./components/P_final";
import Carrera from "./components/Carrera";
import Contacto from "./components/Contacto";

function App() {
  return (
    <div className="contenedor-principal">
      <Sidebar />
      <div className="contenido">
        <Routes>
          <Route path="/" element={<P_final />} />
          <Route path="/quiensoy" element={<P_final />} />
          <Route path="/carrera" element={<Carrera />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/gustos" element={<h1>Gustos y Hobbies</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
