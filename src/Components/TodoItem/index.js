import React from "react";
import './TodoItem.css';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';

function TodoItem({ completed, onCheck, text, onDelete }) {
  return(
    <React.Fragment>
      <li className="Todo-item">
        <div>
          <CompleteIcon 
            className={`check-todo green-filter ${completed && 'completed-task'}`}
            completed={completed}
            onComplete={onCheck}
          />
          <p className="Todo-item__text">{text}</p>
        </div>
        <DeleteIcon 
          className="cancel-todo red-filter"
          onDelete={onDelete}
        />
      </li>
    </React.Fragment>
  )
}

export { TodoItem };
