// ListaTareas
// HU-02 Consultar tareas

import TarjetaTarea from "./TarjetaTarea";

function ListaTareas({ tareas, alEliminar }) {

  return (

    <div>

      <h2>Lista de tareas</h2>

      {
        tareas.map((tarea) => (

          <TarjetaTarea
            key={tarea.id}
            tarea={tarea}
            alEliminar={alEliminar}
          />

        ))
      }

    </div>

  );

}

export default ListaTareas;