import React, { useState } from "react"; // Importa React y el hook useState

// Define el componente de lista de tareas
const TodoList = () => {
  // Declara el estado para la lista de tareas y la nueva tarea con useState
  const [tasks, setTasks] = useState([]); // tasks contiene la lista de tareas, setTasks la actualiza
  const [task, setTask] = useState(""); // task contiene la nueva tarea, setTask la actualiza

  // Función para agregar una nueva tarea
  const addTask = () => {
    setTasks([...tasks, task]); // Copia las tareas existentes y añade la nueva tarea
    setTask(""); // Limpia el input de la nueva tarea
  };

  // Función para eliminar una tarea
  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index); // Crea una nueva lista excluyendo la tarea seleccionada
    setTasks(newTasks); // Actualiza la lista de tareas
  };

  return (
    <div>
      <h3>List task component</h3>
      {/* Input para ingresar nuevas tareas */}
      <input
        type="text"
        value={task} // El valor del input es la nueva tarea
        onChange={(e) => setTask(e.target.value)} // Actualiza la nueva tarea cuando cambia el input
      />
      {/* Botón para agregar la tarea */}
      <button onClick={addTask}>Add Task</button>
      {/* Lista de tareas */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {" "}
            {/* Asigna un índice único a cada tarea */}
            {task}
            {/* Botón para eliminar la tarea */}
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList; // Exporta el componente para su uso en otros archivos
