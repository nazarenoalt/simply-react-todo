import React from "react";
import { TodoContext } from "../../TodoContext";
import './TodoSearch.css';

function TodoSearch() {

  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  
  const todoSearch = (event) => {
    setSearchValue(event.target.value);
  }

  return(
      <React.Fragment>
        <input
          className="Searcher"
          placeholder="Buscar TODO"
          onChange={todoSearch}
          value={searchValue}
        />
      </React.Fragment>
  )
}

export { TodoSearch };