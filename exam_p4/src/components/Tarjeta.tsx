import "./Tarjeta.css";

function Tarjeta() {
  return (
    <div className="tarjeta">
      <div className="tarjeta-foto">
        <img
          src="/imagenes/yo.jpg"           
        />
      </div>
      <div className="tarjeta-info">
        <h2>Alexis Raul Avila Ruiz</h2>
        <p>Edad: 21 años</p>
        <p>Email: alexavila1705@gmail.com</p>
        <p>Telefono: 5651808270</p>
        <p>Direccion: Lazaro Cardenas #257</p>
      </div>
    </div>
  );
}

export default Tarjeta;

