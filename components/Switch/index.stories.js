import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Switch from './'

storiesOf('Switch', module)
  .add('without content', () => (
    <Switch/>
  ))
  .add('with options', () => (
    <Switch
      options={['left', 'right']}/>
  ))
  .add('with options and position', () => (
    <Switch
      position="right"
      options={['left', 'right']}/>
  ))
  .add('with options, position and click', () => (
    <Switch
      options={['left', 'right']}
      position="right"
      onClick={action('clicked')}/>
  ))
  .add('with options and click - disabled', () => (
    <Switch
      disabled={true}
      options={['left', 'right']}
      position="right"
      onClick={action('clicked')}/>
  ))
