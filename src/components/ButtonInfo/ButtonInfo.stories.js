import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ButtonInfo from './ButtonInfoContainer';

storiesOf('Button', module)
  .add('ButtonInfo', () => (
    <ButtonInfo/>
  ));