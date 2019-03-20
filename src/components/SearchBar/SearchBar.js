import React from 'react';
import styled from '@emotion/styled'

var white = "#FFFFFF";
var black = "#2D2D2D";
var red = "#C03A2B";

const InputText = styled.input`
  border: none;
  padding: 10px;
  padding-left: 20px;
  margin: 10px;
  height: 20px;
  width: 500px;
  border: 2px solid ${black};
  border-radius: 34px;
  outline: none;
  :hover {
    border-color: ${red};
  }
  :focus {
    border-color:${red};
  }
`
const ButtonSearch = styled.button`
  position: relative;
  left: -56px;
  top: 1px;
  height: 40px;
  border: none;
  background: ${white};
  text-align: center;
  color: ${black};
  border-radius: 34px;
  cursor: pointer;
  font-size: 20px;
  :hover {
    color: ${red};
  }
`
const IconSearch = styled.i`
  
`

const SearchBar = ({handleSubmit, handleChange, value}) => (
  <div className="search-bar">
  <form onSubmit={handleSubmit}>
  <InputText 
    type="text" 
    value={value} 
    onChange={handleChange} 
    placeholder="Search Movie, Serie, Doc..."
    />
    <ButtonSearch type="submit">
      <IconSearch className="fa fa-search"/>
    </ButtonSearch>
  </form>        
  </div>
);

export default SearchBar;
