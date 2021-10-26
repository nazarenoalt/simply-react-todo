import React from 'react';
import { TodoIcon } from './';

function CompleteIcon ({ completed, onComplete }) {
 return(
  <TodoIcon 
    type="check"
    color="#00e300"
    onClick={onComplete}
    isCompleted={completed && true}
  />
 )
}

export { CompleteIcon };