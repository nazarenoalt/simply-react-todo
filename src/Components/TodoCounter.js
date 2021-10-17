import React from "react";
import '../Styles/TodoCounter.css';

function TodoCounter({ tasks, completedTasks }) {
  return (
    <h2 className="Counter">Tareas completadas: {tasks | 0}/{completedTasks | 0}</h2>
  )
}

export { TodoCounter };