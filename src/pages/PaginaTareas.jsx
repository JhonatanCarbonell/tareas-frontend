// PaginaTareas
// HU-01 Registrar tarea
// HU-02 Consultar tareas

import { useState } from "react";

import Encabezado from "../components/Encabezado";
import FormularioTarea from "../components/FormularioTarea";
import FiltroEstado from "../components/FiltroEstado";
import ListaTareas from "../components/ListaTareas";
import PiePagina from "../components/PiePagina";

function PaginaTareas() {

  const [tareas, setTareas] = useState([
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
  ]);

  const agregarTarea = (nuevaTarea) => {

    setTareas([
      ...tareas,
      nuevaTarea
    ]);

  };

  const eliminarTarea = (id) => {

    setTareas(
      tareas.filter(
        (tarea) => tarea.id !== id
      )
    );

  };

  return (
    <>
      <Encabezado />

      <FormularioTarea
        alAgregar={agregarTarea}
      />

      <FiltroEstado />

      <ListaTareas
        tareas={tareas}
        alEliminar={eliminarTarea}
      />

      <PiePagina />
    </>
  );
}

export default PaginaTareas;