import React from 'react';
import './TodoIcon.css';
import { ReactComponent as CheckSVG } from '../../assets/svg/check-mark.svg';
import { ReactComponent as DeleteSVG } from '../../assets/svg/close.svg';

function TodoIcon({ type, color = 'gray', onClick, isCompleted }) {
  const iconTypes = {
    'check': color => ( <CheckSVG className="Icon-svg Icon-svg__check" fill={color} /> ),
    'delete': color => ( <DeleteSVG className="Icon-svg Icon-svg__delete" fill={color} /> )
  }
  
 return(
  <span
    className={`Icon-container Icon-container__${type}`}
    onClick={onClick}
  >
    {type === 'check'
    ? isCompleted && iconTypes[type](color)
    : iconTypes[type](color) }
  </span>
 )
}

export { TodoIcon };