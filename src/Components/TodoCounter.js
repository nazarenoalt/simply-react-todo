import React from "react";
import '../Styles/TodoCounter.css';

const estilos = {
  color: 'red',
  backgroundColor: 'blue',
  boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
};

function TodoCounter() {
  return (
    <h2 className="Counter">Has completado 2 de 3 TODOs</h2>
  )
}

export { TodoCounter };