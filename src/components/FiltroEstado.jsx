// FiltroEstado
// Permite filtrar tareas por estado

function FiltroEstado() {
  return (
    <div>
      <label>Filtrar:</label>

      <select>
        <option>Todas</option>
        <option>Completadas</option>
        <option>Pendientes</option>
      </select>
    </div>
  );
}

export default FiltroEstado;