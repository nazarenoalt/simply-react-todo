import React from "react";
import '../Styles/TodoItem.css';

function TodoItem(props) {
  return(
    <React.Fragment>
      <li className="Todo-item">
        <div>
          <span className="check-todo green-filter"></span>
          <p className="Todo-item__text">{props.text}</p>
        </div>
        <span className="cancel-todo red-filter"></span>
      </li>
    </React.Fragment>
  )
}

export { TodoItem };
