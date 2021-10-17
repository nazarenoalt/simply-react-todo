import React from "react";
import '../Styles/TodoItem.css';

function TodoItem(props) {
  const completedTask = () => {
    console.log(this)
  }
  const cancelTask = () => {
    console.log(this)
  }

  return(
    <React.Fragment>
      <li className="Todo-item">
        <div>
          <span 
            className={`check-todo green-filter ${props.completed && 'completed-task'}`}
            onClick={completedTask}
          ></span>
          <p className="Todo-item__text">{props.text}</p>
        </div>
        <span 
          className="cancel-todo red-filter"
          onClick={cancelTask}
        ></span>
      </li>
    </React.Fragment>
  )
}

export { TodoItem };
