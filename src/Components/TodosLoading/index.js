import React from 'react'
import './TodosLoading.css'
const TodosLoading = () => {
  return (
       <li className="Todo-skeleton">
        <div className="check-container">
            <span 
              className={`skeleton__check-todo skeleton__completed-task`}
            ></span>
        </div>
        <span 
          className="skeleton__cancel-todo skeleton__orange-filter"
        ></span>
      </li>
  )
 }

export { TodosLoading };