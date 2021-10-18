import React from 'react';

import { ButtonPanel } from './Components/ButtonPanel';
import { TodoCounter } from './Components/TodoCounter';
import { TodoItem } from './Components/TodoItem';
import { TodoList } from './Components/TodoList';
import { TodoSearch } from './Components/TodoSearch';

const defaultTodos = [
  { id:1, text: 'estudiar REACT', completed: true },
  { id:2, text: 'cocinar', completed: false },
  { id:3, text: 'tomar aguita', completed: false },
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!searchValue >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText)
    })
  }

  const toggleTodosCheck = (todoID) => {
    const index = todos.findIndex(todo => todo.id === todoID);
    const newList = [...todos];
    newList[index].completed = !newList[index].completed;
    setTodos(newList);
  };

  const deleteTodo = (todoID) => {
    const newList = todos.filter(todo => todo.id !== todoID)
    setTodos(newList);
  };

  const deleteCompletedTodos = () => {
    const newList = todos.filter(todo => todo.completed !== true);
    setTodos(newList);
  }

  return (
    <React.Fragment>
      <TodoCounter tasks={totalTodos} completedTasks={completedTodos}/>
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
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
      <ButtonPanel
        deleteCompletedTodos={deleteCompletedTodos}
      />
    </React.Fragment>

  );
}

export default App;
