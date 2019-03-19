import React from 'react';
import ButtonInfo from '../../ButtonInfo/ButtonInfoContainer';
import CardMovie from '../../CardMovie/CardMovieContainer';
import CardSquare from '../../CardSquare/CardSquareContainer';
import List from '../../List/ListContainer';
import Nav from '../../Nav/NavContainer';


const Home = ({handleClick}) => (
  <div className="home">
    <Nav/>
    <h2>Navigate through your application</h2>
    <button onClick={handleClick}>test</button>
    <ButtonInfo/>
    <CardMovie/>
    <CardSquare/>
    <List/>
  </div>
);

export default Home;
