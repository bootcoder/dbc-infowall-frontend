import React, { Component } from 'react'

import Clock from 'react-clock'
import DateTime from './DateTime'

import './stylesheets/Header.css'

import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'

class Header extends Component {
  render () {
    return (
      <nav className='navbar-inverse pad-top-5px'>
          <Row>
            <Col xs={1} md={4}>
              <img className='navbar-logo' src={require('./images/layout/dbc-logo-new.png')} alt='brand-logo' />
            </Col>
            <Col xs={1} md={4} className='text-white text-center text-header header-clock-text'>
              <Clock />
            </Col>
            <Col xs={1} md={4} className='text-white text-center text-header header-date-text'>
              <DateTime />
            </Col>
          </Row>
      </nav>
    )
  }
}

export default Header
