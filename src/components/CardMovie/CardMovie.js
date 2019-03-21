import React from 'react';
import ButtonInfo from '../ButtonInfo/ButtonInfoContainer';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'

var white = "#FFFFFF";
var black = "#2D2D2D";
var red = "#C03A2B";

const anotherStyle = css({
  backgroundImage: `url(${poster})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  boxShadow: '0 1px 4px rgba(192, 58, 43, 1)',
  minHeight: '550px',
  margin: '30px 60px',
  '&:hover': {
    backgroundImage: 'none',
    background: 'rgba(76, 175, 80, 0.8)'
  }
})

const CardContainer = styled.div`

  :hover{
    background-image:none;
    
  }
`
const TextSpan = styled.span`
  margin: 0px 0px;
`

const CardMovie = ({id, title, rating, genre, poster}) => (
  <CardContainer
  css={anotherStyle}
    className="card-movie row middle-md"
  >
    <h2 className="col-md-12">{title}</h2>
    <div className="col-md-12">
      <Link to={`/info/${id}`} key={id}>
            <ButtonInfo/>
      </Link>
      <TextSpan>{rating}</TextSpan>
      <br/>
      <TextSpan>{genre}</TextSpan>
    </div>
  </CardContainer>
);

export default CardMovie;
