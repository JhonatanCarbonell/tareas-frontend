// PaginaTareas
// Agrupa todos los componentes del módulo

import Encabezado from "../components/Encabezado";
import FormularioTarea from "../components/FormularioTarea";
import FiltroEstado from "../components/FiltroEstado";
import ListaTareas from "../components/ListaTareas";
import PiePagina from "../components/PiePagina";

function PaginaTareas() {

  return (

    <>

      <Encabezado />

      <FormularioTarea />

      <FiltroEstado />

      <ListaTareas />

      <PiePagina />

    </>

  );

}

export default PaginaTareas;