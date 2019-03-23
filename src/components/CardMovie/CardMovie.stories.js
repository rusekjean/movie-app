import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {MemoryRouter} from 'react-router';
import CardMovie from './CardMovieContainer';

storiesOf('Card', module)
  .addDecorator(story => (
      <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('CardMovie', () => 
      <CardMovie
        poster="https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg"
        title="Title"
        rating="Rating"
        genre="Genre"
      />
      )