import React from 'react'

import { storiesOf } from '@storybook/react'
import { specs, describe, it } from 'storybook-addon-specifications'

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { shallow } from 'enzyme'
import expect from 'expect'
import { action } from '@storybook/addon-actions'

configure({ adapter: new Adapter() })

import Switch from '.'

storiesOf('Switch', module)
  .add('without content', () => <Switch/>)
  .add('with content', () => {
    const component = (
      <Switch
        options={['left', 'right']}/>
      )
      specs(() => describe('with content and click', () => {
        const wrapper = shallow(component)
        it('should contain at least two buttons each with text content', () => {
          expect(wrapper.find('button').length).toEqual(2)
        })
      }))
      return component
  })
  .add('with content and click', () => {
    const component = (
      <Switch
        disabled={false}
        options={['left', 'right']}
        position="left"
        onClick={action('clicked')}/>
    )

    specs(() => describe('with content and click', () => {
      const wrapper = shallow(component)
      it('should change when received new options prop', () => {
        const first = wrapper.html()
        wrapper.setProps({ position: 'right' })
        const second = wrapper.html()
        expect(first).not.toBe(second)
      })
    }))

    return component
  })
  .add('with content and click - disabled', () => {
    const component = (
      <Switch
        disabled={true}
        options={['left', 'right']}
        position="right"
        onClick={action('clicked')}/>
    )
    // tests here
    return component
  })
