import React from 'react';
import Nav from '../../Nav/NavContainer';
import CardMovie from '../../CardMovie/CardMovieContainer';

const List = ({dataLike, dataWatched}) => (
  <div className="home">
    <Nav/>
    <div className="row">
      <h2 className="col-md-12 center-md">
        Like
      </h2>
      {dataLike.length > 0 && (
        dataLike.map(movie => (
          <div className="col-md-2 center-md">
            <CardMovie
              data={movie}
              id={movie.imdbID}
              key={movie.imdbID}
              poster={movie.Poster}
              title={movie.Title}
              rating={movie.imdbRating}
              genre={movie.Genre}
            />
          </div>
        ))
      )}
      </div>
    <div className="row">
    <h2 className="col-md-12 center-md">
        Watched
    </h2>
      {dataWatched.length > 0 && (
        dataWatched.map(movie => (
          <div className="col-md-2 center-md">
            <CardMovie
              data={movie}
              id={movie.imdbID}
              key={movie.imdbID}
              poster={movie.Poster}
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

export default List;
