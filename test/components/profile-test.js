
import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'
global.Ω = require('lomega')

import Profile from '../../src/modules/Profile'

describe('Profile', () => {
  xit('should have a menu', () => {
    const wrapper = mount(<Profile />)
    expect(wrapper.find('#menu')).to.have.length(1)
  })


  it('should have a heading of Simon', () => {
    const wrapper = mount(<Profile username='Simon'/>)
    expect (wrapper.props().username).to.equal('Simon')
  })
})
