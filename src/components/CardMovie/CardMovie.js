import React from 'react';
import ButtonInfo from '../ButtonInfo/ButtonInfoContainer';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled'

var white = "#FFFFFF";
var black = "#2D2D2D";
var red = "#C03A2B";

const CardContainer = styled.div`
  box-shadow:0 1px 4px rgba(192, 58, 43, 1);
  min-height: 750px;
  width: auto;
  padding: 5px 0px;
  margin: 10px 0px;
`

const CardMovie = ({id, title, rating, genre, poster}) => (
  <CardContainer className="card-movie">
    <h2>{title}</h2>
    <img src={poster}/>
    <Link className="square_btn" to={`/info/${id}`} key={id}>
           <ButtonInfo/>
    </Link>
    <h3>{rating}</h3>
    <h4>{genre}</h4>
  </CardContainer>
);

export default CardMovie;
