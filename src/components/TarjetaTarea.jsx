// TarjetaTarea
// HU-04 Eliminar tarea
// Props: tarea, alEliminar

function TarjetaTarea({ tarea, alEliminar }) {

  return (

    <div>

      <h3>{tarea.titulo}</h3>

      <p>{tarea.descripcion}</p>

      <button>Editar</button>

      <button
        onClick={() => alEliminar(tarea.id)}
      >
        Eliminar
      </button>

    </div>

  );

}

export default TarjetaTarea;