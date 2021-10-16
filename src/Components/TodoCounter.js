import React from "react";
import '../Styles/TodoCounter.css';

function TodoCounter(props) {
  return (
    <h2 className="Counter">Tareas completadas: {props.tasks | 0}/{props.completedTasks | 0}</h2>
  )
}

export { TodoCounter };