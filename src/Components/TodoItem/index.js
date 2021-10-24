import React from "react";
import './TodoItem.css';

function TodoItem(props) {
  return(
    <React.Fragment>
      <li className="Todo-item">
        <div>
          <span 
            className={`check-todo green-filter ${props.completed && 'completed-task'}`}
            onClick={props.onCheck}
          ></span>
          <p className="Todo-item__text">{props.text}</p>
        </div>
        <span 
          className="cancel-todo red-filter"
          onClick={props.onDelete}
        ></span>
      </li>
    </React.Fragment>
  )
}

export { TodoItem };
