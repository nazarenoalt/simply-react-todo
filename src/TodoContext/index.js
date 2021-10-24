import React from 'react'
import { useLocalStorage } from '../Hooks/useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);
  
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

  const createTodo = (text) => {
    const newTodos = [...todos];
    const verifyId = (id) => {
      const todosWithCurrentId = todos.filter(todo => todo.id === id)
      if(todosWithCurrentId.length > 0) {
        return verifyId(id+1);
      } else {
        return id;
      }
    }

    newTodos.push({
      completed: false,
      id: verifyId(todos.length+1),
      text,
    });
    saveTodos(newTodos);
  }
  
  const toggleTodosCheck = (todoID) => {
    const index = todos.findIndex(todo => todo.id === todoID);
    const newList = [...todos];
    newList[index].completed = !newList[index].completed;
    saveTodos(newList);
  };

  const deleteTodo = (todoID) => {
    const newList = todos.filter(todo => todo.id !== todoID)
    saveTodos(newList);
  };

  const deleteCompletedTodos = () => {
    const newList = todos.filter(todo => todo.completed !== true);
    saveTodos(newList);
  }

  return(
    <TodoContext.Provider value={{
      deleteCompletedTodos,
      toggleTodosCheck,
      setSearchValue,
      completedTodos,
      searchedTodos,
      setOpenModal,
      createTodo,
      deleteTodo,
      totalTodos,
      openModal,
      loading,
      error,
    }}>
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };