import React from "react";
import '../Styles/CreateTodoButton.css';

function CreateTodoButton() {
  const onClickButton = () => {
    console.log('poronga')
  }
  return(
    <React.Fragment>
      <button
        className="Create-todo__button"
        onClick={onClickButton}
      >
        +
      </button>
    </React.Fragment>
  )

}

export { CreateTodoButton };