import React from 'react';

const SearchBar = ({handleClick}) => (
  <div className="search-bar">
    <input type="text" placeholder="Search Movie, Serie, Doc..."></input>
    <button onClick={handleClick}>test</button>
  </div>
);

export default SearchBar;
