import React from 'react';
import '../Styles/ButtonPanel.css';

function ButtonPanel({ deleteCompletedTodos, createTodoButton }) {
  return (
    <div className="Button-panel">
      <button 
        type="button"
        className="Delete-todo"
        onClick={deleteCompletedTodos}
      >Delete Completed Todos</button>
      
      <button
        type="button"
        className="Create-todo"
        onClick={createTodoButton}
      >+</button>
    </div>
  )
}

export { ButtonPanel }
