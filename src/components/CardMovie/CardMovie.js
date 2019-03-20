import React from 'react';
import ButtonInfo from '../ButtonInfo/ButtonInfoContainer';

const CardMovie = ({title, rating, genre}) => (
  <div className="card-movie">
    <h2>{title}</h2>
    <ButtonInfo/>
    <h3>{rating}</h3>
    <h4>{genre}</h4>
  </div>
);

export default CardMovie;
