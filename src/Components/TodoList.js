import React from "react";
import '../Styles/TodoList.css';

function TodoList(props) {
  return(
  <ul className="Todo-list">
    {props.children}
  </ul>
  )
}

export { TodoList };
