import React from 'react'
import { Modal } from '../../Components/Modal';
import { TodoContext } from '../../TodoContext';
import { ButtonPanel } from '../../Components/ButtonPanel';
import { TodoCounter } from '../../Components/TodoCounter';
import { TodoItem } from '../../Components/TodoItem';
import { TodoList } from '../../Components/TodoList';
import { TodoSearch } from '../../Components/TodoSearch';
import { TodoForm } from '../../Components/TodoForm';
import { TodosEmpty } from '../../Components/TodosEmpty';
import { TodosError } from '../../Components/TodosError';
import { TodosLoading } from '../../Components/TodosLoading';

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
            {error && <TodosError error={error}/>}
            {loading && 
            new Array(10).fill().map((item, index)=>(
              <TodosLoading key={index} />
))}
            {(!loading && !searchedTodos.length) && <TodosEmpty />}
            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onCheck={() => toggleTodosCheck(todo.id)}
                onDelete={() => deleteTodo(todo.id)}
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
