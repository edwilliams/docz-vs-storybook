// https://jestjs.io/docs/en/expect

import React from 'react'
import ReactDOM from 'react-dom'

// https://airbnb.io/enzyme/
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Switch from './index'

Enzyme.configure({ adapter: new Adapter() })

// possible no value in having this after other tests are present?
it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Switch />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('should contain at least two buttons each with text content', () => {

  const wrapper = shallow(
    <Switch
      disabled={false}
      options={['left', 'right']}
      position="right"
      onClick={() => { console.log('clicked') }}/>
  )

  expect(wrapper.find('button').length).toEqual(2)

  // technically cannot fail due to defaultProps
  wrapper.find('button').forEach(node => {
    expect(node.text()).toBeTruthy()
  })

})

it('should change when received new options prop', () => {

  const wrapper = shallow(
    <Switch
      disabled={false}
      options={['left', 'right']}
      position="left"
      onClick={() => { console.log('clicked') }}/>
  )

  const first = wrapper.html()
  wrapper.setProps({ position: 'right' })
  const second = wrapper.html()
  expect(first).not.toBe(second)

})
