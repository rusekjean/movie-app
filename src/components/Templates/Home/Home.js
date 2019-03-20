import React from 'react';
import ButtonInfo from '../../ButtonInfo/ButtonInfoContainer';
import CardMovie from '../../CardMovie/CardMovieContainer';
import CardSquare from '../../CardSquare/CardSquareContainer';
import List from '../../List/ListContainer';
import Nav from '../../Nav/NavContainer';


const Home = ({handleClick, data}) => (
  <div className="home">
    <Nav/>
    <h2>Box-Office</h2>
    <div className="row">
      {data.length > 0 && (
        data.map(movie => (
          <div className="col-md-4">
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
    <button onClick={handleClick}>test</button>
    
  </div>
);

export default Home;
