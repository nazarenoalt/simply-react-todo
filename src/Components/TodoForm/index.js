import React from 'react'
import './TodoForm.css'
import { TodoContext } from '../../TodoContext'

const TodoForm = () => {
  const {
    setOpenModal,
    createTodo
  } = React.useContext(TodoContext);
  
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const onSetOpenModal = () => setOpenModal(prevState => !prevState);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  const onAddNewTodo = (event) => {
    event.preventDefault();
    createTodo(newTodoValue);
    setOpenModal(prevState => !prevState);
  }

  return (
    <div className="Create-Todo__Container">
                <span className="Close-container" onClick={onSetOpenModal}></span>
                <form className="Create-Todo__Form" onSubmit={onAddNewTodo}>
                  <h2 className="Form__title">
                    Crea una nueva tarea  
                  </h2>
                  <input 
                    className="Form__description-input"
                    type="text" 
                    name="todo-description"
                    placeholder="Escribe aquí tu nueva tarea"
                    value={newTodoValue}
                    onChange={onChange}
                  />
                  <input className="Form__submit-button" type="submit" value="crear" />
                </form>
              </div>
  )
}

export { TodoForm }
