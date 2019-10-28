import React, { useState } from 'react';
import './Search.scss';

const Search = ({ close }) => {

  const [query, setQuery] = useState("");

  return (
    <div className="Search">
      <button className="close-icon" onClick={close}>&#10005;</button>
      <input 
        onChange={(e) => {
          console.log(e.target.value)
          setQuery(e.target.value)
        }} 
        placeholder="Type To Search"></input>
      <hr className={query.length > 0 ? "black-line" : "grey-line"}></hr>
    </div>
  );
}

export default Search;