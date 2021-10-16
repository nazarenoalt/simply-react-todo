import React from "react";
import '../Styles/TodoSearch.css';

function TodoSearch() {
  return(
      <React.Fragment>
        <input className="Searcher" placeholder="Buscar TODO" />
      </React.Fragment>
  )
}

export { TodoSearch };
