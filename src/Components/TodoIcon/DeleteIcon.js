import React from 'react';
import { TodoIcon } from './';

function DeleteIcon ({ onDelete }) {
 return(
  <TodoIcon 
    type="delete"
    color="#d87d07"
    onClick={onDelete}
  />
 )
}

export { DeleteIcon };