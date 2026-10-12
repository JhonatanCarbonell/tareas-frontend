// ListaTareas
// HU-02 Consultar tareas
// Muestra todas las tareas

import TarjetaTarea from "./TarjetaTarea";

function ListaTareas() {

  const tareas = [

    {
      id: 1,
      titulo: "Estudiar React",
      descripcion: "Repasar componentes"
    },

    {
      id: 2,
      titulo: "Realizar evidencia",
      descripcion: "Terminar AA4 EV03"
    }

  ];

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