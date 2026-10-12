// FormularioTarea
// HU-01 Registrar tarea
// Permite registrar nuevas tareas

function FormularioTarea() {

  return (

    <form>

      <h2>Nueva Tarea</h2>

      <input
        type="text"
        placeholder="Título"
      />

      <br />

      <textarea
        placeholder="Descripción"
      ></textarea>

      <br />

      <button type="submit">
        Agregar tarea
      </button>

    </form>
  );

}

export default FormularioTarea;