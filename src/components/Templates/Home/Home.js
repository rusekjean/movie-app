import React from 'react';
import CardMovie from '../../CardMovie/CardMovieContainer';
import Nav from '../../Nav/NavContainer';
import styled from '@emotion/styled'

var white = "#FFFFFF";
var black = "#2D2D2D";
var red = "#C03A2B";

const TextBoxOffice = styled.h2`
  color: ${red};
  font-family: NetflixBold;
  font-size: 64px;
`
const Home = ({handleClick, data}) => (
  <div className="home">
    <Nav/>
    
    <div className="row">
      <TextBoxOffice className="col-md-12 center-md">Box-Office</TextBoxOffice>
      {data.length > 0 && (
        data.map(movie => (
          <div className="col-md-4 center-md">
            <CardMovie
              data={movie}
              id={movie.imdbID}
              key={movie.imdbID}
              title={movie.Title}
              rating={movie.imdbRating}
              genre={movie.Genre}
            />
          </div>
        ))
      )}
    </div>
    
  </div>
);

export default Home;
