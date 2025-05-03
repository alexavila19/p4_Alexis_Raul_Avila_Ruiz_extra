import "./P_final.css";
import Sidebar from "./Sidebar";
import Tarjeta from "./Tarjeta";

function P_final() {
  return (
    <div className="contenedor-principal">
      <Sidebar />
      
        <section id="quien-soy">
          <h1>Quien Soy</h1>
          <Tarjeta />
        </section>
      </div>
  );
}

export default P_final;