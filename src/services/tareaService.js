// tareaService
// Simula la comunicación con la API

const tareas = [

  {
    id: 1,
    titulo: "Estudiar React",
    descripcion: "Repasar componentes",
    completada: false
  },

  {
    id: 2,
    titulo: "Realizar evidencia",
    descripcion: "Terminar AA4 EV03",
    completada: false
  }

];

// HU-02 Consultar tareas

export const listarTareas = () => {

  return Promise.resolve(tareas);

};