import React, { useState } from "react";
import "./Contacto.css";

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    carrera: "",
    correo: "",
    mensaje: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();


    if (!formData.nombre || !formData.carrera || !formData.correo || !formData.mensaje) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    setError(""); 

    
    const data = `Nombre: ${formData.nombre}\nCarrera: ${formData.carrera}\nCorreo: ${formData.correo}\nMensaje: ${formData.mensaje}\n\n`;
    try {
      const blob = new Blob([data], { type: "text/plain;charset=utf-8" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "datos_contacto.txt";
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Error al guardar el archivo:", err);
    }

    setFormData({
      nombre: "",
      carrera: "",
      correo: "",
      mensaje: "",
    });
  };

  return (
    <div className="contenedor-contacto">
      <h1 className="contacto-titulo">Formulario de Conacto</h1>
      <div className="contacto-contenido">
        {error && <div className="contacto-error">{error}</div>}
        <form className="contacto-formulario" onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
          </label>
          <label>
            Carrera:
            <input
              type="text"
              name="carrera"
              value={formData.carrera}
              onChange={handleChange}
            />
          </label>
          <label>
            Correo:
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
            />
          </label>
          <label>
            Mensaje:
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
            ></textarea>
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Contacto;