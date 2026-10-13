// ListaTareas
// HU-02 Consultar tareas
// Props: tareas

import TarjetaTarea from "./TarjetaTarea";

function ListaTareas({ tareas }) {

  return (

    <div>

      <h2>Lista de tareas</h2>

      {

        tareas.map((tarea) => (

          <TarjetaTarea
            key={tarea.id}
            tarea={tarea}
          />

        ))

      }

    </div>

  );

}

export default ListaTareas;