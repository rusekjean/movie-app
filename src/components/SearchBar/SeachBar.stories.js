import React from 'react';
import { storiesOf } from '@storybook/react';

import SearchBar from './SearchBarContainer';

storiesOf('SearchBar', module)
  .add('searchBar', () => (
    <SearchBar
    />
  ));