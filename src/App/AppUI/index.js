import React from 'react'
import { Modal } from '../../Components/Modal';
import { TodoContext } from '../../TodoContext';
import { ButtonPanel } from '../../Components/ButtonPanel';
import { TodoCounter } from '../../Components/TodoCounter';
import { TodoItem } from '../../Components/TodoItem';
import { TodoList } from '../../Components/TodoList';
import { TodoSearch } from '../../Components/TodoSearch';
import { TodoForm } from '../../Components/TodoForm';

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    toggleTodosCheck,
    deleteTodo,
    openModal,
  } = React.useContext(TodoContext);

    return (
    <React.Fragment>
        <TodoCounter />
        <TodoSearch />
          <TodoList>
            {error && <p className="p-warn">Hubo un error con los datos, espera unos instantes y prueba recargar la página</p>}
            {loading && <p className="p-notification">Cargando lista, aguantá un toque...</p>}
            {(!loading && !searchedTodos.length) && <p className="p-notification">¡Tu lista está vacia! crea tu primer tarea</p>}
            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onCheck ={() => toggleTodosCheck(todo.id)}
                onDelete ={() => deleteTodo(todo.id)}
              />
            ))}
          </TodoList>

          {openModal === true && (
            <Modal>
              <TodoForm />
            </Modal>
            )}
          
        <ButtonPanel />
    </React.Fragment>
  )
}

export { AppUI }
