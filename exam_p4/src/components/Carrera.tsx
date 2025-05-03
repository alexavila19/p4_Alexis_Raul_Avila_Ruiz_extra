import "./Carrera.css";
import Sidebar from "./Sidebar";

function Carrera() {
  return (
    <div className="contenedor-principal">
      <Sidebar />

        <section id="carrera">
          <h1><center>Carrera, Gustos y Hobbies</center></h1>
          <div className="slider">
            <div className="slider-item">
              <img src="/imagenes/carrera2.jpg" alt="Carrera" />
              <p>Carrera</p>
            </div>
            <div className="slider-item">
              <img src="/imagenes/Gustos2.jpg" alt="Gustos" />
              <p>Gustos 2</p>
            </div>
            <div className="slider-item">
              <img src="/imagenes/hobbies.JPG" alt="Hobbies" />
              <p>Hobbies</p>
            </div>
          </div>
        </section>
      </div>
  );
}

export default Carrera;