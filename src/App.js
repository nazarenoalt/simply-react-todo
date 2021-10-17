import React from 'react';

import { CreateTodoButton } from './Components/CreateTodoButton';
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

  return (
    <React.Fragment>
      <TodoCounter tasks={totalTodos} completedTasks={completedTodos}/>
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        todoList={defaultTodos}
      />
      <TodoList>
        
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>

  );
}

export default App;
