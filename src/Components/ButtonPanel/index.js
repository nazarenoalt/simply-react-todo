import React from 'react';
import { TodoContext } from '../../TodoContext';
import './ButtonPanel.css';
function ButtonPanel() {
  const { 
    setOpenModal,
    deleteCompletedTodos,
  } = React.useContext(TodoContext);
  
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
        onClick={() => setOpenModal(prevState => !prevState)}
      >+</button>
    </div>
  )
}

export { ButtonPanel }
