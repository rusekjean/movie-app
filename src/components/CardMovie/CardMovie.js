import React from 'react';
import ButtonInfo from '../ButtonInfo/ButtonInfoContainer';
import { Link } from 'react-router-dom';

const CardMovie = ({id, title, rating, genre}) => (
  <div className="card-movie">
    <h2>{title}</h2>
    <Link className="square_btn" to={`/info/${id}`} key={id}>
           <ButtonInfo/>
    </Link>
    <h3>{rating}</h3>
    <h4>{genre}</h4>
  </div>
);

export default CardMovie;
