import React from 'react';
import Nav from '../../Nav/NavContainer';


const Info = ({data}) => (
  <div className="home">
    <Nav/>
    <h2>{data.Title}</h2>
    <img src={data.Poster}/>
    <div className="row">
    
    </div>
    
  </div>
);

export default Info;
