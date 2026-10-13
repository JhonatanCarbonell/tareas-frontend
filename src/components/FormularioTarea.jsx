// FormularioTarea
// HU-01 Registrar tarea
// Props: alAgregar

import { useState } from "react";

function FormularioTarea({ alAgregar }) {

  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const manejarEnvio = (event) => {

    event.preventDefault();

    if (!titulo.trim()) return;

    alAgregar({

      id: Date.now(),

      titulo,

      descripcion

    });

    setTitulo("");
    setDescripcion("");

  };

  return (

    <form onSubmit={manejarEnvio}>

      <h2>Nueva Tarea</h2>

      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) =>
          setTitulo(e.target.value)
        }
      />

      <br />

      <textarea
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) =>
          setDescripcion(e.target.value)
        }
      />

      <br />

      <button type="submit">
        Agregar tarea
      </button>

    </form>

  );

}

export default FormularioTarea;