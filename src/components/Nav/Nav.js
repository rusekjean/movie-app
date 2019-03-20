import React from 'react';
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBarContainer';

import styled from '@emotion/styled'

var white = "#FFFFFF";
var black = "#2D2D2D";
var red = "#C03A2B";

const TextLink = styled.h3`
    text-decoration:none;
    color: ${black};
    :hover {
      color: ${red};
    }

`

const Nav = ({handleClick}) => (
  <div className="nav">
    <div className="row middle-md">
      <div className="col-md-1 middle-md">
        <Link style={{ textDecoration: 'none'}} to="/">
          <TextLink>Home</TextLink>
        </Link>
      </div>
      <div className="col-md-8 center-md">
        <SearchBar/>
      </div>
      <div className="col-md-1 end-xs">
        <Link style={{ textDecoration: 'none'}} to="/list">
          <TextLink>List</TextLink>
        </Link>
      </div>
      <div className="col-md-2 end-xs">
        <Link style={{ textDecoration: 'none'}} to="/storybook">
          <TextLink>Storybook</TextLink>
        </Link>
      </div>
    </div>
  </div>
);

export default Nav;
