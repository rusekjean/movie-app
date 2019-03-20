import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SearchBar from './SearchBarContainer';

storiesOf('SearchBar', module)
  .add('searchBar', () => (
    <SearchBar
    />
  ));