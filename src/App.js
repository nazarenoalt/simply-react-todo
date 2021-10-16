import React from 'react';

import { CreateTodoButton } from './Components/CreateTodoButton';
import { TodoCounter } from './Components/TodoCounter';
import { TodoItem } from './Components/TodoItem';
import { TodoList } from './Components/TodoList';
import { TodoSearch } from './Components/TodoSearch';

const todos = [
  { id:1, text: 'estudiar REACT', completed: false },
  { id:2, text: 'cocinar', completed: false },
  { id:3, text: 'tomar aguita', completed: false },
]

function App(props) {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        
        {todos.map(todo => (
          <TodoItem key={todo.id} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>

  );
}

export default App;
