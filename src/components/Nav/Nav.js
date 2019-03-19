import React from 'react';
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBarContainer';

const Nav = ({handleClick}) => (
  <div className="nav">
    <Link to="/">Home</Link>
    <SearchBar/>
    <Link to="/list">List</Link>
    <Link to="/storybook">Storybook</Link>
  </div>
);

export default Nav;
