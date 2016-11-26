import React, { Component } from 'react'
import './stylesheets/Header.css'
import Col from 'react-bootstrap/lib/Col'
const Clock = require('react-clock')

class Header extends Component {
  render () {
    return (
      <nav className='navbar navbar-inverse'>
        <div className=''>
          <div className='row'>
            <Col xs={1} md={4}>
              <img className='navbar-logo' src={require('./images/layout/dbc-logo-new.png')} alt='brand-logo' />
            </Col>
            <Col xs={1} md={4} className='white-text'>
              <Clock />
            </Col>
            <Col xs={1} md={4} className='white-text'>
              <Clock />
            </Col>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
