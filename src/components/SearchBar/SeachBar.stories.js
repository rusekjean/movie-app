import React from 'react';
import { storiesOf } from '@storybook/react';

import SearchBar from './SearchBarContainer';
import {MemoryRouter} from 'react-router';

storiesOf('SearchBar', module)
  .addDecorator(story => (
      <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('SearchBar', () => 
      <SearchBar
      />
      )