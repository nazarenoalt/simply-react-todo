import React from 'react';

import { CreateTodoButton } from './Components/CreateTodoButton';
import { TodoCounter } from './Components/TodoCounter';
import { TodoItem } from './Components/TodoItem';
import { TodoList } from './Components/TodoList';
import { TodoSearch } from './Components/TodoSearch';

const todos = [
  { id:1, text: 'estudiar REACT', completed: true },
  { id:2, text: 'cocinar', completed: false },
  { id:3, text: 'tomar aguita', completed: false },
]

function App(props) {
  return (
    <React.Fragment>
      <TodoCounter tasks={todos.length} completedTasks={todos.filter(t => t.completed === true).length}/>
      <TodoSearch />
      <TodoList>
        
        {todos.map(todo => (
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
