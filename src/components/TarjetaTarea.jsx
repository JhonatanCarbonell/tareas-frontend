// TarjetaTarea
// HU-04 Eliminar tarea
// Props: tarea

function TarjetaTarea({ tarea }) {

  return (
    <div>

      <h3>{tarea.titulo}</h3>

      <p>{tarea.descripcion}</p>

      <button>Editar</button>

      <button>Eliminar</button>

    </div>
  );
}

export default TarjetaTarea;