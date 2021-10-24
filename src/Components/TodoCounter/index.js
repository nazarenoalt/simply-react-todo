import React from "react";
import { TodoContext } from "../../TodoContext";
import './TodoCounter.css';

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  return (
    <h2 className="Counter">Tareas completadas: {totalTodos | 0}/{completedTodos | 0}</h2>
  )
}

export { TodoCounter };