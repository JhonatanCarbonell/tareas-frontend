// ListaTareas
// HU-02 Consultar tareas

import { useEffect, useState } from "react";
import TarjetaTarea from "./TarjetaTarea";
import { listarTareas } from "../services/tareaService";

function ListaTareas() {

  const [tareas, setTareas] = useState([]);

  useEffect(() => {

    listarTareas().then(setTareas);

  }, []);

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