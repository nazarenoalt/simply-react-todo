import React from "react";
import '../Styles/TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {

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